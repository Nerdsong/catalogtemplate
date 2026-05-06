"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Product } from "@/types/product";
import { useCartStore } from "@/store/cartStore";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [showBeeInButton, setShowBeeInButton] = useState(false);
  const [flyingBee, setFlyingBee] = useState<{
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    durationMs: number;
    active: boolean;
  } | null>(null);
  const timeoutsRef = useRef<number[]>([]);
  const formattedPrice =
    typeof product.price === "number"
      ? `$${new Intl.NumberFormat("es-CL", { maximumFractionDigits: 0 }).format(product.price)}`
      : "Consultar";

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, []);

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    addItem(product);
    setShowBeeInButton(true);
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const buttonRect = event.currentTarget.getBoundingClientRect();
    const cartTarget = document.getElementById("navbar-cart-target");
    const cartRect = cartTarget?.getBoundingClientRect();

    const startX = buttonRect.left + buttonRect.width / 2;
    const startY = buttonRect.top + buttonRect.height / 2;
    const endX = cartRect ? cartRect.left + cartRect.width / 2 : startX;
    const endY = cartRect ? cartRect.top + cartRect.height / 2 : startY - 120;

    const beeInButtonDelay = isMobile ? 460 : 320;
    const flightDuration = isMobile ? 950 : 700;
    const clearFlightAfter = beeInButtonDelay + flightDuration + 140;

    const showFlyingTimeout = window.setTimeout(() => {
      setShowBeeInButton(false);
      setFlyingBee({
        x: startX,
        y: startY,
        targetX: endX,
        targetY: endY,
        durationMs: flightDuration,
        active: false,
      });

      const activateTimeout = window.setTimeout(() => {
        setFlyingBee((current) => (current ? { ...current, active: true } : null));
      }, 10);
      timeoutsRef.current.push(activateTimeout);
    }, beeInButtonDelay);

    const clearFlyingTimeout = window.setTimeout(() => {
      setFlyingBee(null);
    }, clearFlightAfter);

    timeoutsRef.current.push(showFlyingTimeout, clearFlyingTimeout);
  };

  return (
    <article className="relative rounded-2xl border-2 border-dashed border-[#d9c7af] bg-[#f9f2e7] p-3">
      <span className="absolute left-2 top-2 z-10 rounded-full bg-[#f6b4af] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#5a2f2f]">
        Nuevo
      </span>
      <Link href={`/catalogo/${product.slug}`} className="block">
        <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-xl bg-[#efe4d7]">
          {product.imageUrl ? (
            <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-[#7a6a5e]">
              Sin imagen
            </div>
          )}
        </div>
        <h3 className="line-clamp-1 text-base font-semibold text-[#5a3f2f]">{product.name}</h3>
      </Link>

      <p className="mt-2 text-base font-semibold text-[#3c2717]">Precio: {formattedPrice}</p>
      <div className="mt-3">
        {showBeeInButton ? (
          <div className="flex h-10 w-full items-center justify-center rounded-xl bg-[#f7c32f] text-xl text-[#6b4a19] transition-all duration-500 animate-pulse">
            🐝
          </div>
        ) : (
          <button
            type="button"
            aria-label={`Agregar ${product.name} al carrito`}
            onClick={handleAddToCart}
            className="inline-flex h-10 w-full items-center justify-center rounded-xl border-2 border-dashed border-[#d9c7af] bg-transparent px-3 text-sm font-semibold text-[#6b4a19] transition-colors duration-300 hover:border-transparent hover:bg-[#f7c32f]"
          >
            Agregar al carrito
          </button>
        )}
      </div>
      {flyingBee ? (
        <span
          aria-hidden="true"
          className="pointer-events-none fixed z-50 text-2xl transition-all ease-in max-sm:text-3xl"
          style={{
            left: flyingBee.active ? flyingBee.targetX : flyingBee.x,
            top: flyingBee.active ? flyingBee.targetY : flyingBee.y,
            transitionDuration: `${flyingBee.durationMs}ms`,
            transform: `translate(-50%, -50%) ${flyingBee.active ? "scale(0.7)" : "scale(1)"}`,
            opacity: flyingBee.active ? 0.85 : 1,
          }}
        >
          🐝
        </span>
      ) : null}
    </article>
  );
}
