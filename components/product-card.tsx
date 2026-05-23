"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Zap } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatCurrency } from "@/lib/products";
import { useCart } from "@/components/providers";
import { Stars } from "@/components/stars";
import { MotionDiv } from "@/components/motion";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addItem } = useCart();

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.04, duration: 0.45 }}
      className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-slate-900"
    >
      <Link href={`/products/${product.id}`} className="relative block aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-coral shadow-sm backdrop-blur">
          {product.badge}
        </span>
      </Link>
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-white/10 dark:text-slate-300">
            {product.category}
          </span>
          <Stars rating={product.rating} />
        </div>
        <Link href={`/products/${product.id}`} className="line-clamp-2 text-lg font-black text-slate-950 hover:text-coral dark:text-white">
          {product.name}
        </Link>
        <div className="mt-3 flex items-end gap-2">
          <span className="text-2xl font-black text-slate-950 dark:text-white">{formatCurrency(product.price)}</span>
          <span className="text-sm font-semibold text-slate-400 line-through">{formatCurrency(product.originalPrice)}</span>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            onClick={() => addItem(product)}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-bold transition hover:border-coral hover:text-coral dark:border-white/10"
          >
            <ShoppingBag size={16} />
            Cart
          </button>
          <button
            onClick={() => addItem(product)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-coral to-citrus px-4 py-2.5 text-sm font-black text-slate-950 shadow-glow transition hover:-translate-y-0.5"
          >
            <Zap size={16} />
            Buy
          </button>
        </div>
      </div>
    </MotionDiv>
  );
}
