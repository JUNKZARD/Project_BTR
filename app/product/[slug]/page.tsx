export const dynamicParams = false;
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProducts, productsData } from "@/data/products";
import OrderForm from "@/components/OrderForm";
import Image from "next/image";

export function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const product = allProducts.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  // Determine category for breadcrumbs
  const isJam = productsData.jams.some((p) => p.slug === product.slug);
  const categoryName = isJam ? "ARTISANAL JAMS" : "FROZEN FRUITS";
  const categoryLink = isJam ? "/katalog/jams" : "/katalog/frozen";

  return (
    <main className="min-h-screen bg-[#FDFDFB] flex flex-col">
      <Navbar />

      <div className="grow max-w-7xl mx-auto px-6 py-12 md:py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: Image */}
          <div className="relative aspect-4/5 md:aspect-auto md:h-150 bg-[#EBE5F1] rounded-xl overflow-hidden flex items-center justify-center p-12 lg:p-16">
            {product.tag && (
              <span className="absolute top-6 left-6 bg-[#A7E2C7] text-green-900 text-[10px] font-bold px-3 py-1.5 rounded-full z-10 uppercase tracking-widest shadow-sm">
                {product.tag}
              </span>
            )}
            {product.img ? (
              <Image
                src={product.img}
                alt={product.name}
                className="w-full h-full object-contain hover:scale-105 transition duration-700 ease-in-out drop-shadow-xl"
                width={500} // Adjust width as needed
                height={500} // Adjust height as needed
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                <svg
                  className="w-16 h-16 mb-4 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm font-bold uppercase tracking-widest">
                  Image Coming Soon
                </span>
              </div>
            )}
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col pt-4 md:pt-10">
            {/* Breadcrumb */}
            <div className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold mb-6 flex gap-2">
              <Link href="/katalog" className="hover:text-gray-800 transition">
                SHOP
              </Link>
              <span>/</span>
              <Link
                href={categoryLink}
                className="hover:text-gray-800 transition"
              >
                {categoryName}
              </Link>
            </div>

            {/* Title & Subtitle */}
            <h1 className="text-4xl md:text-5xl text-gray-900 leading-tight mb-2">
              {product.name}
            </h1>
            <p className="text-lg text-gray-500 italic mb-6">
              {isJam
                ? "Traditional copper-kettle method"
                : "Flash-frozen at peak ripeness"}
            </p>

            {/* Price */}
            <div className="flex items-end gap-3 mb-6">
              <span className="text-3xl text-red-800 font-bold">
                Rp {product.price.toLocaleString("id-ID")}
              </span>
            </div>

            {/* Benefits Tags */}
            {product.benefits && product.benefits.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {product.benefits.map((benefit, i) => (
                  <span
                    key={i}
                    className="bg-[#EAF5EF] text-green-800 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            )}

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-10">
              {product.description}
            </p>

            {/* Size info removed */}

            {/* Order Form */}
            <OrderForm product={product} />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
