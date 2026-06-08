import Link from "next/link";

interface ProductProps {
  slug: string;
  name: string;
  price: number;
  tag?: string;
  subTag: string;
  img: string;
}

export default function ProductCard({
  slug,
  name,
  price,
  tag,
  subTag,
  img,
}: ProductProps) {
  return (
    <Link href={`/product/${slug}`} className="group cursor-pointer block">
      <div className="relative aspect-[4/5] bg-[#F3F3F1] overflow-hidden rounded-md shadow-sm p-6 flex items-center justify-center group-hover:shadow-md transition-shadow">
        {tag && (
          <span className="absolute top-4 left-4 bg-red-100 text-red-700 text-[9px] font-black px-2 py-1 rounded z-10 uppercase tracking-tighter">
            {tag}
          </span>
        )}
        {img ? (
          <img
            src={img}
            alt={name}
            className="w-full h-full object-contain group-hover:scale-105 transition duration-700 ease-in-out drop-shadow-sm"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs font-bold uppercase tracking-widest"></div>
        )}

        {/* Buy Button Overlay */}
        <span className="absolute bottom-4 right-4 bg-red-800 text-white px-4 py-2 rounded-full shadow-md group-hover:bg-red-900 transition-colors z-20 text-xs font-bold flex items-center gap-1">
          Buy
          <svg
            className="w-3 h-3 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
      </div>
      <div className="mt-5 space-y-1">
        <h3 className="text-lg text-gray-900 leading-tight">{name}</h3>
        <p className="text-red-800 font-bold text-sm">
          Rp {price.toLocaleString("id-ID")}
        </p>
        <p className="text-[10px] pt-1 text-green-700 font-extrabold tracking-widest uppercase">
          {subTag}
        </p>
      </div>
    </Link>
  );
}
