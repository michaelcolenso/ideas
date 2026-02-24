import { Product, formatPrice } from "@/lib/config";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-200">
      {product.popular && (
        <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
          Popular
        </div>
      )}
      <div className="mb-4">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
          {product.category}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">
        {product.name}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {product.description}
      </p>
      <ul className="space-y-2 mb-6">
        {product.features.slice(0, 4).map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
            <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold">{formatPrice(product.price)}</span>
        <Link
          href={`/products/${product.id}`}
          className="px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
