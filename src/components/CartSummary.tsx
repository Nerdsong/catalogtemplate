"use client";

import { useCartStore } from "@/store/cartStore";

export function CartSummary() {
  const total = useCartStore((state) => state.total());

  return (
    <aside className="rounded-xl border border-gray-200 bg-white p-4">
      <h2 className="text-lg font-semibold">Resumen</h2>
      <p className="mt-3 text-sm text-gray-600">Order will be completed via WhatsApp.</p>
      <p className="mt-2 text-xl font-bold">${total.toFixed(2)}</p>
    </aside>
  );
}
