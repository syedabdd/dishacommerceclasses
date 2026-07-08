import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '50');

    const [visitors]: any = await db.execute(
      `SELECT id, country, state, city, createdAt, lastActivity
       FROM VisitorAnalytics
       ORDER BY lastActivity DESC
       LIMIT ?`,
      [limit]
    );

    return NextResponse.json({
      success: true,
      data: visitors,
    });
  } catch (error: any) {
    console.error("Failed to fetch visitors:", error);
    return NextResponse.json({ success: false, error: 'Failed to fetch visitors' }, { status: 500 });
  }
}
