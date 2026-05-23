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
      <div className="mb-12">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-coral">Departments</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">Shop by category</h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <a key={category.name} href={`#${category.name.toLowerCase()}`} className="relative h-44 overflow-hidden rounded-[1.5rem] shadow-sm">
            <Image src={category.image} alt={category.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            <div className="absolute inset-0 bg-slate-950/45" />
            <div className="absolute bottom-5 left-5 text-white">
              <h2 className="text-2xl font-black">{category.name}</h2>
              <p className="text-sm text-slate-100">{category.tagline}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-16 grid gap-16">
        {categories.map((category) => {
          const categoryProducts = products.filter((product) => product.category === category.name);
          return (
            <section key={category.name} id={category.name.toLowerCase()} className="scroll-mt-28">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-coral">{category.name}</p>
                  <h2 className="mt-2 text-3xl font-black text-slate-950 dark:text-white">{category.tagline}</h2>
                </div>
                <span className="hidden rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm dark:bg-slate-900 sm:inline-flex">
                  {categoryProducts.length} products
                </span>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {categoryProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
