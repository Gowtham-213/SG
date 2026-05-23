export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="h-96 animate-pulse bg-slate-100 dark:bg-white/10" />
        <div className="space-y-4">
          <div className="h-8 w-32 animate-pulse bg-slate-100 dark:bg-white/10" />
          <div className="h-14 w-full animate-pulse bg-slate-100 dark:bg-white/10" />
          <div className="h-24 w-full animate-pulse bg-slate-100 dark:bg-white/10" />
          <div className="h-11 w-48 animate-pulse bg-slate-100 dark:bg-white/10" />
        </div>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="h-80 animate-pulse bg-slate-100 dark:bg-white/10" />
        ))}
      </div>
    </div>
  );
}
