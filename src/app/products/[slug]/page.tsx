import { products } from "@/data/products";
import Image         from "next/image";
import { notFound, type Metadata } from "next";

type ProductPageProps = {
  params: { slug: string };
};

/* 预渲染所有 slug */
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

/* 可选：每个产品动态设置 <title> */
export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = products.find((p) => p.slug === params.slug);
  return {
    title: product
      ? `${product.name} | New Way Import`
      : "Product Not Found",
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <article className="mx-auto max-w-3xl space-y-6 px-4 py-12 bg-black text-white">
      <h1 className="text-3xl font-bold">{product.name}</h1>

      <div className="relative h-72 w-full overflow-hidden rounded-xl">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <p className="text-gray-300">{product.description}</p>
      <p className="text-sm text-gray-400">Origin: {product.origin}</p>
    </article>
  );
}
