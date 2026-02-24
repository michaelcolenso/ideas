"use client";

import { store } from "@/lib/config";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-bold tracking-tight">
          {store.name}
        </a>
        <div className="flex items-center gap-8">
          <a
            href="#products"
            className="text-sm text-gray-600 hover:text-gray-900 transition"
          >
            Products
          </a>
          <a
            href="#pricing"
            className="text-sm text-gray-600 hover:text-gray-900 transition"
          >
            Pricing
          </a>
          <a
            href="#newsletter"
            className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Get Updates
          </a>
        </div>
      </nav>
    </header>
  );
}
