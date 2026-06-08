import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#E6E8EA] overflow-hidden min-h-[90vh] md:min-h-0 py-16 md:py-24 flex items-center">
      {/* Slot Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/thumnail.webp"
          alt="Background Hero"
          className="w-full h-full object-cover opacity-60 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-white md:bg-none md:bg-gradient-to-r md:from-white/90 md:via-white/50 md:to-transparent pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-20">
          {/* Logo Bagian Kiri */}
          <div className="w-full md:w-5/12 flex justify-center md:justify-end mb-4 md:mb-0">
            <div className="flex items-center justify-center">
              <img
                src="/logo-baru.webp"
                alt="Bali Taru Rahayu Logo"
                className="w-4/5 sm:w-full max-w-[250px] md:max-w-[300px] lg:max-w-[400px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Teks Bagian Kanan */}
          <div className="w-full md:w-7/12 text-center md:text-left flex flex-col items-center md:items-start">
            <p className="tracking-[0.2em] text-xs md:text-sm font-bold text-gray-700 md:text-gray-500 mb-3 md:mb-4 uppercase bg-white/50 md:bg-transparent px-4 py-1 rounded-full md:p-0 md:rounded-none">
              Small Batch • Farm Fresh
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-4 md:mb-6">
              Preserving the <br className="hidden md:block" />
              <span className="italic text-red-800">Soul of Summer</span> <br />
              in Every Jar
            </h1>
            <p className="text-gray-800 md:text-gray-600 max-w-sm md:max-w-md text-sm md:text-base leading-relaxed mb-8 md:mb-10 font-medium md:font-normal">
              Processed hygienically using food-grade stainless steel equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center md:justify-start">
              <Link
                href="/katalog"
                className="bg-red-800 text-white px-8 py-3.5 md:py-3 rounded-full text-sm md:text-base font-bold hover:bg-red-900 transition shadow-md text-center w-full sm:w-auto"
              >
                Shop the Collection
              </Link>
              <Link
                href="/katalog"
                className="bg-white/80 md:bg-transparent border border-gray-400 text-gray-700 px-8 py-3.5 md:py-3 rounded-full text-sm md:text-base font-bold hover:bg-white transition shadow-sm text-center w-full sm:w-auto"
              >
                Explore Flavors
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
