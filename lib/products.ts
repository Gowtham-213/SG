export type Category =
  | "Electronics"
  | "Fashion"
  | "Shoes"
  | "Watches"
  | "Beauty"
  | "Groceries";

export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  badge: string;
  image: string;
  description: string;
  details: string[];
  featured?: boolean;
  bestSeller?: boolean;
};

export const categories: { name: Category; image: string; tagline: string }[] = [
  {
    name: "Electronics",
    tagline: "Smart gear for modern homes",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "Fashion",
    tagline: "Refined essentials and statement fits",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "Shoes",
    tagline: "Performance comfort with street polish",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "Watches",
    tagline: "Minimal timepieces with premium details",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "Beauty",
    tagline: "Clean formulas and glow-ready tools",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "Groceries",
    tagline: "Fresh pantry picks delivered fast",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop"
  }
];

export const products: Product[] = [
  {
    id: "airpods-max",
    name: "Auraluxe Max Wireless Headphones",
    category: "Electronics",
    price: 249,
    originalPrice: 329,
    rating: 4.8,
    reviews: 1240,
    badge: "24% OFF",
    featured: true,
    bestSeller: true,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    description: "Immersive over-ear audio with adaptive noise control, plush memory foam, and all-day battery life.",
    details: ["40-hour battery", "Adaptive noise cancellation", "Fast USB-C charging", "Premium aluminum frame"]
  },
  {
    id: "nova-phone",
    name: "Nova X1 5G Smartphone",
    category: "Electronics",
    price: 799,
    originalPrice: 899,
    rating: 4.7,
    reviews: 890,
    badge: "Hot",
    featured: true,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    description: "A bright edge-to-edge display, pro-grade camera system, and fast 5G performance in a slim body.",
    details: ["6.7-inch OLED display", "Triple-lens camera", "128GB storage", "All-day battery"]
  },
  {
    id: "linen-jacket",
    name: "Avenue Linen Utility Jacket",
    category: "Fashion",
    price: 118,
    originalPrice: 165,
    rating: 4.6,
    reviews: 532,
    badge: "29% OFF",
    bestSeller: true,
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",
    description: "A breathable, polished layer with tailored pockets and a relaxed silhouette for every season.",
    details: ["Soft linen blend", "Relaxed fit", "Machine washable", "Four utility pockets"]
  },
  {
    id: "runner-pro",
    name: "Velocity Runner Pro Sneakers",
    category: "Shoes",
    price: 139,
    originalPrice: 189,
    rating: 4.9,
    reviews: 1805,
    badge: "Best Seller",
    featured: true,
    bestSeller: true,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1200&auto=format&fit=crop",
    description: "Responsive cushioning, breathable mesh, and a confident silhouette built for training and city days.",
    details: ["Cloud foam midsole", "Rubber traction outsole", "Breathable knit upper", "True-to-size fit"]
  },
  {
    id: "chrono-watch",
    name: "Monarch Chronograph Watch",
    category: "Watches",
    price: 219,
    originalPrice: 289,
    rating: 4.7,
    reviews: 677,
    badge: "Limited",
    featured: true,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1200&auto=format&fit=crop",
    description: "A stainless steel chronograph with sapphire glass, precise movement, and a refined everyday profile.",
    details: ["Sapphire crystal", "Water resistant", "Stainless steel case", "Adjustable leather strap"]
  },
  {
    id: "glow-serum",
    name: "Lumina Vitamin C Glow Serum",
    category: "Beauty",
    price: 42,
    originalPrice: 58,
    rating: 4.8,
    reviews: 2140,
    badge: "28% OFF",
    bestSeller: true,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop",
    description: "A lightweight daily serum made to brighten, hydrate, and smooth dull skin without a sticky finish.",
    details: ["15% vitamin C", "Hyaluronic acid", "Dermatologist tested", "Cruelty free"]
  },
  {
    id: "organic-box",
    name: "Fresh Harvest Organic Box",
    category: "Groceries",
    price: 36,
    originalPrice: 48,
    rating: 4.5,
    reviews: 421,
    badge: "Fresh",
    image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=1200&auto=format&fit=crop",
    description: "A curated weekly box of seasonal produce, pantry greens, and chef-ready staples from trusted farms.",
    details: ["12-15 fresh items", "Locally sourced", "Reusable packaging", "Same-day delivery in select areas"]
  },
  {
    id: "leather-tote",
    name: "Northline Leather Tote",
    category: "Fashion",
    price: 149,
    originalPrice: 210,
    rating: 4.6,
    reviews: 384,
    badge: "New",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200&auto=format&fit=crop",
    description: "Structured, spacious, and crafted with a buttery vegan leather finish for workdays and weekends.",
    details: ["Laptop sleeve", "Magnetic closure", "Scratch-resistant finish", "Detachable strap"]
  },
  {
    id: "sport-watch",
    name: "PulseFit Sport Watch",
    category: "Watches",
    price: 179,
    originalPrice: 239,
    rating: 4.4,
    reviews: 1022,
    badge: "25% OFF",
    bestSeller: true,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1200&auto=format&fit=crop",
    description: "A sleek fitness watch with heart tracking, GPS routes, sleep insights, and smart notifications.",
    details: ["Built-in GPS", "7-day battery", "Sleep tracking", "50 sport modes"]
  },
  {
    id: "daily-sneaker",
    name: "Courtline Daily Sneakers",
    category: "Shoes",
    price: 88,
    originalPrice: 125,
    rating: 4.5,
    reviews: 748,
    badge: "30% OFF",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop",
    description: "Clean leather-inspired sneakers with a cushioned footbed and versatile low-profile shape.",
    details: ["Cushioned insole", "Durable outsole", "Low-top profile", "Easy-clean upper"]
  },
  {
    id: "beauty-kit",
    name: "Studio Essentials Beauty Kit",
    category: "Beauty",
    price: 65,
    originalPrice: 92,
    rating: 4.7,
    reviews: 1175,
    badge: "Bundle",
    featured: true,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
    description: "A travel-ready edit of daily makeup tools, skin-prep minis, and polished finishing essentials.",
    details: ["8-piece set", "Travel pouch included", "Vegan brushes", "Clean ingredients"]
  },
  {
    id: "artisan-coffee",
    name: "Artisan Roast Coffee Pack",
    category: "Groceries",
    price: 24,
    originalPrice: 32,
    rating: 4.9,
    reviews: 916,
    badge: "Top Rated",
    bestSeller: true,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1200&auto=format&fit=crop",
    description: "Small-batch roasted beans with notes of cocoa, orange peel, and a smooth caramel finish.",
    details: ["Whole bean", "Medium roast", "Ethically sourced", "Roasted weekly"]
  }
];

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}
