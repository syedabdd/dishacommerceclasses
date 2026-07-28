import type { Metadata } from "next";
import Blog from "@/components/website/Blog";

export const metadata: Metadata = {
  title: "Commerce Blog | Study Tips, Notes & Bihar Board Updates",
  description: "Read the latest articles, study tips, Accountancy notes, Business Studies guides, and Bihar Board Commerce exam updates for Class 11 & 12 students.",
  alternates: {
    canonical: "https://www.dishacommerceclasses.com/blog",
  },
  openGraph: {
    title: "Commerce Blog | Disha Commerce Classes",
    description: "Latest Commerce articles, study tips, notes, and Bihar Board BSEB exam preparation for Class 11 & 12 students.",
    url: "https://www.dishacommerceclasses.com/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return <Blog />;
}
