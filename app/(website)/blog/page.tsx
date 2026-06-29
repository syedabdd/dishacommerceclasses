import type { Metadata } from "next";
import Blog from "@/components/website/Blog";

export const metadata: Metadata = {
  title: "Science Blog | Disha Commerce Classes",
  description: "Read the latest articles, study tips, and educational news for Bihar Board Science Class 11 & 12 students.",
  alternates: {
    canonical: "https://www.dishaonlinescienceclasses.com/blog",
  },
};

export default function BlogPage() {
  return <Blog />;
}
