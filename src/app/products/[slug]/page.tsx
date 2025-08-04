import { products } from "@/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductDetail({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold">{product.name}</h1>

      <div className="relative h-72 w-full rounded-xl overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <p className="text-gray-700">{product.description}</p>
      <p className="text-sm text-gray-500">Origin: {product.origin}</p>
    </article>
  );
}
