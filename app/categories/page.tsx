import type { Metadata } from "next";
import Image from "next/image";
import { categories, products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse TrendMart categories including electronics, fashion, shoes, watches, beauty, and groceries."
};

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Departments</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">Shop by category</h1>
        <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Browse focused departments with clear product availability and delivery information.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <a key={category.name} href={`#${category.name.toLowerCase()}`} className="group relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-900">
            <Image src={category.image} alt={category.name} fill className="object-cover transition duration-300 group-hover:scale-[1.02]" sizes="(max-width: 768px) 100vw, 33vw" />
            <div className="absolute inset-0 bg-slate-950/35" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <h2 className="text-xl font-semibold">{category.name}</h2>
              <p className="mt-1 text-sm text-slate-100">{category.tagline}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-16 grid gap-16">
        {categories.map((category) => {
          const categoryProducts = products.filter((product) => product.category === category.name);
          return (
            <section key={category.name} id={category.name.toLowerCase()} className="scroll-mt-28">
              <div className="mb-6 flex items-end justify-between gap-4 border-b border-slate-200 pb-4 dark:border-white/10">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{category.name}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">{category.tagline}</h2>
                </div>
                <span className="hidden text-sm text-slate-500 sm:inline-flex">{categoryProducts.length} products</span>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
