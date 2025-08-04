"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const points = [
    "15+ years of Asian-food import expertise",
    "100+ supermarket partners across North America",
    "In-house cold-chain warehousing & logistics",
    "Full FDA / USDA-compliant customs clearance",
  ];

export default function ValueSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-black py-20 text-white"
    >
      <div className="mx-auto max-w-4xl space-y-10 px-6 text-center">
        <h3 className="text-3xl font-bold">Why Choose Us</h3>

        <ul className="mx-auto grid max-w-xl gap-6 text-left">
          {points.map((pt) => (
            <li key={pt} className="flex items-start gap-3 leading-8">
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-orange-600" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
