"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Link from "next/link"; // Tambahkan import Link

const jamProducts = [
  {
    name: "Durian Jam",
    price: 140000,
    detail: "280g Jar",
    tag: "SMALL BATCH",
    img: "/Durian 280 front.webp",
  },
  {
    name: "Pink Guava Jam",
    price: 22.5,
    detail: "240g Jar",
    tag: "",
    img: "/pink guava jam.webp",
  },
  {
    name: "Pineapple Jam",
    price: 16.0,
    detail: "240g Jar",
    tag: "",
    img: "/pineapple frozen.webp",
  },
  {
    name: "Mulberry Mix Jam",
    price: 18.0,
    detail: "240g Jar",
    tag: "",
    img: "/Blueberry Mix 145 & 280 (2).webp",
  },
  {
    name: "Kintamani Orange Jam",
    price: 15.5,
    detail: "240g Jar",
    tag: "",
    img: "/Salinan kintamani orange duo dgn buah.webp",
  },
  {
    name: "Mangga Lemongrass Jam",
    price: 24.0,
    detail: "280g Jar",
    tag: "",
    img: "/Salinan Mang lemongrass 280. lemon & lemon ginger 145 (7).webp",
  },
  {
    name: "Mangga Passion Fruit Jam",
    price: 17.0,
    detail: "280g Jar",
    tag: "",
    img: "/mango frozen.webp",
  },
  {
    name: "Mangga Jam",
    price: 19.0,
    detail: "280g Jar",
    tag: "",
    img: "/mango frozen.webp",
  },
  {
    name: "Mangga Vanilla Jam",
    price: 18.9,
    detail: "280g Jar",
    tag: "",
    img: "/mango frozen.webp",
  },
  {
    name: "Annaberry Jam",
    price: 15.5,
    detail: "280g Jar",
    tag: "",
    img: "/Salinan Blueberry 145 & 280 (2) (1).webp",
  },
  {
    name: "Blueberry Mix Jam",
    price: 19.5,
    detail: "280g Jar",
    tag: "",
    img: "/Blueberry Mix 145 & 280 (2).webp",
  },
];

export default function JamsPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFB]">
      <Navbar />

      <header className="max-w-7xl mx-auto px-6 pt-16 pb-10 text-center lg:text-left">
        <h1 className="text-4xl font-serif text-gray-900 mb-4 tracking-tight">
          Bali Taru Rahayu Collections
        </h1>
        <p className="text-gray-500 max-w-2xl text-sm leading-relaxed mx-auto lg:mx-0">
          Hand-picked at the peak of ripeness and preserved using traditional
          copper-kettle methods to capture the pure essence of the harvest.
        </p>
      </header>

      {/* Filter Bar - Sekarang Terhubung ke Folder Frozen */}
      <section className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-100 pb-8">
        <div className="flex gap-3">
          <Link
            href="/"
            className="px-6 py-2 bg-gray-100 text-gray-600 text-[10px] uppercase tracking-widest rounded-full font-bold hover:bg-gray-200 transition"
          >
            All
          </Link>
          <Link
            href="/Jems"
            className="px-6 py-2 bg-gray-100 text-gray-600 text-[10px] uppercase tracking-widest rounded-full font-bold hover:bg-gray-200 transition"
          >
            Jems
          </Link>
          {/* Link ke Folder Frozen yang baru kamu buat */}
          <Link
            href="/Frozen"
            className="px-6 py-2 bg-gray-100 text-gray-600 text-[10px] uppercase tracking-widest rounded-full font-bold hover:bg-gray-200 transition"
          >
            Frozen Fruits
          </Link>
        </div>
      </section>

      {/* Grid Produk */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {jamProducts.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              subTag={product.detail}
              tag={product.tag}
              img={product.img}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
