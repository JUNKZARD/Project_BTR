"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-6 bg-white sticky top-0 z-50 border-b border-gray-50">
      <Link
        href="/"
        className="flex items-center gap-3 text-red-800 italic text-xl font-bold tracking-tighter"
      >
        <img 
          src="/logo-baru.webp" 
          alt="Bali Taru Rahayu Logo" 
          className="h-10 w-auto object-contain" 
        />
        Bali Taru Rahayu
      </Link>

      <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] items-center">
        {/* Link ke Folder Jems */}
        <Link
          href="/katalog/jams"
          className={`relative pb-1 transition-colors duration-300 ${
            isActive("/katalog/jams")
              ? "text-red-800"
              : "text-gray-500 hover:text-red-800"
          }`}
        >
          Shop Jams
          <span
            className={`absolute left-0 bottom-0 h-[2px] bg-red-800 transition-all duration-300 ${
              isActive("/katalog/jams") ? "w-full" : "w-0"
            }`}
          />
        </Link>

        {/* Link ke Folder Frozen */}
        <Link
          href="/katalog/frozen"
          className={`relative pb-1 transition-colors duration-300 ${
            isActive("/katalog/frozen")
              ? "text-red-800"
              : "text-gray-500 hover:text-red-800"
          }`}
        >
          Frozen Fruit
          <span
            className={`absolute left-0 bottom-0 h-[2px] bg-red-800 transition-all duration-300 ${
              isActive("/katalog/frozen") ? "w-full" : "w-0"
            }`}
          />
        </Link>

        {/* Link About Us Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsAboutOpen(!isAboutOpen)}
            className={`flex items-center gap-1 relative pb-1 transition-colors duration-300 ${
              isAboutOpen ? "text-red-800" : "text-gray-500 hover:text-red-800"
            }`}
          >
            About Us
            <svg 
              className={`w-3 h-3 transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`} 
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isAboutOpen && (
            <div className="absolute top-full right-0 mt-4 w-48 bg-white border border-gray-100 shadow-xl rounded-lg overflow-hidden flex flex-col z-50">
              <a 
                href="https://www.instagram.com/balitarurahayu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-red-800 transition text-[10px] tracking-widest border-b border-gray-50"
              >
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/bali.tarurahayu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-800 transition text-[10px] tracking-widest border-b border-gray-50"
              >
                Facebook
              </a>
              <a 
                href="https://www.tiktok.com/@btr_jam?is_from_webapp=1&sender_device=pc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-red-800 transition text-[10px] tracking-widest border-b border-gray-50"
              >
                TikTok
              </a>
              <a 
                href="https://shopee.co.id/btr_2017" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-orange-500 transition text-[10px] tracking-widest border-b border-gray-50"
              >
                Shopee
              </a>
              <a 
                href="https://www.tokopedia.com/balitarurahayu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-green-600 transition text-[10px] tracking-widest border-b border-gray-50"
              >
                Tokopedia
              </a>
              <a 
                href="https://food.grab.com/id/en/restaurant/bali-taru-rahayu-peguyangan-kangin-delivery/6-C6N1G7ACVTKZAN?sourceID=20240730_160447_34022e107cb988ac_MEXMPS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-green-500 transition text-[10px] tracking-widest border-b border-gray-50"
              >
                GrabFood
              </a>
              <a 
                href="https://wa.me/628113310238" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-green-700 transition text-[10px] tracking-widest"
              >
                Contact WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Hamburger Button for Mobile */}
      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-900 focus:outline-none"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg flex flex-col md:hidden z-40 py-6 px-6 text-[12px] font-bold uppercase tracking-[0.2em] gap-6 max-h-[80vh] overflow-y-auto">
          <Link
            href="/katalog/jams"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`${isActive("/katalog/jams") ? "text-red-800" : "text-gray-500"} transition-colors`}
          >
            Shop Jams
          </Link>

          <Link
            href="/katalog/frozen"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`${isActive("/katalog/frozen") ? "text-red-800" : "text-gray-500"} transition-colors`}
          >
            Frozen Fruit
          </Link>

          <div className="flex flex-col gap-4 border-t border-gray-100 pt-4">
            <span className="text-gray-900">About Us</span>
            <div className="flex flex-col gap-4 pl-4 text-[10px] text-gray-500 tracking-widest border-l-2 border-red-100">
              <a href="https://www.instagram.com/balitarurahayu" target="_blank" rel="noopener noreferrer" className="hover:text-red-800 transition">Instagram</a>
              <a href="https://www.facebook.com/bali.tarurahayu" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition">Facebook</a>
              <a href="https://www.tiktok.com/@btr_jam?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="hover:text-red-800 transition">TikTok</a>
              <a href="https://shopee.co.id/btr_2017" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">Shopee</a>
              <a href="https://www.tokopedia.com/balitarurahayu" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition">Tokopedia</a>
              <a href="https://food.grab.com/id/en/restaurant/bali-taru-rahayu-peguyangan-kangin-delivery/6-C6N1G7ACVTKZAN?sourceID=20240730_160447_34022e107cb988ac_MEXMPS" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">GrabFood</a>
              <a href="https://wa.me/628113310238" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 transition flex items-center gap-2">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                Contact WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
