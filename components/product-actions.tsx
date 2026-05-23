"use client";

import Link from "next/link";
import { ShoppingBag, Zap } from "lucide-react";
import type { Product } from "@/lib/products";
import { useCart } from "@/components/providers";

export function ProductActions({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2">
      <button
        onClick={() => addItem(product)}
        className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold transition hover:border-slate-950 hover:bg-slate-50 dark:border-white/10 dark:hover:border-white dark:hover:bg-white/5"
      >
        <ShoppingBag size={18} />
        Add to Cart
      </button>
      <Link
        href="/cart"
        onClick={() => addItem(product)}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
      >
        <Zap size={18} />
        Buy Now
      </Link>
    </div>
  );
}
