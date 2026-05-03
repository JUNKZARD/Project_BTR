export default function Hero() {
  return (
    <section className="relative h-[550px] w-full flex items-center bg-gray-300">
      {/* Background Image Overlay - Ganti src dengan gambar produk jarmu */}
      <div className="absolute inset-0 opacity-60 flex justify-end">
        <img
          src="/logo.webp"
          alt="Jam Collection"
          className="h-{1900px} w-auto object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left">
        <p className="tracking-[0.2em] text-[10px] font-bold text-gray-600 mb-4 uppercase">
          Small Batch • Farm Fresh
        </p>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">
          Preserving the{" "}
          <span className="italic text-red-800">Soul of Summer</span> <br /> in
          Every Jar
        </h1>
        <p className="mt-6 text-gray-700 max-w-md text-sm leading-relaxed">
          Hand-harvested organic fruits, slow-simmered in copper kettles to
          capture peak flavor without artificial additives.
        </p>
        <div className="mt-10 flex gap-4 justify-center lg:justify-start">
          <button className="bg-red-800 text-white px-10 py-3 rounded-full text-xs font-bold hover:bg-red-900 transition shadow-lg">
            Shop the Collection
          </button>
          <button className="border border-gray-400 px-10 py-3 rounded-full text-xs font-bold hover:bg-white transition">
            Explore Flavors
          </button>
        </div>
      </div>
    </section>
  );
}
