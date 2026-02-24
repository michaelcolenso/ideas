"use client";

import { useState } from "react";

export default function BuyButton({ productId }: { productId: string }) {
  const [loading, setLoading] = useState(false);

  async function handleBuy() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      const { url } = await res.json();
      if (url) {
        window.location.href = url;
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleBuy}
      disabled={loading}
      className="w-full py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-500 transition disabled:opacity-60 shadow-lg shadow-blue-600/20"
    >
      {loading ? "Redirecting to checkout..." : "Buy Now"}
    </button>
  );
}
