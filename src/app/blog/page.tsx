import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog | Cogni – Smart Home Automation Insights & Guides",
  description:
    "Explore the Cogni blog for expert insights on smart home automation, AI-powered security, energy optimization, and the future of connected living. Stay ahead of the curve.",
  keywords: [
    "smart home blog",
    "home automation tips",
    "AI smart security",
    "smart lighting guide",
    "climate control automation",
    "Cogni smart devices",
    "connected home",
    "IoT home technology",
  ],
  openGraph: {
    title: "Cogni Blog – Smart Home Automation Insights",
    description:
      "Expert guides, deep-dives, and the latest trends in smart home automation from the Cogni team.",
    type: "website",
    locale: "en_US",
    siteName: "Cogni",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cogni Blog – Smart Home Automation",
    description:
      "Expert guides, deep-dives, and the latest trends in smart home automation from the Cogni team.",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
