"use client";
import { motion } from "framer-motion";

const products = [
    { title: "Snack Foods",            img: "/images/snacks.jpg" },
    { title: "Frozen Products",        img: "/images/frozen.jpg" },
    { title: "Beans & Millet",         img: "/images/grains.jpg" },
    { title: "Seasoning",              img: "/images/sauce.jpg"  },
    { title: "Candy & Cookies",        img: "/images/candy.jpg" },
    { title: "Noodles",                img: "/images/noodles.jpg"},
  ];

export default function ProductsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-black py-20 text-white"
    >
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <h3 className="text-center text-3xl font-bold">Main Categories</h3>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.title}
              className="group relative h-56 overflow-hidden rounded-xl"
            >
              <img
                src={p.img}
                alt={p.title}
                className="h-full w-full object-cover duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40" />
              <span className="absolute inset-x-0 bottom-4 text-center text-lg font-semibold">
                {p.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
