import { notFound } from "next/navigation";
import { type Metadata } from "next";
import Image from "next/image";
import { products } from "@/data/products";

/* 允许不同字段命名的产品类型 */
type Product = {
  slug: string;
  title?: string;
  name?: string;
  img?: string;
  image?: string;
  description?: string;
  origin?: string;
};

type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

/* 预渲染所有 slug */
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

/* 每个产品的 <title> */
export function generateMetadata({ params }: PageProps): Metadata {
  const item = products.find((p) => p.slug === params.slug) as Product | undefined;
  const displayName = item?.title ?? item?.name ?? params.slug;
  return { title: `${displayName} | New Way Import` };
}

/* 详情页主体 */
export default async function ProductPage({ params }: PageProps) {
  const item = products.find((p) => p.slug === params.slug) as Product | undefined;
  if (!item) return notFound();

  /* 智能取字段：先 img→image，其次 title→name */
  const imgSrc   = item.img   ?? item.image   ?? "/images/placeholder.jpg";
  const prodName = item.title ?? item.name    ?? params.slug;

  return (
    <article className="mx-auto max-w-3xl space-y-6 px-4 py-12 bg-black text-white">
      <h1 className="text-3xl font-bold">{prodName}</h1>

      <div className="relative h-72 w-full overflow-hidden rounded-xl">
        <Image
          src={imgSrc}
          alt={prodName}
          fill
          className="object-cover"
        />
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
