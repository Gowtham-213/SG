import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const shopLinks = ["Categories", "Cart", "Services"];
const companyLinks = ["About", "Contact", "Login"];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
            TrendMart
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-300">
            A modern marketplace for considered essentials, fast delivery, and reliable everyday shopping.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Twitter, Facebook, Youtube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-md border border-slate-200 text-slate-600 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/10 dark:text-slate-300 dark:hover:border-white dark:hover:text-white"
                aria-label="Social link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-950 dark:text-white">Shop</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
            {shopLinks.map((link) => (
              <Link key={link} href={`/${link.toLowerCase() === "categories" ? "categories" : link.toLowerCase()}`}>
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-950 dark:text-white">Company</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
            {companyLinks.map((link) => (
              <Link key={link} href={`/${link.toLowerCase()}`}>
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-950 dark:text-white">Support</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
            <span>support@trendmart.example</span>
            <span>+91 9876543219</span>
            <span>Mon-Sat, 9:00 AM-8:00 PM</span>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-5 text-center text-sm text-slate-500 dark:border-white/10">
        (c) 2026 TrendMart. All rights reserved.
      </div>
    </footer>
  );
}
