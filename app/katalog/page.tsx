import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const catalogProducts = [
  {
    name: "Wild Mountain Raspberry",
    price: "Rp 140.000",
    detail: "8oz Glass Jar • Hand-Pressed",
    tag: "SMALL BATCH",
  },
  {
    name: "Flash-Frozen Wild Blueberries",
    price: "$22.50",
    detail: "2lb Eco-Pouch • Non-GMO",
    tag: "",
  },
  {
    name: "Sun-Ripened Apricot & Thyme",
    price: "$16.00",
    detail: "8oz Glass Jar • Low Sugar",
    tag: "",
  },
  {
    name: "Whole Organic Strawberries",
    price: "$18.00",
    detail: "1.5lb Eco-Pouch • Peak Harvest",
    tag: "",
  },
  {
    name: "Heirloom Blackberry Compote",
    price: "$15.50",
    detail: "10oz Glass Jar • No Pectin Added",
    tag: "",
  },
  {
    name: "Pacific Northwest Raspberries",
    price: "$24.00",
    detail: "2lb Eco-Pouch • IQF Quality",
    tag: "SMOOTHIE READY",
  },
  {
    name: "Spiced Black Cherry Jam",
    price: "$17.00",
    detail: "8oz Glass Jar • Seasonal",
    tag: "",
  },
  {
    name: "Antioxidant Forest Blend",
    price: "$29.00",
    detail: "3lb Family Pack • Organic",
    tag: "",
  },
];

export default function KatalogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <header className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <h1 className="text-4xl font-serif text-gray-900 mb-4">
          Bali Taru Rahayu Collections
        </h1>
        <p className="text-gray-500 max-w-2xl text-sm leading-relaxed">
          Hand-picked at the peak of ripeness and preserved using traditional
          copper-kettle methods to capture the pure essence of the harvest.
        </p>
      </header>

      {/* Filter Bar */}
      <section className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-center">
        <div className="flex gap-3">
          <button className="px-6 py-2 bg-red-800 text-white text-xs rounded-full font-bold">
            All
          </button>

          <Link
            href="/Beranda"
            className="hover:text-red-800 transition px-6 py-2 bg-gray-100 text-gray-600 text-xs rounded-full font-bold"
          >
            Jams
          </Link>
          <button className="hover:text-red-800 transition px-6 py-2 bg-gray-100 text-gray-600 text-xs rounded-full font-bold">
            Frozen
          </button>
        </div>
        <div className="text-xs text-gray-400">
          SORT BY:{" "}
          <span className="text-gray-900 font-bold ml-1 cursor-pointer">
            Featured ▾
          </span>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {catalogProducts.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-square bg-[#F3F3F1] rounded-lg overflow-hidden mb-4">
                {item.tag && (
                  <span className="absolute top-3 left-3 bg-[#A8D5BA] text-white text-[8px] font-black px-2 py-1 rounded uppercase">
                    {item.tag}
                  </span>
                )}
                <img
                  src="/api/placeholder/400/400"
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <button className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                </button>
              </div>
              <h3 className="font-serif text-md text-gray-900 mb-1">
                {item.name}
              </h3>
              <p className="text-[10px] text-gray-400 mb-2">{item.detail}</p>
              <p className="text-red-800 font-bold text-sm">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
