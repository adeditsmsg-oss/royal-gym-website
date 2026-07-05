import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { GYM_CONFIG } from "./config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://royal-gym-prembazar.vercel.app"),
  title: `${GYM_CONFIG.name} | ${GYM_CONFIG.tagline}`,
  description: `Join ${GYM_CONFIG.name} at Durga Puja Mandap, Prembazar, Kharagpur. The ultimate fitness center near IIT Kharagpur for muscle gain, weight loss, and crossfit. Certified personal trainers & imported equipment.`,
  keywords: [
    "Gym Near Me",
    "Best Gym in Kharagpur",
    "Fitness Center in Prembazar",
    "Personal Trainer in Kharagpur",
    "Royal Gym Prembazar",
    "Royal Gym IIT Kharagpur",
    "Body Transformation Kharagpur",
    "CrossFit in Kharagpur",
    "Student Discount Gym Kharagpur"
  ],
  openGraph: {
    title: `${GYM_CONFIG.name} | Kharagpur's Premium Fitness Destination`,
    description: "Transform your physique with plate-loaded heavy machinery, elite 1-on-1 personal training, professional CrossFit setup, and customized diet blueprints near IIT Prembazar.",
    images: [{ url: "/assets/gym_interior.png", width: 1200, height: 630, alt: "ROYAL Gym IIT Prembazar Kharagpur" }],
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: `${GYM_CONFIG.name} | Kharagpur's Premium Fitness Destination`,
    description: "Transform your physique with plate-loaded heavy machinery, elite 1-on-1 personal training, professional CrossFit setup, and customized diet blueprints near IIT Prembazar.",
    images: ["/assets/gym_interior.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness schema for Local SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Gym",
    "name": GYM_CONFIG.name,
    "image": "https://royal-gym-prembazar.vercel.app/assets/gym_interior.png",
    "@id": "https://royal-gym-prembazar.vercel.app/#gym",
    "url": "https://royal-gym-prembazar.vercel.app",
    "telephone": GYM_CONFIG.phoneRaw,
    "priceRange": GYM_CONFIG.priceRange,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Durga Puja Mandap, Opposite to Prembazar",
      "addressLocality": "Kharagpur",
      "postalCode": "721301",
      "addressRegion": "West Bengal",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.3064602,
      "longitude": 87.3039656
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "05:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "06:00",
        "closes": "13:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": GYM_CONFIG.rating,
      "reviewCount": GYM_CONFIG.reviewCount.replace("+", "")
    }
  };

  // FAQ Schema markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": GYM_CONFIG.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full bg-brand-dark text-foreground antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
