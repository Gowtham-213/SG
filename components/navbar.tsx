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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-slate-950/95">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
          TrendMart
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-slate-950 dark:hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden flex-1 items-center rounded-md border border-slate-200 bg-slate-50 px-3 py-2 dark:border-white/10 dark:bg-white/5 md:flex">
          <Search size={17} className="text-slate-400" />
          <input
            className="w-full bg-transparent px-3 text-sm outline-none placeholder:text-slate-400"
            placeholder={`Search ${categories.map((category) => category.name).slice(0, 3).join(", ")}...`}
          />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <CartButton />
          <Link href="/login" className="hidden items-center gap-2 rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 sm:inline-flex">
            <UserRound size={16} />
            Login
          </Link>
          <button
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white transition hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900 dark:hover:bg-white/5 lg:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 dark:border-white/10 dark:bg-slate-950 lg:hidden">
          <div className="mb-4 flex items-center rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 dark:border-white/10 dark:bg-white/5">
            <Search size={18} className="text-slate-400" />
            <input className="w-full bg-transparent px-3 text-sm outline-none" placeholder="Search products..." />
          </div>
          <nav className="grid gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/login" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 text-slate-950 dark:text-white">
              <UserRound size={17} />
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
