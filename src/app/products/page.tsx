import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products | Cogni Ecosystem – Smart Home Devices",
  description:
    "Explore the entire Cogni smart home ecosystem. From AI-driven security hubs to circadian lighting and intelligent climate control, build your sanctuary.",
  keywords: [
    "Cogni products",
    "smart devices",
    "home automation store",
    "AI hubs",
    "smart security cameras",
    "automated lighting",
    "smart home ecosystem",
  ],
  openGraph: {
    title: "Cogni Ecosystem – Buy Smart Home Devices",
    description: "Build your connected home sanctuary with Cogni's premium line of intelligent devices.",
    type: "website",
    locale: "en_US",
    siteName: "Cogni",
  },
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
