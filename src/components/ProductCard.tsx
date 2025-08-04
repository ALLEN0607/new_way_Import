"use client";

import Image from "next/image";

type Product = {
  title: string;
  img?: string;         // 推荐统一用 img
  image?: string;       // 兼容旧字段
};

type CardProps = {
  p: Product;
};

export default function ProductCard({ p }: CardProps) {
  // ① 优选 p.img → ② 兼容 p.image → ③ 如果都没有，用占位图
  const imgSrc =
    p.img?.trim() || p.image?.trim() || "/images/placeholder.jpg";

  return (
    <div className="group relative overflow-hidden rounded-xl">
      {/* 图片区域，高度用 padding trick 保持 70% 比例 */}
      <div className="relative pb-[70%]">
        <Image
          src={imgSrc}
          alt={p.title}
          fill
          className="object-cover duration-300 group-hover:scale-105"
        />
      </div>

      {/* 文本区域 */}
      <div className="space-y-1 bg-white p-4">
        <h3 className="font-medium">{p.title}</h3>
      </div>
    </div>
  );
}
