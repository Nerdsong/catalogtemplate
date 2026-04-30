"use client";

import Image from "next/image";
import { CartProduct } from "@/types/product";
import { useCartStore } from "@/store/cartStore";

type CartItemProps = {
  item: CartProduct;
};

export function CartItem({ item }: CartItemProps) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <article className="flex gap-3 rounded-xl border border-gray-200 bg-white p-3">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-gray-100">
        {item.imageUrl ? (
          <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
        ) : null}
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="text-sm font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-600">
          {item.price ? `$${item.price.toFixed(2)}` : "Consultar precio"}
        </p>
        <div className="mt-2 flex items-center gap-2">
          <button
            type="button"
            onClick={() => updateQuantity(item.slug, item.quantity - 1)}
            className="h-8 w-8 rounded-md border border-gray-300"
          >
            -
          </button>
          <span className="w-6 text-center text-sm">{item.quantity}</span>
          <button
            type="button"
            onClick={() => updateQuantity(item.slug, item.quantity + 1)}
            className="h-8 w-8 rounded-md border border-gray-300"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => removeItem(item.slug)}
            className="ml-auto text-sm text-red-600"
          >
            Eliminar
          </button>
        </div>
      </div>
    </article>
  );
}
