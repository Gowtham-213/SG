export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="h-72 animate-pulse rounded-[2rem] bg-slate-200 dark:bg-white/10" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="h-80 animate-pulse rounded-[1.5rem] bg-slate-200 dark:bg-white/10" />
        ))}
      </div>
    </div>
  );
}
