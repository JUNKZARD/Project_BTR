"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/data/products";

interface CatalogClientProps {
  products: Product[];
  currentCategory: "all" | "jams" | "frozen";
}

export default function CatalogClient({
  products,
  currentCategory,
}: CatalogClientProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const filteredProducts = products.filter((product) => {
    if (!selectedSize) return true;
    return product.detail && product.detail.includes(selectedSize);
  });

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-100 pb-8">
        <div className="flex flex-wrap justify-center md:justify-start gap-3 w-full md:w-auto">
          <Link
            href="/katalog"
            className={`px-6 py-2 text-[10px] uppercase tracking-widest rounded-full font-bold transition ${
              currentCategory === "all"
                ? "bg-red-800 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All
          </Link>
          <Link
            href="/katalog/jams"
            className={`px-6 py-2 text-[10px] uppercase tracking-widest rounded-full font-bold transition ${
              currentCategory === "jams"
                ? "bg-red-800 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Jams
          </Link>
          <Link
            href="/katalog/frozen"
            className={`px-6 py-2 text-[10px] uppercase tracking-widest rounded-full font-bold transition ${
              currentCategory === "frozen"
                ? "bg-red-800 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Frozen Fruits
          </Link>
        </div>

        {/* Size Filters */}
        {currentCategory !== "frozen" && (
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 md:ml-auto w-full md:w-auto">
            <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest mr-1 shrink-0">
              Size:
            </span>
            {[
              { label: "280gr", value: "280" },
              { label: "145gr", value: "145" },
              { label: "30gr", value: "30" },
            ].map((size) => (
              <button
                key={size.value}
                onClick={() =>
                  setSelectedSize(
                    selectedSize === size.value ? null : size.value
                  )
                }
                className={`px-4 py-2 shrink-0 text-[10px] uppercase tracking-widest rounded-full font-bold transition ${
                  selectedSize === size.value
                    ? "bg-gray-800 text-white shadow-md"
                    : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300"
                }`}
              >
                {size.label}
              </button>
            ))}
          </div>
        )}
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-24">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={index}
                slug={product.slug}
                name={product.name}
                price={product.price}
                subTag={product.detail}
                tag={product.tag}
                img={product.img}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-gray-500 text-sm mb-3">
              No products match the selected size.
            </p>
            <button
              onClick={() => setSelectedSize(null)}
              className="px-6 py-2 bg-white border border-gray-200 text-gray-700 text-[10px] uppercase tracking-widest rounded-full font-bold shadow-sm hover:bg-gray-50 transition"
            >
              Clear Filter
            </button>
          </div>
        )}
      </section>
    </>
  );
}
