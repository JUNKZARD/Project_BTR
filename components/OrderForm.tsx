"use client";

import { useState } from "react";
import { Product } from "@/data/products";

interface OrderFormProps {
  product: Product;
}

export default function OrderForm({ product }: OrderFormProps) {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleOrder = () => {
    // Ganti dengan nomor WhatsApp tujuan Anda (gunakan format kode negara, e.g., 62 untuk Indonesia)
    const phoneNumber = "6281234567890"; 
    const totalPrice = product.price * quantity;
    
    const message = `Halo, saya ingin memesan:
*${product.name}*
Jumlah: ${quantity}
Ukuran: ${product.detail}
Total Harga: $${totalPrice.toFixed(2)}

Mohon info untuk proses selanjutnya. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(waUrl, "_blank");
  };

  return (
    <div className="mt-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        {/* Quantity Selector */}
        <div className="flex items-center justify-between border border-gray-300 rounded-full px-4 py-3 w-full sm:w-32 bg-gray-50">
          <button 
            onClick={decreaseQuantity}
            className="text-gray-500 hover:text-gray-900 transition font-bold"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="text-sm font-medium">{quantity}</span>
          <button 
            onClick={increaseQuantity}
            className="text-gray-500 hover:text-gray-900 transition font-bold"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        {/* Add to Cart Button (WhatsApp) */}
        <button 
          onClick={handleOrder}
          className="flex-1 bg-red-800 text-white rounded-full px-8 py-3 text-sm font-bold hover:bg-red-900 transition shadow-sm w-full"
        >
          Add to Cart
        </button>
      </div>

      <div className="flex items-center gap-2 text-xs text-gray-500 font-medium pt-2">
        <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span>Sustainably harvested. Ships within 24 hours.</span>
      </div>
    </div>
  );
}
