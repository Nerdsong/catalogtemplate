"use client";

import { create } from "zustand";
import { CartProduct, Product } from "@/types/product";

type CartStore = {
  items: CartProduct[];
  addItem: (product: Product) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (product) =>
    set((state) => {
      const existing = state.items.find((item) => item.slug === product.slug);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.slug === product.slug
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return { items: [...state.items, { ...product, quantity: 1 }] };
    }),
  removeItem: (slug) =>
    set((state) => ({ items: state.items.filter((item) => item.slug !== slug) })),
  updateQuantity: (slug, quantity) =>
    set((state) => ({
      items: state.items
        .map((item) => (item.slug === slug ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0),
    })),
  clearCart: () => set({ items: [] }),
  total: () =>
    get().items.reduce((acc, item) => acc + (item.price ?? 0) * item.quantity, 0),
}));
