import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about TrendMart, a modern eCommerce brand focused on premium everyday shopping."
};

const stats = ["12K+ orders", "4.8 average rating", "30-day returns"];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">About TrendMart</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">
            A practical marketplace for better everyday shopping.
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-300">
            TrendMart curates useful products across technology, style, beauty, groceries, and lifestyle categories. The experience is built around clear product information, fast delivery, and checkout that stays simple.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat} className="border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-950">
                <p className="font-semibold text-slate-950 dark:text-white">{stat}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-900">
          <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1400&auto=format&fit=crop" alt="Modern retail workspace" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </section>
    </div>
  );
}
