import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Diversity Resources Limited | Integrated Agribusiness Nigeria",
  description:
    "Diversity Resources Limited is a fully integrated agribusiness company in Nigeria engaged in livestock production, cattle ranching, crop cultivation, and food processing.",
  keywords: [
    "agribusiness",
    "Nigeria",
    "livestock",
    "crop production",
    "food processing",
    "agriculture",
    "farming",
    "cattle ranching",
  ],
  authors: [{ name: "Diversity Resources Limited" }],
  openGraph: {
    title: "Diversity Resources Limited | Integrated Agribusiness Nigeria",
    description:
      "From Farm to Table — Sustainably. Integrated Livestock • Crop Production • Food Processing",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster
          position="top-right"
          richColors
          closeButton
          toastOptions={{
            style: {
              fontFamily: "var(--font-inter)",
            },
          }}
        />
      </body>
    </html>
  );
}
