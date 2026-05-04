"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-6 bg-white sticky top-0 z-50 border-b border-gray-50">
      <Link
        href="/"
        className="text-red-800 font-serif italic text-xl font-bold tracking-tighter"
      >
        Bali Taru Rahayu
      </Link>

      <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">
        {/* Link ke Folder Jems */}
        <Link
          href="/jems"
          className={`relative pb-1 transition-colors duration-300 ${
            isActive("/jems")
              ? "text-red-800"
              : "text-gray-500 hover:text-red-800"
          }`}
        >
          Shop Jams
          <span
            className={`absolute left-0 bottom-0 h-[2px] bg-red-800 transition-all duration-300 ${
              isActive("/jems") ? "w-full" : "w-0"
            }`}
          />
        </Link>

        {/* Link ke Folder Frozen */}
        <Link
          href="/frozen"
          className={`relative pb-1 transition-colors duration-300 ${
            isActive("/frozen")
              ? "text-red-800"
              : "text-gray-500 hover:text-red-800"
          }`}
        >
          Frozen Fruit
          <span
            className={`absolute left-0 bottom-0 h-[2px] bg-red-800 transition-all duration-300 ${
              isActive("/frozen") ? "w-full" : "w-0"
            }`}
          />
        </Link>

        <Link href="#" className="text-gray-500 hover:text-red-800 transition">
          Our Story
        </Link>
        <Link href="#" className="text-gray-500 hover:text-red-800 transition">
          Wholesale
        </Link>
      </div>

      {/* ... Icons section tetap sama ... */}
    </nav>
  );
}
