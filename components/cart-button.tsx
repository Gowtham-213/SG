"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/components/providers";

export function CartButton() {
  const { count } = useCart();

  return (
    <Link
      href="/cart"
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-white/5"
      aria-label="Open cart"
    >
      <ShoppingCart size={18} />
      {count > 0 && (
        <span className="absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-slate-950 px-1 text-xs font-semibold text-white dark:bg-white dark:text-slate-950">
          {count}
        </span>
      )}
    </Link>
  );
}
