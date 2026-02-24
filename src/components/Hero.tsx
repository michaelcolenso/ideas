import { store } from "@/lib/config";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-1.5 bg-green-50 text-green-700 text-sm font-medium rounded-full">
          New products added regularly
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
          Ship faster with
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            premium digital tools
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          {store.description}
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#products"
            className="px-8 py-3.5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition shadow-lg shadow-gray-900/20"
          >
            Browse Products
          </a>
          <a
            href="#newsletter"
            className="px-8 py-3.5 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition"
          >
            Join Newsletter
          </a>
        </div>
        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Instant delivery
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Lifetime updates
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Source code included
          </span>
        </div>
      </div>
    </section>
  );
}
