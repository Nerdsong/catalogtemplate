import Link from "next/link";
import { ProductGrid } from "@/components/ProductGrid";
import { mockProducts } from "@/lib/mockProducts";

export default async function Home() {
  const products = mockProducts.slice(0, 4);
  return (
    <section>
      <div className="mb-6 rounded-xl bg-white p-6">
        <h1 className="text-2xl font-bold">Productos destacados</h1>
        <p className="mt-2 text-sm text-gray-600">
          Catalogo reusable para pequenas empresas. Order will be completed via WhatsApp.
        </p>
        <Link href="/catalogo" className="mt-4 inline-block text-sm font-medium text-green-700">
          Ver todo el catalogo
        </Link>
      </div>
      <ProductGrid products={products} />
    </section>
  );
}
