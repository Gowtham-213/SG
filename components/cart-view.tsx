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
        <h1 className="text-4xl font-black text-slate-950 dark:text-white">Your cart is empty</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">Add a few favorites and your checkout summary will appear here.</p>
        <Link href="/categories" className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 font-bold text-white dark:bg-white dark:text-slate-950">
          Explore products
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-4xl font-black text-slate-950 dark:text-white">Shopping Cart</h1>
          <button onClick={clearCart} className="text-sm font-bold text-coral">
            Clear cart
          </button>
        </div>
        <div className="grid gap-4">
          {items.map((item) => (
            <div key={item.id} className="grid gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900 sm:grid-cols-[130px_1fr_auto]">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100">
                <Image src={item.image} alt={item.name} fill className="object-cover" sizes="130px" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">{item.category}</p>
                <h2 className="mt-2 text-xl font-black text-slate-950 dark:text-white">{item.name}</h2>
                <p className="mt-2 font-bold text-slate-700 dark:text-slate-200">{formatCurrency(item.price)}</p>
                <div className="mt-4 inline-flex items-center rounded-full border border-slate-200 dark:border-white/10">
                  <button onClick={() => decrease(item.id)} className="grid h-10 w-10 place-items-center" aria-label="Decrease quantity">
                    <Minus size={16} />
                  </button>
                  <span className="grid h-10 min-w-10 place-items-center font-black">{item.quantity}</span>
                  <button onClick={() => increase(item.id)} className="grid h-10 w-10 place-items-center" aria-label="Increase quantity">
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="self-start rounded-full border border-slate-200 p-3 text-slate-500 transition hover:border-coral hover:text-coral dark:border-white/10"
                aria-label="Remove item"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>
      <aside className="h-fit rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-slate-900">
        <h2 className="text-2xl font-black text-slate-950 dark:text-white">Order Summary</h2>
        <div className="mt-6 grid gap-4 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-500">Subtotal</span>
            <span className="font-bold">{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Shipping</span>
            <span className="font-bold">{formatCurrency(shipping)}</span>
          </div>
          <div className="border-t border-slate-200 pt-4 dark:border-white/10">
            <div className="flex justify-between text-xl font-black">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>
          </div>
        </div>
        <button className="mt-6 w-full rounded-full bg-gradient-to-r from-coral to-citrus px-6 py-3.5 font-black text-slate-950 shadow-glow transition hover:-translate-y-0.5">
          Checkout
        </button>
      </aside>
    </div>
  );
}
