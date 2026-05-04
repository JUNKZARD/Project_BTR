export default function Hero() {
  return (
    <section className="relative w-full bg-[#E6E8EA] overflow-hidden py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Logo Bagian Kiri */}
          <div className="w-full md:w-5/12 flex justify-center md:justify-end">
            <div className="flex items-center justify-center">
              <img
                src="/logo-baru.webp"
                alt="Bali Taru Rahayu Logo"
                className="w-full max-w-[300px] lg:max-w-[400px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Teks Bagian Kanan */}
          <div className="w-full md:w-7/12 text-center md:text-left">
            <p className="tracking-[0.2em] text-[10px] font-bold text-gray-500 mb-4 uppercase">
              Small Batch • Farm Fresh
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight mb-6">
              Preserving the <br className="hidden lg:block" />
              <span className="italic text-red-800">Soul of Summer</span> <br /> 
              in Every Jar
            </h1>
            <p className="text-gray-600 max-w-md text-sm leading-relaxed mx-auto md:mx-0 mb-10">
              Hand-harvested organic fruits, slow-simmered in copper kettles to
              capture peak flavor without artificial additives.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="bg-red-800 text-white px-8 py-3 rounded-full text-xs font-bold hover:bg-red-900 transition shadow-md">
                Shop the Collection
              </button>
              <button className="border border-gray-400 text-gray-700 px-8 py-3 rounded-full text-xs font-bold hover:bg-white transition shadow-sm">
                Explore Flavors
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
