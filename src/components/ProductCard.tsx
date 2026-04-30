import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { AddToCartButton } from "@/components/AddToCartButton";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
      <Link href={`/catalogo/${product.slug}`} className="block">
        <div className="relative mb-3 aspect-square overflow-hidden rounded-lg bg-gray-100">
          {product.imageUrl ? (
            <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-gray-500">
              Sin imagen
            </div>
          )}
        </div>
        <h3 className="text-base font-semibold">{product.name}</h3>
      </Link>
      <p className="mt-1 text-sm text-gray-600">{product.category}</p>
      <p className="mt-2 text-sm font-medium">
        {product.price ? `$${product.price.toFixed(2)}` : "Consultar precio"}
      </p>
      <div className="mt-3">
        <AddToCartButton product={product} />
      </div>
    </article>
  );
}
