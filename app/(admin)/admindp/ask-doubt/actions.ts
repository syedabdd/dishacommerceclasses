"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function getDoubts(page: number = 1, limit: number = 20) {
  try {
    const offset = (page - 1) * limit;
    const [rows]: any = await db.execute("SELECT * FROM ask_doubts ORDER BY created_at DESC LIMIT ? OFFSET ?", [limit, offset]);
    const [countResult]: any = await db.execute("SELECT COUNT(*) as total FROM ask_doubts");
    const total = countResult[0].total;
    const totalPages = Math.ceil(total / limit);
    return { success: true, data: rows as any[], totalPages };
  } catch (error) {
    console.error("Error fetching doubts:", error);
    return { success: false, data: [], totalPages: 1 };
  }
}

export async function updateDoubtStatus(id: number, status: string) {
  try {
    await db.execute("UPDATE ask_doubts SET status = ? WHERE id = ?", [status, id]);
    revalidatePath("/admindp/ask-doubt");
    return { success: true };
  } catch (error) {
    console.error("Error updating doubt status:", error);
    return { success: false };
  }
}

export async function deleteDoubt(id: number) {
  try {
    await db.execute("DELETE FROM ask_doubts WHERE id = ?", [id]);
    revalidatePath("/admindp/ask-doubt");
    return { success: true };
  } catch (error) {
    console.error("Error deleting doubt:", error);
    return { success: false };
  }
}
