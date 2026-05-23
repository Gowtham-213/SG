"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/components/providers";

export function CartButton() {
  const { count } = useCart();

  return (
    <Link
      href="/cart"
      className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-slate-900 dark:text-white"
      aria-label="Open cart"
    >
      <ShoppingCart size={20} />
      {count > 0 && (
        <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-coral px-1 text-xs font-bold text-white">
          {count}
        </span>
      )}
    </Link>
  );
}
