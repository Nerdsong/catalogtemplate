"use client";

import { FormEvent, useMemo, useState } from "react";
import { CartItem } from "@/components/CartItem";
import { CartSummary } from "@/components/CartSummary";
import { useCartStore } from "@/store/cartStore";

const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE;

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.total());
  const clearCart = useCartStore((state) => state.clearCart);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const message = useMemo(() => {
    const lines = items.map((item) => {
      const subtotal = (item.price ?? 0) * item.quantity;
      return `- ${item.name} x${item.quantity} (${subtotal.toFixed(2)})`;
    });

    return [
      "Hola, quiero realizar este pedido:",
      ...lines,
      `Total: ${total.toFixed(2)}`,
      "",
      `Nombre: ${name}`,
      `Direccion: ${address}`,
      `Notas: ${notes || "Sin notas"}`,
      "",
      "Order will be completed via WhatsApp.",
    ].join("\n");
  }, [address, items, name, notes, total]);

  const checkoutUrl = phone ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}` : "#";

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!phone || items.length === 0) {
      return;
    }
    window.location.href = checkoutUrl;
  };

  return (
    <section>
      <h1 className="text-2xl font-bold">Carrito</h1>
      <p className="mt-2 text-sm text-gray-600">Order will be completed via WhatsApp.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-[2fr_1fr]">
        <div className="space-y-3">
          {items.length === 0 ? (
            <div className="rounded-xl border border-dashed border-gray-300 bg-white p-6 text-sm text-gray-600">
              Tu carrito esta vacio.
            </div>
          ) : (
            items.map((item) => <CartItem key={item.slug} item={item} />)
          )}
        </div>
        <CartSummary />
      </div>

      <form onSubmit={onSubmit} className="mt-6 space-y-3 rounded-xl bg-white p-4">
        <h2 className="text-lg font-semibold">Datos para el pedido</h2>
        <input
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Nombre"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
        />
        <input
          required
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          placeholder="Direccion"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
        />
        <textarea
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          placeholder="Notas (opcional)"
          className="min-h-24 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
        />
        <div className="flex flex-wrap gap-2">
          <button
            type="submit"
            disabled={!phone || items.length === 0}
            className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            Finalizar por WhatsApp
          </button>
          <button
            type="button"
            onClick={clearCart}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm"
          >
            Vaciar carrito
          </button>
        </div>
      </form>
    </section>
  );
}
