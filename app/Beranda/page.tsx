import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    name: "Pink Guava Jam",
    price: 14.0,
    tag: "TOP SELLER",
    subTag: "NO SUGAR ADDED",
  },
  { name: "Mango Jam", price: 12.0, tag: "SEASONAL", subTag: "VEGAN" },
  { name: "Strawberry Jam", price: 14.0, tag: "", subTag: "ORGANIC" },
  {
    name: "Kintamani Orange Marmalade",
    price: 16.0,
    tag: "",
    subTag: "AWARD WINNING",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-serif text-gray-800">Top Seller</h2>
            <p className="text-sm text-gray-500 mt-1">
              The freshest seasonal flavors just out of the kitchen.
            </p>
          </div>
          <a
            href="#"
            className="text-sm font-medium hover:underline text-gray-700"
          >
            View All →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
