import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, LockKeyhole, Mail, UserRound } from "lucide-react";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your TrendMart account to manage orders, carts, and saved products."
};

export default function LoginPage() {
  return (
    <div className="mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_28rem] lg:px-8">
      <section className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Welcome back</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">
          Sign in to manage orders and saved products.
        </h1>
        <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
          Access your cart, track recent orders, and keep shopping across TrendMart departments.
        </p>
        <div className="mt-8 grid gap-3 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-3">
          {["Saved carts", "Order history", "Fast checkout"].map((item) => (
            <div key={item} className="border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-slate-950">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-950">
        <div className="mb-6 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-md border border-slate-200 text-slate-700 dark:border-white/10 dark:text-slate-200">
            <UserRound size={19} />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Login</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Use your email and password.</p>
          </div>
        </div>

        <form className="grid gap-4">
          <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            Email address
            <span className="flex items-center gap-3 rounded-md border border-slate-200 px-4 py-3 focus-within:border-slate-950 dark:border-white/10 dark:focus-within:border-white">
              <Mail size={17} className="text-slate-400" />
              <input className="w-full bg-transparent outline-none" placeholder="you@example.com" type="email" />
            </span>
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            Password
            <span className="flex items-center gap-3 rounded-md border border-slate-200 px-4 py-3 focus-within:border-slate-950 dark:border-white/10 dark:focus-within:border-white">
              <LockKeyhole size={17} className="text-slate-400" />
              <input className="w-full bg-transparent outline-none" placeholder="Enter password" type="password" />
            </span>
          </label>
          <div className="flex items-center justify-between gap-4 text-sm">
            <label className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <input type="checkbox" className="h-4 w-4 accent-slate-950" />
              Remember me
            </label>
            <Link href="/contact" className="font-semibold text-slate-950 underline-offset-4 hover:underline dark:text-white">
              Need help?
            </Link>
          </div>
          <button className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950">
            Sign in <ArrowRight size={17} />
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          New to TrendMart?{" "}
          <Link href="/categories" className="font-semibold text-slate-950 underline-offset-4 hover:underline dark:text-white">
            Start shopping
          </Link>
        </p>
      </section>
    </div>
  );
}
