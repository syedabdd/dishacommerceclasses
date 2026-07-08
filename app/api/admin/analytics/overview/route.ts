import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const now = new Date();

    // Live: last 5 minutes
    const [liveResult]: any = await db.execute(
      "SELECT COUNT(*) as count FROM VisitorAnalytics WHERE lastActivity >= DATE_SUB(NOW(), INTERVAL 5 MINUTE)"
    );

    // Today
    const [todayResult]: any = await db.execute(
      "SELECT COUNT(*) as count FROM VisitorAnalytics WHERE DATE(createdAt) = CURDATE()"
    );

    // This Week (Sunday to today)
    const [weekResult]: any = await db.execute(
      "SELECT COUNT(*) as count FROM VisitorAnalytics WHERE createdAt >= DATE_SUB(CURDATE(), INTERVAL WEEKDAY(CURDATE()) + 1 DAY)"
    );

    // This Month
    const [monthResult]: any = await db.execute(
      "SELECT COUNT(*) as count FROM VisitorAnalytics WHERE MONTH(createdAt) = MONTH(NOW()) AND YEAR(createdAt) = YEAR(NOW())"
    );

    // Total
    const [totalResult]: any = await db.execute(
      "SELECT COUNT(*) as count FROM VisitorAnalytics"
    );

    return NextResponse.json({
      success: true,
      data: {
        live: Number(liveResult[0]?.count) || 0,
        today: Number(todayResult[0]?.count) || 0,
        week: Number(weekResult[0]?.count) || 0,
        month: Number(monthResult[0]?.count) || 0,
        total: Number(totalResult[0]?.count) || 0,
      }
    });
  } catch (error: any) {
    console.error("Failed to fetch overview:", error);
    return NextResponse.json({ success: false, error: 'Failed to fetch overview' }, { status: 500 });
  }
}
