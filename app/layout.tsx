import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import VisitorTracker from "@/components/website/VisitorTracker";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dishacommerceclasses.com"),

  title: {
    default:
      "Disha Commerce Classes | Bihar's Best Online Coaching for Class 11 & 12",
    template: "%s | Disha Commerce Classes",
  },

  description:
    "Disha Commerce Classes is Bihar's leading online coaching platform for Class 11 and 12 Science students. Get expert guidance in Physics, Chemistry, Biology, NCERT preparation, Bihar Board exams, quizzes, notes, blogs, and doubt support.",

  keywords: [
    "Disha Online Classes",
    "Disha Commerce Classes",
    "Bihar Board Science Coaching",
    "Online Science Coaching Bihar",
    "Class 10 Science Bihar Board",
    "Class 9 Science Bihar Board",
    "Class 11 Science Coaching",
    "Class 12 Science Coaching",
    "Online Science Classes Bihar",
    "Physics Coaching Bihar",
    "Chemistry Coaching Bihar",
    "Biology Coaching Bihar",
    "NCERT Science Notes",
    "Science Quiz",
    "Bihar Board Exam Preparation",
  ],
  alternates: {
    canonical: "https://www.dishacommerceclasses.com",
  },

  authors: [
    {
      name: "Disha Commerce Classes",
      url: "https://www.dishacommerceclasses.com",
    },
  ],

  creator: "Disha Commerce Classes",
  publisher: "Disha Commerce Classes",

  openGraph: {
    title:
      "Disha Commerce Classes | Bihar's Best Online Coaching for Class 11 & 12",
    description:
      "Join Bihar's leading online science coaching platform for Class 11 & 12 students. Expert teachers, notes, quizzes, blogs, and complete Bihar Board preparation.",
    url: "https://www.dishacommerceclasses.com",
    siteName: "Disha Commerce Classes",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Disha Commerce Classes",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Disha Commerce Classes | Bihar's Best Online Coaching for Class 11 & 12",
    description:
      "Expert online coaching for Bihar Board Science students with notes, quizzes, blogs, and exam preparation.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var stored = localStorage.getItem('disha-theme');

                  if (stored === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else if (
                    !stored &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches
                  ) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>

      <body className="font-sans antialiased bg-white text-slate-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "EducationalOrganization",
                  "@id": "https://www.dishacommerceclasses.com/#organization",
                  name: "Disha Commerce Classes",
                  url: "https://www.dishacommerceclasses.com",
                  logo: "https://www.dishacommerceclasses.com/Logo.PNG",
                  sameAs: [
                    "https://www.youtube.com/@DishaOnlineClasses",
                    "https://www.facebook.com/dishaonlineclasses",
                  ],
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.dishacommerceclasses.com/#localbusiness",
                  name: "Disha Online Classes",
                  image: "https://www.dishacommerceclasses.com/Logo.PNG",
                  url: "https://www.dishacommerceclasses.com",
                  telephone: "+917700879453",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Patna",
                    addressRegion: "Bihar",
                    addressCountry: "IN",
                  },
                  priceRange: "$$",
                  category: "Science Coaching Institute",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.dishacommerceclasses.com/#website",
                  url: "https://www.dishacommerceclasses.com",
                  name: "Disha Commerce Classes",
                  publisher: {
                    "@id": "https://www.dishacommerceclasses.com/#organization",
                  },
                },
              ],
            }),
          }}
        />
        {children}
        <VisitorTracker />
      </body>
    </html>
  );
}
