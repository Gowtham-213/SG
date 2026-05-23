import { Headphones, PackageCheck, RefreshCw, ShieldCheck } from "lucide-react";

const services = [
  { icon: PackageCheck, title: "Fast delivery", text: "Same-day dispatch on top products." },
  { icon: ShieldCheck, title: "Secure payment", text: "Encrypted checkout with trusted methods." },
  { icon: Headphones, title: "24/7 support", text: "Helpful people whenever you need them." },
  { icon: RefreshCw, title: "Easy returns", text: "Simple returns within 30 days." }
];

export function ServicesStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-soft dark:border-white/10 dark:bg-slate-900 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div key={service.title} className="flex items-start gap-4 rounded-2xl p-4 transition hover:bg-slate-50 dark:hover:bg-white/5">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-coral to-citrus text-slate-950">
              <service.icon size={22} />
            </div>
            <div>
              <h3 className="font-black text-slate-950 dark:text-white">{service.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
