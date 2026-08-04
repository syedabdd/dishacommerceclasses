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
      "Disha Commerce Classes | Bihar's Best Online Commerce Coaching for Class 11 & 12",
    template: "%s | Disha Commerce Classes",
  },

  description:
    "Disha Commerce Classes is Bihar's leading online coaching platform for Class 11 and 12 Commerce students. Get expert guidance in Accountancy, Business Studies, Economics, Mathematics, Bihar Board exam preparation, quizzes, notes, blogs, and live doubt support.",

  keywords: [
    "Disha Commerce Classes",
    "Disha Online Classes",
    "Bihar Board Commerce Coaching",
    "Online Commerce Coaching Bihar",
    "Class 11 Commerce Coaching Bihar",
    "Class 12 Commerce Coaching Bihar",
    "Accountancy Coaching Bihar",
    "Business Studies Coaching Bihar",
    "Economics Coaching Bihar",
    "Mathematics Commerce Bihar",
    "BSEB Commerce Preparation",
    "Bihar Board Exam Preparation",
    "Online Commerce Classes Bihar",
    "Commerce Notes Bihar Board",
    "Best Commerce Coaching Patna",
    "Live Commerce Classes Online",
    "Commerce Quiz Bihar Board",
    "Free Commerce Courses Bihar",
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
      "Disha Commerce Classes | Bihar's Best Online Commerce Coaching for Class 11 & 12",
    description:
      "Join Bihar's leading online Commerce coaching platform for Class 11 & 12 students. Expert teachers, Accountancy, Business Studies, Economics notes, quizzes, live classes, and complete Bihar Board preparation.",
    url: "https://www.dishacommerceclasses.com",
    siteName: "Disha Commerce Classes",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Disha Commerce Classes — Bihar's Best Commerce Coaching",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Disha Commerce Classes | Bihar's Best Online Commerce Coaching for Class 11 & 12",
    description:
      "Expert online Commerce coaching for Bihar Board students — Accountancy, Business Studies, Economics, live classes, quizzes, notes, and exam preparation.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/Logo2.png", type: "image/png" },
    ],
    apple: [
      { url: "/Logo2.png", type: "image/png" },
    ],
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
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.dishacommerceclasses.com/Logo.PNG",
                    width: 200,
                    height: 200,
                  },
                  sameAs: [
                    "https://www.youtube.com/@DishaOnlineClasses",
                    "https://www.facebook.com/dishaonlineclasses",
                    "https://www.instagram.com/dishaonlineclasses",
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+91-7700879453",
                    contactType: "customer service",
                    availableLanguage: ["Hindi", "English"],
                  },
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.dishacommerceclasses.com/#localbusiness",
                  name: "Disha Commerce Classes",
                  image: "https://www.dishacommerceclasses.com/Logo.PNG",
                  url: "https://www.dishacommerceclasses.com",
                  telephone: "+917700879453",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Patna",
                    addressRegion: "Bihar",
                    addressCountry: "IN",
                  },
                  priceRange: "₹₹",
                  category: "Commerce Coaching Institute",
                  description: "Bihar's leading online Commerce coaching for Class 11 & 12 (BSEB). Expert guidance in Accountancy, Business Studies, Economics & Mathematics.",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.dishacommerceclasses.com/#website",
                  url: "https://www.dishacommerceclasses.com",
                  name: "Disha Commerce Classes",
                  description: "Bihar's best online Commerce coaching platform for Class 11 & 12 BSEB students.",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate: "https://www.dishacommerceclasses.com/blog?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
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
