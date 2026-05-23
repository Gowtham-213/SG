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
      <Link href="/categories" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-coral dark:text-slate-300">
        <ArrowLeft size={17} />
        Back to categories
      </Link>

      <section className="grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-slate-100 shadow-soft dark:bg-slate-900">
          <Image src={product.image} alt={product.name} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-black text-coral shadow-sm backdrop-blur">
            {product.badge}
          </span>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-coral">{product.category}</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">{product.name}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <Stars rating={product.rating} />
            <span className="text-sm font-semibold text-slate-500">{product.reviews.toLocaleString()} reviews</span>
          </div>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">{product.description}</p>
          <div className="mt-6 flex items-end gap-3">
            <span className="text-4xl font-black text-slate-950 dark:text-white">{formatCurrency(product.price)}</span>
            <span className="text-lg font-bold text-slate-400 line-through">{formatCurrency(product.originalPrice)}</span>
          </div>
          <ProductActions product={product} />

          <div className="mt-8 grid gap-3 rounded-[1.5rem] border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-900">
            {product.details.map((detail) => (
              <div key={detail} className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
                <CheckCircle2 size={18} className="text-lagoon" />
                {detail}
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-900">
              <Truck className="text-coral" />
              <span className="font-bold">Fast delivery available</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-900">
              <ShieldCheck className="text-lagoon" />
              <span className="font-bold">Secure checkout</span>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-6 text-3xl font-black text-slate-950 dark:text-white">Related picks</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item, index) => (
              <ProductCard key={item.id} product={item} index={index} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
