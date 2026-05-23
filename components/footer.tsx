import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const links = ["Categories", "Cart", "About", "Contact", "Services"];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white dark:border-white/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="text-3xl font-black tracking-tight">
            Trend<span className="text-coral">Mart</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
            Premium daily shopping for tech, fashion, beauty, groceries, and lifestyle essentials.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Twitter, Facebook, Youtube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-coral"
                aria-label="Social link"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold">Shop</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            {links.map((link) => (
              <Link key={link} href={`/${link.toLowerCase() === "categories" ? "categories" : link.toLowerCase()}`}>
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <span>support@trendmart.example</span>
            <span>+91 9876543219</span>
            <span>Miyapur, Mathrusree Nagar</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-400">
        © 2026 TrendMart. All rights reserved.
      </div>
    </footer>
  );
}
