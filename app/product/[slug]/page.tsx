import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProducts, productsData } from "@/data/products";
import OrderForm from "@/components/OrderForm";

export function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage(props: { params: Promise<{ slug: string }> }) {
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

      <div className="flex-grow max-w-7xl mx-auto px-6 py-12 md:py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Image */}
          <div className="relative aspect-[4/5] md:aspect-auto md:h-[600px] bg-[#EBE5F1] rounded-xl overflow-hidden flex items-center justify-center p-12 lg:p-16">
            {product.tag && (
              <span className="absolute top-6 left-6 bg-[#A7E2C7] text-green-900 text-[10px] font-bold px-3 py-1.5 rounded-full z-10 uppercase tracking-widest shadow-sm">
                {product.tag}
              </span>
            )}
            <img 
              src={product.img} 
              alt={product.name} 
              className="w-full h-full object-contain hover:scale-105 transition duration-700 ease-in-out drop-shadow-xl"
            />
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col pt-4 md:pt-10">
            {/* Breadcrumb */}
            <div className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold mb-6 flex gap-2">
              <Link href="/katalog" className="hover:text-gray-800 transition">SHOP</Link>
              <span>/</span>
              <Link href={categoryLink} className="hover:text-gray-800 transition">{categoryName}</Link>
            </div>

            {/* Title & Subtitle */}
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-2">
              {product.name}
            </h1>
            <p className="text-lg text-gray-500 italic font-serif mb-6">
              {isJam ? "Traditional copper-kettle method" : "Flash-frozen at peak ripeness"}
            </p>

            {/* Price */}
            <div className="flex items-end gap-3 mb-6">
              <span className="text-3xl font-serif text-red-800 font-bold">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through pb-1">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
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

            {/* Size info */}
            <div className="border-t border-gray-200 pt-6 mb-2">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-gray-900 uppercase tracking-widest">Size</span>
                <span className="text-xs text-gray-500">{product.detail}</span>
              </div>
              <div className="border border-red-800 rounded-full px-4 py-3 text-center cursor-pointer hover:bg-red-50 transition">
                <span className="text-sm font-bold text-red-800">Select Size</span>
              </div>
            </div>

            {/* Order Form */}
            <OrderForm product={product} />

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
