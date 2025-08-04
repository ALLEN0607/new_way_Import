import { notFound } from "next/navigation";
import { type Metadata } from "next";
import Image from "next/image";
import { products } from "@/data/products";

/* ---- 可选字段 Product 类型 ---- */
type Product = {
  slug: string;
  name?: string;
  title?: string;
  img?: string;
  image?: string;
  description?: string;
  origin?: string;
};

/* 预渲染所有 slug */
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

/* 每个产品 <title> */
export function generateMetadata(
  { params }: { params: { slug: string } }
): Metadata {
  const item = products.find((p) => p.slug === params.slug) as Product | undefined;
  const display = item?.title ?? item?.name ?? params.slug;
  return { title: `${display} | New Way Import` };
}

/* 详情页主体 —— 注意：不要写 async */
export default function ProductPage(
  { params }: { params: { slug: string } }
) {
  const item = products.find((p) => p.slug === params.slug) as Product | undefined;
  if (!item) return notFound();

  const imgSrc =
    item.img ?? item.image ?? "/images/placeholder.jpg";
  const prodName =
    item.title ?? item.name ?? params.slug;

  return (
    <article className="mx-auto max-w-3xl space-y-6 px-4 py-12 bg-black text-white">
      <h1 className="text-3xl font-bold">{prodName}</h1>

      <div className="relative h-72 w-full overflow-hidden rounded-xl">
        <Image src={imgSrc} alt={prodName} fill className="object-cover" />
      </div>

      {item.description && (
        <p className="text-gray-300">{item.description}</p>
      )}
      {item.origin && (
        <p className="text-sm text-gray-400">Origin: {item.origin}</p>
      )}
    </article>
  );
}
