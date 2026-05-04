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
      <div className="relative aspect-[4/5] bg-[#F3F3F1] overflow-hidden rounded-md shadow-sm p-6 flex items-center justify-center">
        {tag && (
          <span className="absolute top-4 left-4 bg-red-100 text-red-700 text-[9px] font-black px-2 py-1 rounded z-10 uppercase tracking-tighter">
            {tag}
          </span>
        )}
        <img
          src={img}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-105 transition duration-700 ease-in-out drop-shadow-sm"
        />
      </div>
      <div className="mt-5 space-y-1">
        <h3 className="font-serif text-lg text-gray-900 leading-tight">
          {name}
        </h3>
        <p className="text-red-800 font-bold text-sm">${price.toFixed(2)}</p>
        <p className="text-[10px] pt-1 text-green-700 font-extrabold tracking-widest uppercase">
          {subTag}
        </p>
      </div>
    </Link>
  );
}
