import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about TrendMart, a modern eCommerce brand focused on premium everyday shopping."
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-coral">About TrendMart</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Premium shopping made simpler, faster, and more inspiring.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            TrendMart curates high-quality essentials across technology, style, beauty, groceries, and lifestyle categories. The experience is built around trustworthy products, clean design, fast delivery, and checkout that feels effortless.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["12K+ orders", "4.8 rating", "30-day returns"].map((stat) => (
              <div key={stat} className="rounded-[1.25rem] bg-white p-5 text-center shadow-sm dark:bg-slate-900">
                <p className="font-black text-slate-950 dark:text-white">{stat}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-soft">
          <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1400&auto=format&fit=crop" alt="Modern retail workspace" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </section>
    </div>
  );
}
