import { products } from "@/lib/config";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section id="products" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Products that pay for themselves
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Every product is built to save you time and make you money. One
            client, one project, and they&apos;ve already paid for themselves.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
