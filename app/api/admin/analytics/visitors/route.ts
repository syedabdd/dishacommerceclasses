import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '20');
    const page = parseInt(searchParams.get('page') || '1');
    const offset = (page - 1) * limit;

    const [visitors]: any = await db.execute(
      `SELECT id, country, state, city, createdAt, lastActivity
       FROM VisitorAnalytics
       ORDER BY lastActivity DESC
       LIMIT ? OFFSET ?`,
      [limit, offset]
    );

    const [countResult]: any = await db.execute(
      `SELECT COUNT(*) as total FROM VisitorAnalytics`
    );
    const total = countResult[0].total;
    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      success: true,
      data: visitors,
      totalPages,
    });
  } catch (error: any) {
    console.error("Failed to fetch visitors:", error);
    return NextResponse.json({ success: false, error: 'Failed to fetch visitors' }, { status: 500 });
  }
}
