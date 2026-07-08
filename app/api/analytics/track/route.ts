import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { sessionId } = await request.json();
    if (!sessionId) {
      return NextResponse.json({ error: 'Session ID is required' }, { status: 400 });
    }

    // Attempt to extract IP
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';

    let country = 'Unknown';
    let state = 'Unknown';
    let city = 'Unknown';

    // If it's a valid remote IP, fetch location
    if (ip && ip !== '127.0.0.1' && ip !== '::1' && !ip.startsWith('192.168.') && !ip.startsWith('10.')) {
      try {
        // Using ipapi.co (HTTPS, no API key needed, 1000 req/day free)
        const geoRes = await fetch(`https://ipapi.co/${ip}/json/`, {
          headers: { 'User-Agent': 'DishaCommerce/1.0' },
        });
        if (geoRes.ok) {
          const geo = await geoRes.json();
          if (!geo.error) {
            country = geo.country_name || 'Unknown';
            state = geo.region || 'Unknown';
            city = geo.city || 'Unknown';
          }
        }
      } catch (err) {
        console.error('Geolocation error:', err);
      }
    }

    // Upsert using raw SQL — check if sessionId exists first
    const [existing]: any = await db.execute(
      'SELECT id FROM VisitorAnalytics WHERE sessionId = ? LIMIT 1',
      [sessionId]
    );

    if (existing.length > 0) {
      // Update lastActivity only
      await db.execute(
        'UPDATE VisitorAnalytics SET lastActivity = NOW() WHERE sessionId = ?',
        [sessionId]
      );
    } else {
      // Insert new visitor
      await db.execute(
        'INSERT INTO VisitorAnalytics (sessionId, country, state, city, createdAt, lastActivity) VALUES (?, ?, ?, ?, NOW(), NOW())',
        [sessionId, country, state, city]
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Visitor tracking error:', error);
    return NextResponse.json({ error: 'Failed to track visitor' }, { status: 500 });
  }
}
