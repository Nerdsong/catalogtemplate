"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export function Navbar() {
  const count = useCartStore((state) =>
    state.items.reduce((acc, item) => acc + item.quantity, 0)
  );

  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-14 items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Template Catalog
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/catalogo" className="hover:text-green-700">
            Catalogo
          </Link>
          <Link href="/carrito" className="rounded-md bg-green-600 px-3 py-1.5 text-white">
            Carrito ({count})
          </Link>
        </div>
      </nav>
    </header>
  );
}
