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
        <p className="text-sm font-black uppercase tracking-[0.2em] text-coral">Contact</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">How can we help?</h1>
        <p className="mt-5 text-slate-600 dark:text-slate-300">Send a message for order support, returns, business inquiries, or product recommendations.</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="grid gap-4">
          {[
            { icon: Mail, title: "Email", text: "support@trendmart.example" },
            { icon: Phone, title: "Phone", text: "+1 (800) 555-0199" },
            { icon: MapPin, title: "Office", text: "Market Street, San Francisco, CA" }
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-4 rounded-[1.5rem] bg-white p-5 shadow-sm dark:bg-slate-900">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-r from-coral to-citrus text-slate-950">
                <item.icon size={21} />
              </div>
              <div>
                <p className="font-black text-slate-950 dark:text-white">{item.title}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <form className="grid gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-slate-900">
          <input className="rounded-2xl border border-slate-200 bg-transparent px-4 py-3 outline-none focus:border-coral dark:border-white/10" placeholder="Full name" />
          <input className="rounded-2xl border border-slate-200 bg-transparent px-4 py-3 outline-none focus:border-coral dark:border-white/10" placeholder="Email address" type="email" />
          <input className="rounded-2xl border border-slate-200 bg-transparent px-4 py-3 outline-none focus:border-coral dark:border-white/10" placeholder="Subject" />
          <textarea className="min-h-36 rounded-2xl border border-slate-200 bg-transparent px-4 py-3 outline-none focus:border-coral dark:border-white/10" placeholder="Message" />
          <button className="rounded-full bg-gradient-to-r from-coral to-citrus px-6 py-3.5 font-black text-slate-950 shadow-glow">Send Message</button>
        </form>
      </div>
    </div>
  );
}
