import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CatalogClient from "@/components/CatalogClient";
import { allProducts } from "@/data/products";

export default function KatalogPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFB]">
      <Navbar />

      <header className="max-w-7xl mx-auto px-6 pt-16 pb-10 text-center lg:text-left">
        <h1 className="text-4xl text-gray-900 mb-4 tracking-tight">
          Bali Taru Rahayu Collections
        </h1>
        <p className="text-gray-500 max-w-2xl text-sm leading-relaxed mx-auto lg:mx-0">
          Discover all our premium quality products, from fresh fruits with
          processed hygienically using food-grade stainless steel equipment
        </p>
      </header>

      <CatalogClient products={allProducts} currentCategory="all" />

      <Footer />
    </main>
  );
}
