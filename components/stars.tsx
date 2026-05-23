import { Star } from "lucide-react";

export function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-amber-500" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={13} fill={index < Math.round(rating) ? "currentColor" : "none"} />
      ))}
      <span className="ml-1 text-xs font-medium text-slate-500 dark:text-slate-400">{rating.toFixed(1)}</span>
    </div>
  );
}
