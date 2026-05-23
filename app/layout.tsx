import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: {
    default: "TrendMart | Premium Modern eCommerce",
    template: "%s | TrendMart"
  },
  description:
    "Shop premium electronics, fashion, shoes, watches, beauty essentials, and groceries with fast delivery and secure checkout.",
  keywords: ["TrendMart", "eCommerce", "Next.js shopping", "fashion", "electronics", "groceries"],
  icons: {
    icon: "/icon.svg"
  },
  openGraph: {
    title: "TrendMart",
    description: "A premium responsive shopping experience for modern essentials.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
