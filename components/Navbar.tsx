import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-6 bg-white sticky top-0 z-50 border-b border-gray-50">
      {/* Brand Logo */}
      <div className="text-red-800 font-serif italic text-xl font-bold tracking-tighter">
        Bali Taru Rahayu
      </div>

      {/* Menu Links */}
      <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
        <Link
          href="/Beranda"
          className="text-red-800 border-b border-red-800 pb-1"
        >
          Shop Jams
        </Link>
        <Link href="/katalog" className="hover:text-red-800 transition">
          Frozen Fruit
        </Link>
        <Link href="#" className="hover:text-red-800 transition">
          Our Story
        </Link>
        <Link href="#" className="hover:text-red-800 transition">
          Wholesale
        </Link>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-5">
        <button className="text-gray-700 hover:text-red-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>
        <button className="text-gray-700 hover:text-red-800 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </button>
      </div>
    </nav>
  );
}
