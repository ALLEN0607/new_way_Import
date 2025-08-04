"use client";

import { motion } from "framer-motion";
import Image       from "next/image";
import ProductCard from "@/components/ProductCard";

/* 🟡  12 EMPTY SLOTS — replace img paths & titles when ready  */
const products = [
  { title: "Product 01", img: "/products/01.jpg" },
  { title: "Product 02", img: "/products/02.jpg" },
  { title: "Product 03", img: "/products/03.jpg" },
  { title: "Product 04", img: "/products/04.jpg" },
  { title: "Product 05", img: "/products/05.jpg" },
  { title: "Product 06", img: "/products/06.jpg" },
  { title: "Product 07", img: "/products/07.jpg" },
  { title: "Product 08", img: "/products/08.jpg" },
  { title: "Product 09", img: "/products/09.jpg" },
  { title: "Product 10", img: "/products/10.jpg" },
  { title: "Product 11", img: "/products/11.jpg" },
  { title: "Product 12", img: "/products/12.jpg" },
];

export default function ProductsPage() {
  return (
    <>
      {/* ───── Hero banner ───── */}
      <section className="relative isolate h-[60vh]">
        <Image
          src="/images/catalogue-hero.jpg"   /* path to your uploaded JPG */
          alt="Food product catalogue"
          fill
          priority
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/50" />

        <div className="flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl font-extrabold tracking-wide sm:text-6xl">
            Food Product&nbsp;Catalogue
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Explore our most popular imports
          </p>
        </div>
      </section>

      {/* ───── Product grid ───── */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-black py-20 text-white"
      >
        <div className="mx-auto max-w-6xl space-y-12 px-6">
          <h2 className="text-center text-3xl font-bold">All Products</h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.title} p={p} />
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
