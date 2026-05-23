"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, LockKeyhole, Mail } from "lucide-react";
import { useAuth } from "@/components/providers";

export function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail || !trimmedEmail.includes("@")) {
      setError("Enter a valid email address.");
      return;
    }

    if (password.trim().length < 4) {
      setError("Password must be at least 4 characters.");
      return;
    }

    setError("");
    login(trimmedEmail);
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
        Email address
        <span className="flex items-center gap-3 rounded-md border border-slate-200 px-4 py-3 focus-within:border-slate-950 dark:border-white/10 dark:focus-within:border-white">
          <Mail size={17} className="text-slate-400" />
          <input
            className="w-full bg-transparent outline-none"
            placeholder="you@example.com"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
          />
        </span>
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
        Password
        <span className="flex items-center gap-3 rounded-md border border-slate-200 px-4 py-3 focus-within:border-slate-950 dark:border-white/10 dark:focus-within:border-white">
          <LockKeyhole size={17} className="text-slate-400" />
          <input
            className="w-full bg-transparent outline-none"
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
          />
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
      {error && (
        <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-300">
          {error}
        </p>
      )}
      <button className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950">
        Sign in <ArrowRight size={17} />
      </button>
    </form>
  );
}
