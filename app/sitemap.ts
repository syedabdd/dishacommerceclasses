import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://dishacommerceclasses.com";

  // 1. Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ask-doubt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/free-courses`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  try {
    // 2. Fetch Dynamic Data
    // Blogs
    const blogs = await prisma.blogs.findMany({
      select: { id: true, created_at: true },
    });

    const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.id}`,
      lastModified: blog.created_at || new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

    // Quizzes
    const quizzes = await prisma.quiz.findMany({
      where: { isPublished: true },
      select: { id: true, updatedAt: true },
    });

    const quizRoutes: MetadataRoute.Sitemap = quizzes.map((quiz) => ({
      url: `${baseUrl}/quiz/${quiz.id}`,
      lastModified: quiz.updatedAt || new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

    // Free Courses
    const courses = await prisma.freeCourse.findMany({
      where: { status: "Published" },
      include: {
        subjects: {
          include: {
            chapters: {
              where: { status: "Published" },
              include: {
                lectures: true
              }
            }
          }
        }
      }
    });

    const freeCourseRoutes: MetadataRoute.Sitemap = [];
    
    courses.forEach(course => {
      freeCourseRoutes.push({
        url: `${baseUrl}/free-courses/${course.slug}`,
        lastModified: course.updatedAt || new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });

      course.subjects.forEach(subject => {
        freeCourseRoutes.push({
          url: `${baseUrl}/free-courses/${course.slug}/${subject.slug}`,
          lastModified: subject.updatedAt || new Date(),
          changeFrequency: "monthly",
          priority: 0.7,
        });

        subject.chapters.forEach(chapter => {
          chapter.lectures.forEach(lecture => {
            freeCourseRoutes.push({
              url: `${baseUrl}/free-courses/${course.slug}/${subject.slug}/${chapter.slug}/${lecture.slug}`,
              lastModified: lecture.updatedAt || new Date(),
              changeFrequency: "monthly",
              priority: 0.6,
            });
          });
        });
      });
    });

    // Return all combined
    return [...staticRoutes, ...blogRoutes, ...quizRoutes, ...freeCourseRoutes];
  } catch (error) {
    console.error("Error generating sitemap dynamic routes:", error);
    // Fallback to static routes if database fails
    return staticRoutes;
  }
}
