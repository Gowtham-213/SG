import type { Metadata } from "next";
import { Headphones, PackageCheck, RefreshCw, ShieldCheck, Truck } from "lucide-react";
import { ServicesStrip } from "@/components/services-strip";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore TrendMart services including fast delivery, secure payment, 24/7 support, and easy returns."
};

const services = [
  { icon: Truck, title: "Fast delivery", text: "Express fulfillment with same-day dispatch on eligible products and clear delivery tracking." },
  { icon: ShieldCheck, title: "Secure payment", text: "Modern encrypted checkout with card, wallet, and cash-on-delivery style options." },
  { icon: Headphones, title: "24/7 customer support", text: "Order help, product guidance, and return support from a friendly service team." },
  { icon: RefreshCw, title: "Easy returns", text: "A simple 30-day return window with clear instructions and quick refunds." },
  { icon: PackageCheck, title: "Premium packaging", text: "Careful packing that protects delicate electronics, cosmetics, and grocery items." }
];

export default function ServicesPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-coral">Services</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Shopping support built around speed, trust, and flexibility.
          </h1>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-slate-900">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-r from-coral to-citrus text-slate-950">
                <service.icon size={24} />
              </div>
              <h2 className="mt-6 text-xl font-black text-slate-950 dark:text-white">{service.title}</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
      <ServicesStrip />
    </>
  );
}
