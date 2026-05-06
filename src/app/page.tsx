import Image from "next/image";
import Link from "next/link";
import { ProductGrid } from "@/components/ProductGrid";
import { mockProducts } from "@/lib/mockProducts";

const highlights = [
  {
    title: "Hecho a mano con amor",
    description: "Cada detalle importa",
    icon: "💗",
  },
  {
    title: "Envios a todo el pais",
    description: "Rapidos y seguros",
    icon: "🚚",
  },
  {
    title: "Materiales seleccionados",
    description: "Suaves y resistentes",
    icon: "🌿",
  },
  {
    title: "Disenos unicos y originales",
    description: "Para cada personalidad",
    icon: "🧡",
  },
];

const favoriteCategories = [
  {
    name: "Monios",
    imageSrc: "/icono-monio.png",
    href: "/catalogo?categoria=monios",
    bgColor: "bg-[#f7e8d7]",
    ringColor: "border-[#efc9b4]",
  },
  {
    name: "Vinchas",
    imageSrc: "/icono-vincha.png",
    href: "/catalogo?categoria=vinchas",
    bgColor: "bg-[#f8e8b6]",
    ringColor: "border-[#e8cb79]",
  },
  {
    name: "Colitas",
    imageSrc: "/icono-colita.png",
    href: "/catalogo?categoria=colitas",
    bgColor: "bg-[#e8f0cf]",
    ringColor: "border-[#c9d9a7]",
  },
];

export default async function Home() {
  const products = mockProducts.slice(0, 4);
  return (
    <section>
      <div className="relative mb-8 overflow-hidden rounded-2xl border-2 border-dashed border-[#d8b88f] bg-[#f8f1e5]">
        <div className="relative w-full">
          <Image
            src="/maca-hero-mobile-img2.png"
            alt="Moños artesanales de colores"
            width={576}
            height={1024}
            priority
            className="h-auto w-full md:hidden"
            sizes="100vw"
          />
          <Image
            src="/maca-hero-img.png"
            alt="Moños artesanales de colores"
            width={1655}
            height={950}
            priority
            className="hidden h-auto w-full md:block"
            sizes="(max-width: 768px) 0vw, 1100px"
          />

          

          <div className="absolute inset-0 z-10 flex max-w-md flex-col justify-start px-5 py-8 sm:justify-center sm:px-10 sm:py-10">
            <span className="inline-flex w-fit items-center rounded-full bg-[#f6b4af] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#1f1b16]">
              Accesorios hechos con amor ♡
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-[0.95] text-[#1f1713] sm:text-6xl">
              Para los dias mas lindos
            </h1>
            <p className="mt-3 max-w-xs text-base text-[#2f2923] sm:mt-4 sm:max-w-none sm:text-xl">
              Accesorios artesanales para acompanar a las mas pequenas en cada aventura.
            </p>
            <Link
              href="/catalogo"
              className="mt-5 inline-flex w-fit items-center gap-2 rounded-2xl border border-[#dbab22] bg-[#f7c32f] px-5 py-2 text-xl font-bold text-[#1f1713] shadow-[0_3px_0_#ce9e1d] sm:mt-7 sm:px-7 sm:py-3 sm:text-3xl"
            >
              Ver tienda
              <span aria-hidden="true">🐝</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-8 rounded-3xl border-2 border-dashed border-[#d8b88f] bg-[#fef6eb] p-4 sm:p-6">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3 rounded-2xl px-2 py-2 lg:rounded-none lg:px-3 lg:py-1 lg:not-first:border-l lg:not-first:border-dashed lg:not-first:border-[#d8c8af]"
            >
              <span className="text-4xl leading-none" aria-hidden="true">
                {item.icon}
              </span>
              <div>
                <p className="text-lg font-semibold leading-tight text-[#3a2b1d]">{item.title}</p>
                <p className="mt-1 text-sm text-[#5f5044]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="mb-8 rounded-3xl bg-[#fef6eb] p-5 sm:p-7">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-3xl font-bold text-[#2f2116]">Categorias favoritas</h2>
          <Link href="/catalogo" className="text-sm font-bold uppercase tracking-wide text-[#3a2b1d]">
            Ver todas
          </Link>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {favoriteCategories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group justify-self-center rounded-2xl bg-[#fef6eb] px-4 py-2 w-fit"
            >
              <div className="relative mx-auto h-28 w-28">
                <svg
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-180"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="43"
                    fill="none"
                    strokeWidth="4"
                    strokeDasharray="12 8"
                    className="stroke-[#d9c7af] transition-colors duration-300 group-hover:stroke-[#f7c32f]"
                  />
                </svg>
                <div className={`absolute inset-[8px] flex items-center justify-center rounded-full ${category.bgColor}`}>
                  <Image
                    src={category.imageSrc}
                    alt={`Categoria ${category.name}`}
                    width={88}
                    height={88}
                    className="h-[88px] w-[88px] object-contain"
                  />
                </div>
              </div>
              <p className="mt-3 text-center text-2xl font-bold text-[#2f2116]">{category.name}</p>
              <p className="text-center text-sm font-semibold uppercase tracking-wide text-[#5f5044]">Ver productos</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="mb-6 rounded-xl border-2 border-dashed border-[#d8b88f] bg-[#fef6eb] p-6">
        <div className="flex items-center justify-between gap-3">
          <h2 className=" mb-8 text-3xl font-bold text-[#2f2116]">Productos destacados</h2>
          <Link href="/catalogo" className="text-sm font-bold uppercase tracking-wide text-[#3a2b1d]">
            Ver todo el catalogo
          </Link>
        </div>
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
