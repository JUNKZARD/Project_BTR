interface ProductProps {
  name: string;
  price: number;
  tag?: string;
  subTag: string;
}

export default function ProductCard({
  name,
  price,
  tag,
  subTag,
}: ProductProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/5] bg-gray-300 overflow-hidden rounded-md shadow-sm">
        {tag && (
          <span className="absolute top-4 left-4 bg-red-100 text-red-700 text-[9px] font-black px-2 py-1 rounded z-10 uppercase tracking-tighter">
            {tag}
          </span>
        )}
        <img
          src="/blueberries frozen.webp"
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-in-out"
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
    </div>
  );
}
