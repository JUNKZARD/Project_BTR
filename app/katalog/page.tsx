import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { allProducts } from "@/data/products";

export default function KatalogPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFB]">
      <Navbar />

      <header className="max-w-7xl mx-auto px-6 pt-16 pb-10 text-center lg:text-left">
        <h1 className="text-4xl font-serif text-gray-900 mb-4 tracking-tight">
          Bali Taru Rahayu Collections
        </h1>
        <p className="text-gray-500 max-w-2xl text-sm leading-relaxed mx-auto lg:mx-0">
          Discover all our premium quality products, from fresh frozen fruits to traditional copper-kettle jams.
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-100 pb-8">
        <div className="flex gap-3">
          <Link
            href="/katalog"
            className="px-6 py-2 bg-red-800 text-white text-[10px] uppercase tracking-widest rounded-full font-bold shadow-md"
          >
            All
          </Link>
          <Link
            href="/katalog/jams"
            className="px-6 py-2 bg-gray-100 text-gray-600 text-[10px] uppercase tracking-widest rounded-full font-bold hover:bg-gray-200 transition"
          >
            Jams
          </Link>
          <Link
            href="/katalog/frozen"
            className="px-6 py-2 bg-gray-100 text-gray-600 text-[10px] uppercase tracking-widest rounded-full font-bold hover:bg-gray-200 transition"
          >
            Frozen Fruits
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {allProducts.map((product, index) => (
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
      </section>

      <Footer />
    </main>
  );
}
