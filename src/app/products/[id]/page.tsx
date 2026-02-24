import { notFound } from "next/navigation";
import { products, getProduct, formatPrice } from "@/lib/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BuyButton from "./BuyButton";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id);
  if (!product) notFound();

  return (
    <>
      <Header />
      <main className="pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <a
            href="/"
            className="text-sm text-gray-500 hover:text-gray-900 transition mb-8 inline-block"
          >
            &larr; Back to all products
          </a>
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                {product.category}
              </span>
              <h1 className="text-4xl font-bold mt-2 mb-4">{product.name}</h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {product.longDescription}
              </p>
              <h3 className="text-lg font-semibold mb-4">What&apos;s included</h3>
              <ul className="space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green-500 mt-0.5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2">
              <div className="sticky top-24 bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <div className="text-4xl font-bold mb-1">
                  {formatPrice(product.price)}
                </div>
                <p className="text-sm text-gray-500 mb-6">
                  One-time payment &middot; Lifetime access
                </p>
                <BuyButton productId={product.id} />
                <div className="mt-6 space-y-3 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    Secure checkout via Stripe
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Instant digital delivery
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                      <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                    </svg>
                    Money-back guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
