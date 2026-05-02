export default function Footer() {
  return (
    <footer className="bg-[#F9F9F7] pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-gray-600">
        {/* Deskripsi Brand */}
        <div className="space-y-4">
          <h4 className="font-serif italic text-red-800 text-lg font-bold">
            Organic Harvest
          </h4>
          <p className="leading-relaxed">
            Cultivating taste, naturally since 1924. Our jams represent the
            finest traditions of artisanal preservation.
          </p>
          <div className="flex gap-4 pt-2">
            {/* Simbol Ikon Sosial Media */}
            <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
            <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
            <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
          </div>
        </div>

        {/* Link Shop */}
        <div>
          <h4 className="font-bold text-[11px] uppercase tracking-widest text-gray-900 mb-6">
            Shop
          </h4>
          <ul className="space-y-3 text-xs">
            <li>
              <a href="#" className="hover:text-red-800 transition">
                Shop Jams
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-800 transition">
                Frozen Fruit
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-800 transition">
                Gift Sets
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-800 transition">
                Kitchenware
              </a>
            </li>
          </ul>
        </div>

        {/* Link Resources */}
        <div>
          <h4 className="font-bold text-[11px] uppercase tracking-widest text-gray-900 mb-6">
            Resources
          </h4>
          <ul className="space-y-3 text-xs">
            <li>
              <a href="#" className="hover:text-red-800 transition">
                Sustainability Report
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-800 transition">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-800 transition">
                Find a Retailer
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-800 transition">
                Recipes
              </a>
            </li>
          </ul>
        </div>

        {/* Link Legal */}
        <div>
          <h4 className="font-bold text-[11px] uppercase tracking-widest text-gray-900 mb-6">
            Legal
          </h4>
          <ul className="space-y-3 text-xs">
            <li>
              <a href="#" className="hover:text-red-800 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-800 transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-800 transition">
                Accessibility
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-20 text-center border-t border-gray-200 pt-8">
        <p className="text-[10px] text-gray-400 tracking-widest uppercase">
          © 2024 Bali Taru Rahayu. Cultivating taste, naturally.
        </p>
      </div>
    </footer>
  );
}
