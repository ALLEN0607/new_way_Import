import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link
      href={`/products/${p.slug}`}
      className="rounded-2xl shadow hover:shadow-lg transition block overflow-hidden"
    >
      <div className="relative pb-[70%]">
        <Image src={p.image} alt={p.name} fill className="object-cover" />
      </div>

      <div className="p-4 space-y-1 bg-white">
        <h3 className="font-semibold">{p.name}</h3>
        <p className="text-xs text-gray-500">{p.origin}</p>
      </div>
    </Link>
  );
}
