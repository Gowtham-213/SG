import type { Metadata } from "next";
import { Headphones, PackageCheck, RefreshCw, ShieldCheck, Truck } from "lucide-react";
import { ServicesStrip } from "@/components/services-strip";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore TrendMart services including fast delivery, secure payment, support, and easy returns."
};

const services = [
  { icon: Truck, title: "Fast delivery", text: "Express fulfillment with same-day dispatch on eligible products and clear delivery tracking." },
  { icon: ShieldCheck, title: "Secure payment", text: "Encrypted checkout with card, wallet, and pay-on-delivery style options." },
  { icon: Headphones, title: "Customer support", text: "Order help, product guidance, and return support from a responsive service team." },
  { icon: RefreshCw, title: "Easy returns", text: "A simple 30-day return window with clear instructions and quick refunds." },
  { icon: PackageCheck, title: "Careful packaging", text: "Packing that protects delicate electronics, cosmetics, and grocery items." }
];

export default function ServicesPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Services</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">
            Shopping support built around speed, clarity, and trust.
          </h1>
          <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-300">Practical policies and service details designed to make repeat shopping predictable.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-soft dark:border-white/10 dark:bg-slate-950 dark:hover:border-white/20">
              <div className="grid h-11 w-11 place-items-center rounded-md border border-slate-200 text-slate-700 dark:border-white/10 dark:text-slate-200">
                <service.icon size={20} />
              </div>
              <h2 className="mt-6 text-lg font-semibold text-slate-950 dark:text-white">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
      <ServicesStrip />
    </>
  );
}
