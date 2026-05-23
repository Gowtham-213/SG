import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact TrendMart support for orders, returns, product questions, and partnership inquiries."
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Contact</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">How can we help?</h1>
        <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-300">Send a message for order support, returns, product questions, or partnership inquiries.</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4">
          {[
            { icon: Mail, title: "Email", text: "support@trendmart.example" },
            { icon: Phone, title: "Phone", text: "+1 (800) 555-0199" },
            { icon: MapPin, title: "Office", text: "Market Street, San Francisco, CA" }
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-4 border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-950">
              <div className="grid h-10 w-10 place-items-center rounded-md border border-slate-200 text-slate-700 dark:border-white/10 dark:text-slate-200">
                <item.icon size={18} />
              </div>
              <div>
                <p className="font-semibold text-slate-950 dark:text-white">{item.title}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <form className="grid gap-4 border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-950">
          <input className="rounded-md border border-slate-200 bg-transparent px-4 py-3 text-sm outline-none focus:border-slate-950 dark:border-white/10 dark:focus:border-white" placeholder="Full name" />
          <input className="rounded-md border border-slate-200 bg-transparent px-4 py-3 text-sm outline-none focus:border-slate-950 dark:border-white/10 dark:focus:border-white" placeholder="Email address" type="email" />
          <input className="rounded-md border border-slate-200 bg-transparent px-4 py-3 text-sm outline-none focus:border-slate-950 dark:border-white/10 dark:focus:border-white" placeholder="Subject" />
          <textarea className="min-h-36 rounded-md border border-slate-200 bg-transparent px-4 py-3 text-sm outline-none focus:border-slate-950 dark:border-white/10 dark:focus:border-white" placeholder="Message" />
          <button className="rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950">Send message</button>
        </form>
      </div>
    </div>
  );
}
