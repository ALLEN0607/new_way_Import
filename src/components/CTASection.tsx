"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-gradient-to-r from-orange-700 to-orange-500 py-20 text-white"
    >
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h3 className="text-3xl font-bold">Ready to work with us?</h3>
        <p className="text-lg">
          Tell us what products you’re looking for — we’ll source, import and
          deliver to your door.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-md bg-white px-8 py-3 font-medium text-orange-700
                     transition hover:bg-gray-100"
        >
          Contact Us
        </Link>
      </div>
    </motion.section>
  );
}
