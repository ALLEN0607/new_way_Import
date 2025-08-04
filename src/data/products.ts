export type Product = {
    slug: string;
    name: string;
    image: string;
    origin: string;        // 产地
    description: string;
  };
  
  export const products: Product[] = [
    {
      slug: "matcha-kitkat",
      name: "KitKat — Uji Matcha Flavor",
      image: "/products/matcha-kitkat.jpg",
      origin: "Japan",
      description:
        "Crispy wafers coated in premium Uji matcha chocolate for an authentic taste.",
    },
    {
      slug: "bibigo-mandu",
      name: "Bibigo Pork & Veggie Mandu",
      image: "/products/bibigo-mandu.jpg",
      origin: "Korea",
      description:
        "Generous dumplings filled with pork, cabbage, and glass noodles.",
    },
    // ➕ 再添加 6–8 个示例条目，图片放 public/products/
  ];
  