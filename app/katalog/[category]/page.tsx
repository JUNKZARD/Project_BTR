import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { notFound } from "next/navigation";
import { productsData } from "@/data/products";

// Function to tell Next.js which paths to generate for static export
export function generateStaticParams() {
  return [
    { category: "jams" },
    { category: "frozen" },
  ];
}

export default async function CategoryPage(props: { params: Promise<{ category: string }> }) {
  const params = await props.params;
  const category = params.category;
  
  if (category !== "jams" && category !== "frozen") {
    notFound();
  }

  const products = productsData[category as keyof typeof productsData] || [];
  
  const title = category === "jams" ? "Jams Collections" : "Frozen Fruit Collections";
  const subtitle = category === "jams" 
    ? "Hand-picked at the peak of ripeness and preserved using traditional copper-kettle methods to capture the pure essence of the harvest."
    : "Freshly picked and flash-frozen to lock in nutrients and flavor.";

  return (
    <main className="min-h-screen bg-[#FDFDFB]">
      <Navbar />

      <header className="max-w-7xl mx-auto px-6 pt-16 pb-10 text-center lg:text-left">
        <h1 className="text-4xl font-serif text-gray-900 mb-4 tracking-tight capitalize">
          {title}
        </h1>
        <p className="text-gray-500 max-w-2xl text-sm leading-relaxed mx-auto lg:mx-0">
          {subtitle}
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-100 pb-8">
        <div className="flex gap-3">
          <Link
            href="/katalog"
            className="px-6 py-2 bg-gray-100 text-gray-600 text-[10px] uppercase tracking-widest rounded-full font-bold hover:bg-gray-200 transition"
          >
            All
          </Link>
          <Link
            href="/katalog/jams"
            className={`px-6 py-2 text-[10px] uppercase tracking-widest rounded-full font-bold transition ${
              category === "jams" 
                ? "bg-red-800 text-white shadow-md" 
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Jams
          </Link>
          <Link
            href="/katalog/frozen"
            className={`px-6 py-2 text-[10px] uppercase tracking-widest rounded-full font-bold transition ${
              category === "frozen" 
                ? "bg-red-800 text-white shadow-md" 
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Frozen Fruits
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {products.map((product, index) => (
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
