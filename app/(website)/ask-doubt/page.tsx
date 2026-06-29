import type { Metadata } from "next";
import AskDoubt from "@/components/website/AskDoubt";

export const metadata: Metadata = {
  title: "Ask Doubts | Disha Commerce Classes",
  description: "Have a science doubt? Ask the expert teachers at Disha Commerce Classes. We provide quick and accurate solutions for Bihar Board Science students.",
  alternates: {
    canonical: "https://www.dishaonlinescienceclasses.com/ask-doubt",
  },
};

export default function AskDoubtPage() {
  return <AskDoubt />;
}
