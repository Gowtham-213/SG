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
        className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-4 font-black transition hover:border-coral hover:text-coral dark:border-white/10"
      >
        <ShoppingBag size={19} />
        Add to Cart
      </button>
      <Link
        href="/cart"
        onClick={() => addItem(product)}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-coral to-citrus px-6 py-4 font-black text-slate-950 shadow-glow transition hover:-translate-y-0.5"
      >
        <Zap size={19} />
        Buy Now
      </Link>
    </div>
  );
}
