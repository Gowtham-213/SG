"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/components/providers";
import { formatCurrency } from "@/lib/products";

export function CartView() {
  const { items, increase, decrease, removeItem, subtotal, clearCart } = useCart();
  const shipping = items.length ? 12 : 0;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">Your cart is empty</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">Add a few favorites and your checkout summary will appear here.</p>
        <Link href="/categories" className="mt-8 inline-flex rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950">
          Explore products
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
      <section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Cart</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">Shopping cart</h1>
          </div>
          <button onClick={clearCart} className="text-sm font-semibold text-slate-600 underline-offset-4 hover:text-slate-950 hover:underline dark:text-slate-300 dark:hover:text-white">
            Clear cart
          </button>
        </div>
        <div className="grid gap-4">
          {items.map((item) => (
            <div key={item.id} className="grid gap-4 border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-slate-950 sm:grid-cols-[120px_1fr_auto]">
              <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-900">
                <Image src={item.image} alt={item.name} fill className="object-cover" sizes="120px" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{item.category}</p>
                <h2 className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">{item.name}</h2>
                <p className="mt-1 text-sm text-slate-500">{item.delivery}</p>
                <p className="mt-3 font-semibold text-slate-900 dark:text-slate-100">{formatCurrency(item.price)}</p>
                <div className="mt-4 inline-flex items-center rounded-md border border-slate-200 dark:border-white/10">
                  <button onClick={() => decrease(item.id)} className="grid h-9 w-9 place-items-center transition hover:bg-slate-50 dark:hover:bg-white/5" aria-label="Decrease quantity">
                    <Minus size={15} />
                  </button>
                  <span className="grid h-9 min-w-9 place-items-center text-sm font-semibold">{item.quantity}</span>
                  <button onClick={() => increase(item.id)} className="grid h-9 w-9 place-items-center transition hover:bg-slate-50 dark:hover:bg-white/5" aria-label="Increase quantity">
                    <Plus size={15} />
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="self-start rounded-md border border-slate-200 p-2.5 text-slate-500 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/10 dark:hover:border-white dark:hover:text-white"
                aria-label="Remove item"
              >
                <Trash2 size={17} />
              </button>
            </div>
          ))}
        </div>
      </section>
      <aside className="h-fit border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-950">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Order summary</h2>
        <div className="mt-6 grid gap-4 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-500">Subtotal</span>
            <span className="font-medium">{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Shipping</span>
            <span className="font-medium">{formatCurrency(shipping)}</span>
          </div>
          <div className="border-t border-slate-200 pt-4 dark:border-white/10">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950">
          Checkout
        </button>
      </aside>
    </div>
  );
}
