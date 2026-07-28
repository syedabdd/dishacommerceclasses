import type { Metadata } from "next";
import AskDoubt from "@/components/website/AskDoubt";

export const metadata: Metadata = {
  title: "Ask Doubt | Get Commerce Doubt Solved Instantly",
  description: "Have a Commerce doubt? Ask our expert teachers at Disha Commerce Classes. Quick and accurate solutions for Accountancy, Business Studies, Economics, and Mathematics for Bihar Board Class 11 & 12 students.",
  alternates: {
    canonical: "https://www.dishacommerceclasses.com/ask-doubt",
  },
  openGraph: {
    title: "Ask Doubt | Disha Commerce Classes",
    description: "Get your Commerce doubts solved instantly by expert teachers. Accountancy, Business Studies, Economics help for BSEB Class 11 & 12.",
    url: "https://www.dishacommerceclasses.com/ask-doubt",
    type: "website",
  },
};

export default function AskDoubtPage() {
  return <AskDoubt />;
}
