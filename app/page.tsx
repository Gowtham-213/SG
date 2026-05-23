import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, CreditCard, RefreshCw, ShieldCheck, Truck } from "lucide-react";
import { categories, products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { ServicesStrip } from "@/components/services-strip";

const newArrivals = products.slice(7, 11);
const featured = products.filter((product) => product.featured).slice(0, 4);
const bestSellers = products.filter((product) => product.bestSeller).slice(0, 4);

const trustBadges = [
  { icon: Truck, title: "Fast dispatch", text: "Most orders ship within 24 hours." },
  { icon: ShieldCheck, title: "Secure checkout", text: "Protected payments and encrypted data." },
  { icon: RefreshCw, title: "Easy returns", text: "Simple 30-day returns on eligible items." },
  { icon: CreditCard, title: "Flexible payments", text: "Card, wallet, and pay-on-delivery options." }
];

const testimonials = [
  {
    name: "Mia Roberts",
    role: "Verified buyer",
    text: "The product pages are clear, delivery dates are accurate, and checkout feels straightforward."
  },
  {
    name: "Daniel Kim",
    role: "Repeat customer",
    text: "TrendMart has become my default for practical tech and everyday items because the experience is consistent."
  },
  {
    name: "Ava Martinez",
    role: "Style shopper",
    text: "The category pages make it easy to browse without feeling overwhelmed by promotions."
  }
];

const faqs = [
  {
    question: "How quickly are orders delivered?",
    answer: "Most items dispatch within one business day. Delivery timing is shown on each product card and detail page."
  },
  {
    question: "Can I return an item?",
    answer: "Eligible products can be returned within 30 days in original condition with the order confirmation."
  },
  {
    question: "Are payments secure?",
    answer: "Checkout uses encrypted payment handling and does not expose sensitive card information in the storefront."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:px-8 lg:py-16">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">New season essentials</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Everyday shopping, refined for modern living.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
              Shop considered products across technology, fashion, beauty, groceries, and home essentials with clear delivery, trusted quality, and a clean buying experience.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/categories" className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200">
                Shop new arrivals <ArrowRight size={17} />
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold transition hover:border-slate-950 hover:bg-slate-50 dark:border-white/10 dark:hover:border-white dark:hover:bg-white/5">
                Delivery and returns
              </Link>
            </div>
            <div className="mt-10 grid max-w-2xl gap-3 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-3">
              {["Free returns", "Quality checked", "Support daily"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-slate-900 dark:text-slate-200" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/categories#fashion" className="group relative min-h-80 overflow-hidden bg-slate-100 dark:bg-slate-900 sm:col-span-2">
              <Image
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop"
                alt="Clean fashion retail display"
                fill
                priority
                className="object-cover transition duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 to-transparent p-6 text-white">
                <p className="text-sm font-medium">Spring edit</p>
                <h2 className="mt-1 text-2xl font-semibold">New wardrobe staples</h2>
              </div>
            </Link>
            <Link href="/categories#electronics" className="group relative min-h-48 overflow-hidden bg-slate-100 dark:bg-slate-900">
              <Image src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=900&auto=format&fit=crop" alt="Modern electronics desk" fill className="object-cover transition duration-300 group-hover:scale-[1.02]" sizes="(max-width: 768px) 100vw, 25vw" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-4 text-white">
                <h3 className="font-semibold">Work tech</h3>
              </div>
            </Link>
            <Link href="/categories#beauty" className="group relative min-h-48 overflow-hidden bg-slate-100 dark:bg-slate-900">
              <Image src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=900&auto=format&fit=crop" alt="Beauty products" fill className="object-cover transition duration-300 group-hover:scale-[1.02]" sizes="(max-width: 768px) 100vw, 25vw" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-4 text-white">
                <h3 className="font-semibold">Daily beauty</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <ServicesStrip />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="New arrivals" title="Recently added essentials" description="Fresh products with clear availability, practical delivery expectations, and refined presentation." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-14 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Top categories" title="Shop by department" description="A focused category layout that helps customers move quickly into the right products." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link key={category.name} href={`/categories#${category.name.toLowerCase()}`} className="group relative h-64 overflow-hidden bg-slate-200 dark:bg-slate-900">
                <Image src={category.image} alt={category.name} fill className="object-cover transition duration-300 group-hover:scale-[1.02]" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <p className="mt-1 text-sm text-slate-200">{category.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Featured products" title="Selected by our merchandising team" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-14 dark:border-white/10 dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Why choose us</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">Built for repeat shopping, not impulse clutter.</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
              The store prioritizes clear product information, predictable policies, and simple purchase paths.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {trustBadges.map((item) => (
              <div key={item.title} className="border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-900">
                <item.icon size={20} className="text-slate-900 dark:text-slate-200" />
                <h3 className="mt-4 font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Best sellers" title="Products customers come back for" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-14 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Customer notes" title="What shoppers say after ordering" />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((review) => (
              <figure key={review.name} className="border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-950">
                <blockquote className="text-sm leading-6 text-slate-700 dark:text-slate-300">{review.text}</blockquote>
                <figcaption className="mt-5 border-t border-slate-200 pt-4 dark:border-white/10">
                  <p className="font-semibold text-slate-950 dark:text-white">{review.name}</p>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">FAQ</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">Common questions</h2>
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200 dark:divide-white/10 dark:border-white/10">
          {faqs.map((faq) => (
            <div key={faq.question} className="py-5">
              <h3 className="font-semibold text-slate-950 dark:text-white">{faq.question}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white dark:bg-black">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Newsletter</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Receive weekly edits and restock alerts.</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">No noise, just new arrivals, practical offers, and category updates.</p>
          </div>
          <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input className="min-h-11 flex-1 rounded-md border border-white/10 bg-white px-4 text-sm text-slate-950 outline-none focus:border-white" placeholder="Email address" type="email" />
            <button className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
