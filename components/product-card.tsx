"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Truck } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatCurrency } from "@/lib/products";
import { useCart } from "@/components/providers";
import { Stars } from "@/components/stars";

export function ProductCard({ product }: { product: Product; index?: number }) {
  const { addItem } = useCart();

  return (
    <article className="group overflow-hidden border border-slate-200 bg-white transition hover:border-slate-300 hover:shadow-soft dark:border-white/10 dark:bg-slate-950 dark:hover:border-white/20">
      <Link href={`/products/${product.id}`} className="relative block aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-900">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-3 top-3 bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-700 shadow-sm dark:bg-slate-950 dark:text-slate-200">
          {product.badge}
        </span>
      </Link>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="text-xs font-medium uppercase tracking-wide text-slate-500">{product.category}</span>
          <Stars rating={product.rating} />
        </div>
        <Link href={`/products/${product.id}`} className="line-clamp-2 min-h-11 text-base font-semibold leading-snug text-slate-950 hover:underline dark:text-white">
          {product.name}
        </Link>
        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-semibold text-slate-950 dark:text-white">{formatCurrency(product.price)}</span>
          <span className="text-sm text-slate-400 line-through">{formatCurrency(product.originalPrice)}</span>
        </div>
        <div className="mt-3 grid gap-1 text-xs text-slate-500 dark:text-slate-400">
          <span>{product.stock > 10 ? "In stock" : `Only ${product.stock} left`}</span>
          <span className="inline-flex items-center gap-1.5">
            <Truck size={13} />
            {product.delivery}
          </span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            onClick={() => addItem(product)}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-3 py-2.5 text-sm font-semibold transition hover:border-slate-950 hover:bg-slate-50 dark:border-white/10 dark:hover:border-white dark:hover:bg-white/5"
          >
            <ShoppingBag size={16} />
            Add
          </button>
          <button
            onClick={() => addItem(product)}
            className="inline-flex items-center justify-center rounded-md bg-slate-950 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
          >
            Buy
          </button>
        </div>
      </div>
    </article>
  );
}
