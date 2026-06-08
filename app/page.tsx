import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import Link from "next/link";

const products = [
  {
    slug: "strawberry-jam",
    name: "Strawberry Jam",
    price: 70000,
    tag: "TOP SELLER",
    subTag: "",
    img: "/Strawberry 280.webp",
  },
  {
    slug: "pink-guava-jam",
    name: "Pink Guava Jam",
    price: 70000,
    tag: "TOP SELLER",
    subTag: "",
    img: "/pinkguava 280 new.webp",
  },
  {
    slug: "mulberry-mix-jam",
    name: "Mulberry Jam",
    price: 70000,
    tag: "TOP SELLER",
    subTag: "",
    img: "/mullberry mix 280 new.webp",
  },
  {
    slug: "mangga-vanilla-jam",
    name: "Mango Vanila Jam",
    price: 70000,
    tag: "TOP SELLER",
    subTag: "",
    img: "/Manggo vanila 280.webp",
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
            <h2 className="text-3xl text-gray-800">Top Seller</h2>
            <p className="text-sm text-gray-500 mt-1">
              The freshest seasonal flavors just out of the kitchen.
            </p>
          </div>
          {/* Menggunakan Link untuk navigasi ke halaman katalog */}
          <Link
            href="/katalog"
            className="text-sm font-medium hover:underline text-gray-700"
          >
            View All →
          </Link>
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
