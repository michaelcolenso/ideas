"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="newsletter" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Get notified of new drops
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          Join the list. New products, early-bird discounts, and free resources
          delivered to your inbox. No spam, unsubscribe anytime.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 bg-blue-600 font-semibold rounded-xl hover:bg-blue-500 transition disabled:opacity-60"
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </form>
        {status === "success" && (
          <p className="mt-4 text-green-400 text-sm">
            You&apos;re in! Check your inbox for a welcome message.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-400 text-sm">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}
