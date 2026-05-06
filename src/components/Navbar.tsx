"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const count = useCartStore((state) =>
    state.items.reduce((acc, item) => acc + item.quantity, 0)
  );

  return (
    <header className="sticky top-0 z-20 bg-white">
      <div className="border-b border-[#d9a400] bg-[#f7c32f] text-[10px] font-semibold tracking-wide text-[#2c2c2c] sm:text-xs">
        <div className="mx-auto flex h-9 w-full max-w-6xl items-center justify-center gap-2 px-4 sm:px-6">
   
          <HeartIcon />
          <p className="text-center uppercase">Envios a todo el pais</p>
          <HeartIcon />
        </div>
      </div>

      <nav className="relative border-b border-gray-200 bg-[#feefde]">
        <div className="mx-auto grid h-24 w-full max-w-6xl grid-cols-[44px_1fr_44px] items-center px-4 sm:px-6 lg:flex lg:items-center">
          <button
            type="button"
            aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-dashed border-[#d1c2b4] bg-white text-[#6f5f52] lg:hidden"
          >
            <HamburgerIcon />
          </button>

          <Link href="/" className="justify-self-center lg:order-1 lg:mr-10">
            <Image src="/maca-logo.png" alt="Maca" width={145} height={62} priority />
          </Link>

          <div className="hidden items-center gap-8 text-base font-medium text-[#28231f] lg:order-2 lg:flex lg:flex-1 lg:justify-center">
            <Link href="/" className="font-semibold hover:text-[#8d6e36]">
              Inicio
            </Link>
            <Link href="/catalogo" className="hover:text-[#8d6e36]">
              Tienda
            </Link>
            <Link href="#" className="hover:text-[#8d6e36]">
              Categorias
            </Link>
            <Link href="#" className="hover:text-[#8d6e36]">
              Nosotras
            </Link>
            <Link href="#" className="hover:text-[#8d6e36]">
              Contacto
            </Link>
          </div>

          <div className="flex items-center justify-end text-[#6f5f52] lg:order-3 lg:ml-auto">
            <Link
              href="/carrito"
              id="navbar-cart-target"
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-dashed border-[#d1c2b4] bg-white"
              aria-label="Carrito"
            >
              <CartIcon />
              {count > 0 ? (
                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#f7c32f] px-1 text-[11px] font-semibold text-[#2b2b2b]">
                  {count}
                </span>
              ) : null}
            </Link>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="absolute inset-x-0 top-full z-30 border-b border-[#dcc8ac] bg-[#fef6eb] lg:hidden">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4 text-base font-medium text-[#2f261f] sm:px-6">
              <Link href="/" className="rounded-lg px-3 py-2 hover:bg-[#f5e7d4]" onClick={() => setIsMenuOpen(false)}>
                Inicio
              </Link>
              <Link
                href="/catalogo"
                className="rounded-lg px-3 py-2 hover:bg-[#f5e7d4]"
                onClick={() => setIsMenuOpen(false)}
              >
                Tienda
              </Link>
              <Link href="#" className="rounded-lg px-3 py-2 hover:bg-[#f5e7d4]" onClick={() => setIsMenuOpen(false)}>
                Categorias
              </Link>
              <Link href="#" className="rounded-lg px-3 py-2 hover:bg-[#f5e7d4]" onClick={() => setIsMenuOpen(false)}>
                Nosotras
              </Link>
              <Link href="#" className="rounded-lg px-3 py-2 hover:bg-[#f5e7d4]" onClick={() => setIsMenuOpen(false)}>
                Contacto
              </Link>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth={2}>
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.7A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth={1.8}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth={1.8}>
      <circle cx="9" cy="20" r="1.6" />
      <circle cx="17" cy="20" r="1.6" />
      <path d="M3.5 4h2.2l1.9 9h10l2-7H8.4" />
    </svg>
  );
}
