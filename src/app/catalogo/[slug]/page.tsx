import Image from "next/image";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { mockProducts } from "@/lib/mockProducts";
import { Product } from "@/types/product";

async function getProduct(slug: string): Promise<Product | null> {
  return mockProducts.find((item) => item.slug === slug) ?? null;
}

type ProductDetailProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductDetailPage({ params }: ProductDetailProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="grid gap-6 rounded-xl bg-white p-4 sm:p-6 md:grid-cols-2">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        {product.imageUrl ? (
          <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-500">
            Sin imagen
          </div>
        )}
      </div>
      <div>
        <p className="text-sm text-gray-500">{product.category}</p>
        <h1 className="mt-1 text-2xl font-bold">{product.name}</h1>
        <p className="mt-3 text-sm leading-6 text-gray-700">{product.description}</p>
        <p className="mt-4 text-xl font-semibold">
          {product.price ? `$${product.price.toFixed(2)}` : "Consultar precio"}
        </p>
        <p className="mt-2 text-sm text-gray-600">Order will be completed via WhatsApp.</p>
        <div className="mt-4 max-w-xs">
          <AddToCartButton product={product} />
        </div>
      </div>
    </section>
  );
}
