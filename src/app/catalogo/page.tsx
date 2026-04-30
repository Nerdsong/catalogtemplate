import { ProductGrid } from "@/components/ProductGrid";
import { mockProducts } from "@/lib/mockProducts";

export default async function CatalogPage() {
  const products = mockProducts;

  return (
    <section>
      <h1 className="mb-2 text-2xl font-bold">Catalogo</h1>
      <p className="mb-6 text-sm text-gray-600">Order will be completed via WhatsApp.</p>
      <ProductGrid products={products} />
    </section>
  );
}
