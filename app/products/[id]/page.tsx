import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ShieldCheck, Truck } from "lucide-react";
import { ProductActions } from "@/components/product-actions";
import { ProductCard } from "@/components/product-card";
import { Stars } from "@/components/stars";
import { formatCurrency, getProduct, products } from "@/lib/products";

type Props = {
  params: { id: string };
};

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProduct(params.id);
  if (!product) return { title: "Product not found" };

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image]
    }
  };
}

export default function ProductDetailsPage({ params }: Props) {
  const product = getProduct(params.id);
  if (!product) notFound();

  const related = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/categories" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
        <ArrowLeft size={16} />
        Back to categories
      </Link>

      <section className="grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-900">
          <Image src={product.image} alt={product.name} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          <span className="absolute left-4 top-4 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-700 shadow-sm dark:bg-slate-950 dark:text-slate-200">
            {product.badge}
          </span>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{product.category}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">{product.name}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <Stars rating={product.rating} />
            <span className="text-sm text-slate-500">{product.reviews.toLocaleString()} reviews</span>
            <span className="text-sm text-slate-500">{product.stock > 10 ? "In stock" : `Only ${product.stock} left`}</span>
          </div>
          <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-300">{product.description}</p>
          <div className="mt-6 flex items-end gap-3">
            <span className="text-3xl font-semibold text-slate-950 dark:text-white">{formatCurrency(product.price)}</span>
            <span className="text-base text-slate-400 line-through">{formatCurrency(product.originalPrice)}</span>
          </div>
          <ProductActions product={product} />

          <div className="mt-8 grid gap-3 border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-950">
            {product.details.map((detail) => (
              <div key={detail} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                <CheckCircle2 size={17} className="text-slate-900 dark:text-slate-200" />
                {detail}
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-slate-950">
              <Truck size={19} />
              <span className="text-sm font-medium">{product.delivery}</span>
            </div>
            <div className="flex items-center gap-3 border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-slate-950">
              <ShieldCheck size={19} />
              <span className="text-sm font-medium">Secure checkout</span>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-6 text-2xl font-semibold text-slate-950 dark:text-white">Related products</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
