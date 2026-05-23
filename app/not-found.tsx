import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">Page not found</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">The page you are looking for is not available.</p>
      <Link href="/" className="mt-8 inline-flex rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950">
        Back home
      </Link>
    </div>
  );
}
