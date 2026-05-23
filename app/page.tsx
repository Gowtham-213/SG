import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { categories, products } from "@/lib/products";
import { MotionDiv, MotionSection } from "@/components/motion";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { ServicesStrip } from "@/components/services-strip";

const featured = products.filter((product) => product.featured).slice(0, 4);
const bestSellers = products.filter((product) => product.bestSeller).slice(0, 4);
const reviews = [
  { name: "Mia Roberts", role: "Verified buyer", text: "TrendMart feels polished and fast. My headphones arrived earlier than promised and the packaging was beautiful." },
  { name: "Daniel Kim", role: "Home office shopper", text: "The product cards, deals, and cart flow make it easy to compare and buy without second guessing." },
  { name: "Ava Martinez", role: "Style editor", text: "Fashion, beauty, and grocery picks in one place is exactly the kind of daily shopping experience I wanted." }
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <Image
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1800&auto=format&fit=crop"
          alt="Modern shopping desk with devices"
          fill
          priority
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/20" />
        <div className="relative mx-auto grid min-h-[680px] max-w-7xl content-center px-4 py-20 sm:px-6 lg:px-8">
          <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
              <Sparkles size={16} className="text-citrus" />
              Premium deals refreshed daily
            </div>
            <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              TrendMart
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Shop high-quality tech, style, beauty, groceries, and everyday essentials in a fast, elegant marketplace built for modern life.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/categories" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-coral to-citrus px-7 py-4 font-black text-slate-950 shadow-glow transition hover:-translate-y-0.5">
                Shop collections <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/10">
                View services
              </Link>
            </div>
            <div className="mt-10 grid max-w-xl gap-4 text-sm font-bold text-slate-200 sm:grid-cols-3">
              {["Secure checkout", "Fast delivery", "Easy returns"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-citrus" />
                  {item}
                </div>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>

      <ServicesStrip />

      <MotionSection className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Featured" title="Editor-picked essentials" description="Premium products with sharp prices, strong reviews, and effortless add-to-cart flow." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </MotionSection>

      <section className="bg-white py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Categories" title="Trending departments" description="Browse the shelves that shoppers are moving through right now." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <MotionDiv
                key={category.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/categories#${category.name.toLowerCase()}`} className="group relative block h-56 overflow-hidden rounded-[1.5rem]">
                  <Image src={category.image} alt={category.name} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <h3 className="text-2xl font-black">{category.name}</h3>
                    <p className="mt-1 text-sm text-slate-200">{category.tagline}</p>
                  </div>
                </Link>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Best sellers" title="Most-loved products" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-coral">Reviews</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">Customers shop happy</h2>
            <p className="mt-4 text-slate-300">Realistic storefront polish with trust-building sections for a professional eCommerce feel.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.name} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 shadow-soft">
                <p className="text-lg leading-8 text-slate-100">“{review.text}”</p>
                <div className="mt-6">
                  <p className="font-black">{review.name}</p>
                  <p className="text-sm text-slate-300">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-r from-slate-950 to-slate-800 p-8 text-white shadow-soft sm:p-12">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-citrus">Newsletter</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Get first access to drops and deals</h2>
          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-full bg-white p-2 sm:flex-row">
            <input className="min-h-12 flex-1 rounded-full px-5 text-slate-950 outline-none" placeholder="Enter your email" type="email" />
            <button className="rounded-full bg-gradient-to-r from-coral to-citrus px-7 py-3 font-black text-slate-950">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
