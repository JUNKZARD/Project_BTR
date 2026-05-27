"use client";

import { Product } from "@/data/products";

interface OrderFormProps {
  product: Product;
}

export default function OrderForm({ product }: OrderFormProps) {
  const handleOrder = () => {
    const phoneNumber = "+62 811-3310-238"; 
    const baseUrl = window.location.origin;
    const imageUrl = encodeURI(`${baseUrl}${product.img}`);
    
    const message = `Halo, saya tertarik untuk membeli produk berikut:
*${product.name}*
Ukuran: ${product.detail}
Harga: $${product.price.toFixed(2)}
Link Gambar: ${imageUrl}

Mohon info untuk proses selanjutnya. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(waUrl, "_blank");
  };

  return (
    <div className="mt-8 space-y-6">
      {/* Buy Button (WhatsApp) */}
      <button 
        onClick={handleOrder}
        className="bg-red-800 text-white rounded-full px-8 py-4 text-base font-bold hover:bg-red-900 transition shadow-sm w-full"
      >
        Buy
      </button>

      <div className="flex items-center gap-2 text-xs text-gray-500 font-medium pt-2">
        <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span>Sustainably harvested. Ships within 24 hours.</span>
      </div>
    </div>
  );
}
