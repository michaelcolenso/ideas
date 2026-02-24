import type { Metadata } from "next";
import { store } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  title: `${store.name} — ${store.tagline}`,
  description: store.description,
  openGraph: {
    title: `${store.name} — ${store.tagline}`,
    description: store.description,
    type: "website",
    url: store.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${store.name} — ${store.tagline}`,
    description: store.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">{children}</body>
    </html>
  );
}
