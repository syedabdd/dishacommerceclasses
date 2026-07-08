import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    // 1. Daily visitors for the last 30 days
    const [dailyRows]: any = await db.execute(`
      SELECT 
        DATE_FORMAT(createdAt, '%m-%d') as date,
        COUNT(*) as visitors
      FROM VisitorAnalytics
      WHERE createdAt >= DATE_SUB(CURDATE(), INTERVAL 29 DAY)
      GROUP BY DATE(createdAt)
      ORDER BY DATE(createdAt) ASC
    `);

    // Build a full 30-day map (fill missing days with 0)
    const dailyMap: Record<string, number> = {};
    for (let i = 29; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = `${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      dailyMap[key] = 0;
    }
    dailyRows.forEach((row: any) => {
      if (dailyMap[row.date] !== undefined) {
        dailyMap[row.date] = Number(row.visitors);
      }
    });
    const dailyChart = Object.keys(dailyMap).map(date => ({ date, visitors: dailyMap[date] }));

    // 2. Top Countries
    const [countryRows]: any = await db.execute(`
      SELECT country as name, COUNT(*) as count
      FROM VisitorAnalytics
      GROUP BY country
      ORDER BY count DESC
      LIMIT 5
    `);

    // 3. Top Cities
    const [cityRows]: any = await db.execute(`
      SELECT city as name, COUNT(*) as count
      FROM VisitorAnalytics
      GROUP BY city
      ORDER BY count DESC
      LIMIT 5
    `);

    // 4. Top States
    const [stateRows]: any = await db.execute(`
      SELECT state as name, COUNT(*) as count
      FROM VisitorAnalytics
      GROUP BY state
      ORDER BY count DESC
      LIMIT 5
    `);

    return NextResponse.json({
      success: true,
      data: {
        dailyChart,
        topCountries: countryRows.map((r: any) => ({ name: r.name, count: Number(r.count) })),
        topCities: cityRows.map((r: any) => ({ name: r.name, count: Number(r.count) })),
        topStates: stateRows.map((r: any) => ({ name: r.name, count: Number(r.count) })),
      }
    });
  } catch (error: any) {
    console.error("Failed to fetch charts:", error);
    return NextResponse.json({ success: false, error: 'Failed to fetch charts' }, { status: 500 });
  }
}
