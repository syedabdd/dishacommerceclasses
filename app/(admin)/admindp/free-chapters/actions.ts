"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createChapter(data: { courseId: number; subjectId: number; name: string; slug: string; displayOrder: number; status: string }) {
  try {
    const chapter = await prisma.freeCourseChapter.create({
      data,
    });
    revalidatePath("/admindp/free-chapters");
    revalidatePath("/free-courses");
    return { success: true, data: chapter };
  } catch (error: any) {
    console.error("Failed to create chapter:", error);
    return { success: false, error: error.message || "Failed to create chapter" };
  }
}

export async function updateChapter(id: number, data: { courseId: number; subjectId: number; name: string; slug: string; displayOrder: number; status: string }) {
  try {
    const chapter = await prisma.freeCourseChapter.update({
      where: { id },
      data,
    });
    revalidatePath("/admindp/free-chapters");
    revalidatePath("/free-courses");
    return { success: true, data: chapter };
  } catch (error: any) {
    console.error("Failed to update chapter:", error);
    return { success: false, error: error.message || "Failed to update chapter" };
  }
}

export async function deleteChapter(id: number) {
  try {
    await prisma.freeCourseChapter.delete({
      where: { id },
    });
    revalidatePath("/admindp/free-chapters");
    revalidatePath("/free-courses");
    return { success: true };
  } catch (error: any) {
    console.error("Failed to delete chapter:", error);
    return { success: false, error: error.message || "Failed to delete chapter" };
  }
}

export async function getChapters(page: number = 1, limit: number = 20) {
  try {
    const skip = (page - 1) * limit;
    const [chapters, total] = await Promise.all([
      prisma.freeCourseChapter.findMany({
        skip,
        take: limit,
        include: { course: true, subject: true },
        orderBy: [
          { courseId: 'asc' },
          { subjectId: 'asc' },
          { displayOrder: 'asc' }
        ],
      }),
      prisma.freeCourseChapter.count()
    ]);
    const totalPages = Math.ceil(total / limit);
    return { success: true, data: chapters, totalPages };
  } catch (error: any) {
    console.error("Failed to get chapters:", error);
    return { success: false, error: error.message || "Failed to get chapters" };
  }
}

export async function getSubjectsByCourse(courseId: number) {
  try {
    const subjects = await prisma.freeCourseSubject.findMany({
      where: { courseId },
      orderBy: { displayOrder: 'asc' }
    });
    return { success: true, data: subjects };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
