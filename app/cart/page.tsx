import type { Metadata } from "next";
import { CartView } from "@/components/cart-view";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review your TrendMart cart, update quantities, remove products, and view total pricing."
};

export default function CartPage() {
  return <CartView />;
}
