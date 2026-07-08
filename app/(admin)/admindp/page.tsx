import { db } from "@/lib/db";
import Dashboard from "@/components/admin/Dashboard";

export default async function AdminPage() {
  let totalDoubts = 0;
  let studyMaterials = 0;
  let liveVisitors = 0;
  let todaysTraffic = 0;
  const recentFeedback: any[] = [];

  try {
    // Use raw mysql queries to avoid Prisma client initialization issues
    const [doubtsResult]: any = await db.execute(
      "SELECT COUNT(*) as count FROM ask_doubts"
    );
    totalDoubts = Number(doubtsResult[0]?.count) || 0;

    const [materialsResult]: any = await db.execute(
      "SELECT COUNT(*) as count FROM blogs"
    );
    studyMaterials = Number(materialsResult[0]?.count) || 0;
  } catch (err) {
    console.error("[AdminPage] Error fetching core metrics:", err);
  }

  try {
    // Live Visitors (active within the last 5 minutes)
    const [liveVisitorsResult]: any = await db.execute(
      "SELECT COUNT(*) as count FROM VisitorAnalytics WHERE lastActivity >= DATE_SUB(NOW(), INTERVAL 5 MINUTE)"
    );
    liveVisitors = Number(liveVisitorsResult[0]?.count) || 0;

    // Today's Traffic (new sessions created today)
    const [todayTrafficResult]: any = await db.execute(
      "SELECT COUNT(*) as count FROM VisitorAnalytics WHERE DATE(createdAt) = CURDATE()"
    );
    todaysTraffic = Number(todayTrafficResult[0]?.count) || 0;
  } catch (err) {
    // VisitorAnalytics table may not exist yet — fail gracefully
    console.error("[AdminPage] VisitorAnalytics table not available:", err);
  }

  return (
    <Dashboard
      metrics={{ totalDoubts, studyMaterials, liveVisitors, todaysTraffic }}
      recentFeedback={recentFeedback}
    />
  );
}

