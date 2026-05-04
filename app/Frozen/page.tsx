"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

const frozenProducts = [
  {
    name: "Flash-Frozen Wild Blueberries",
    price: 22.5,
    detail: "2lb Eco-Pouch",
    tag: "",
    img: "/blueberries frozen.webp",
  },
  {
    name: "Frozen Mango Slices",
    price: 19.0,
    detail: "/2lb Eco-Pouch",
    tag: "SMOOTHIE READY",
    img: "/mango frozen.webp",
  },
  {
    name: "Frozen Raspberries",
    price: 24.0,
    detail: "2lb Eco-Pouch",
    tag: "",
    img: "/raspberries frozen.webp",
  },
  {
    name: "Kintamani Orange Frozen",
    price: 18.5,
    detail: "1kg Pack",
    tag: "NEW",
    img: "/kintamani-orange-frozen.webp",
  },
];

export default function FrozenPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <header className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <h1 className="text-4xl font-serif text-gray-900 mb-2">
          Frozen Fruit Collections
        </h1>
        <p className="text-gray-500 text-sm">
          Freshly picked and flash-frozen to lock in nutrients and flavor.
        </p>
      </header>

      {/* Filter Bar - Sekarang Link antar kategori aktif */}
      <section className="max-w-7xl mx-auto px-6 mb-12 flex gap-3 border-b border-gray-100 pb-8">
        <Link
          href="/Jems"
          className="px-6 py-2 bg-gray-100 text-gray-600 text-[10px] uppercase tracking-widest rounded-full font-bold hover:bg-gray-200 transition"
        >
          Jams
        </Link>
        <button className="px-6 py-2 bg-red-800 text-white text-[10px] uppercase tracking-widest rounded-full font-bold shadow-md">
          Frozen Fruits
        </button>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {frozenProducts.map((p, i) => (
            <ProductCard
              key={i}
              name={p.name}
              price={p.price}
              subTag={p.detail}
              tag={p.tag}
              img={p.img}
            />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
