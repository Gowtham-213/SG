"use client";

import Link from "next/link";
import { Menu, Search, UserRound, X } from "lucide-react";
import { useState } from "react";
import { categories } from "@/lib/products";
import { CartButton } from "@/components/cart-button";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "Categories" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-black tracking-tight text-slate-950 dark:text-white">
          Trend<span className="text-coral">Mart</span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-semibold text-slate-700 dark:text-slate-200 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-coral">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden flex-1 items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 shadow-sm dark:border-white/10 dark:bg-white/5 md:flex">
          <Search size={18} className="text-slate-400" />
          <input
            className="w-full bg-transparent px-3 text-sm outline-none placeholder:text-slate-400"
            placeholder={`Search ${categories.map((category) => category.name).slice(0, 3).join(", ")}...`}
          />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <CartButton />
          <button className="hidden items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-coral dark:bg-white dark:text-slate-950 sm:inline-flex">
            <UserRound size={17} />
            Login
          </button>
          <button
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900 lg:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 dark:border-white/10 dark:bg-slate-950 lg:hidden">
          <div className="mb-4 flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 dark:border-white/10 dark:bg-white/5">
            <Search size={18} className="text-slate-400" />
            <input className="w-full bg-transparent px-3 text-sm outline-none" placeholder="Search products..." />
          </div>
          <nav className="grid gap-3 text-sm font-bold text-slate-700 dark:text-slate-200">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
