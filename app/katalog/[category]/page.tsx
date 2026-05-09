import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CatalogClient from "@/components/CatalogClient";
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
        <h1 className="text-4xl text-gray-900 mb-4 tracking-tight capitalize">
          {title}
        </h1>
        <p className="text-gray-500 max-w-2xl text-sm leading-relaxed mx-auto lg:mx-0">
          {subtitle}
        </p>
      </header>

      <CatalogClient products={products} currentCategory={category as "jams" | "frozen"} />

      <Footer />
    </main>
  );
}
