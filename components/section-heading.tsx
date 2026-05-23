export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-coral">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-slate-600 dark:text-slate-300">{description}</p>}
    </div>
  );
}
