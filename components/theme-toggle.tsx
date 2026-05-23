"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-white/5"
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
