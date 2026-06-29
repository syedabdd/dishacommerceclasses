import type { Metadata } from "next";
import BlogPost from "@/components/website/BlogPost";
import { db } from "@/lib/db";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const [rows] = await db.execute("SELECT * FROM blogs WHERE id = ?", [id]);
  const blog = (rows as any[])[0];
  
  if (!blog) {
    return { title: "Blog Not Found | Disha Online Classes" };
  }

  const cleanDescription = blog.content ? blog.content.replace(/<[^>]+>/g, '').substring(0, 150) + "..." : "";

  return {
    title: `${blog.title} | Disha Online Classes`,
    description: cleanDescription,
    alternates: {
      canonical: `https://www.dishaonlinescienceclasses.com/blog/${id}`,
    },
    openGraph: {
      title: `${blog.title} | Disha Online Classes`,
      description: cleanDescription,
      url: `https://www.dishaonlinescienceclasses.com/blog/${id}`,
      type: "article",
      images: blog.image ? [blog.image] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | Disha Online Classes`,
      description: cleanDescription,
      images: blog.image ? [blog.image] : undefined,
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  const [rows] = await db.execute("SELECT * FROM blogs WHERE id = ?", [id]);
  const blog = (rows as any[])[0];

  if (!blog) return <div>Blog not found</div>;
  
  // Create JSON-LD schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "image": blog.image ? [blog.image] : [],
    "datePublished": new Date(blog.created_at).toISOString(),
    "dateModified": new Date(blog.created_at).toISOString(),
    "author": {
      "@type": "Organization",
      "name": "Disha Commerce Classes",
      "url": "https://www.dishaonlinescienceclasses.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Disha Commerce Classes",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.dishaonlinescienceclasses.com/Logo.PNG"
      }
    },
    "description": blog.content ? blog.content.replace(/<[^>]+>/g, '').substring(0, 150) + "..." : "",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.dishaonlinescienceclasses.com/blog/${id}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPost initialBlog={JSON.parse(JSON.stringify(blog))} />
    </>
  );
}
