import Image from "next/image";
import AboutSection     from "@/components/AboutSection";
import ProductsSection  from "@/components/ProductsSection";
import ValueSection     from "@/components/ValueSection";
import CTASection       from "@/components/CTASection";

export default function Home() {
  return (
    <>
      {/* ---------- Hero Section ---------- */}
      <section className="relative isolate h-screen">
        {/* background */}
        <Image
          src="/hero.jpg"
          alt="Asian food assortment"
          fill
          priority
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/40" />

        {/* centred content */}
        <div className="mx-auto flex h-full max-w-5xl flex-col
                        items-center justify-center text-center text-white">
          {/* 🔽  LOGO slot  🔽 */}
          <Image
            src="/NEW_WAY_LOGO.jpg"
            alt="New Way Import logo"
            width={160}
            height={160}
            className="mb-6 select-none"
          />

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Discover Premium Asian Food
          </h1>
          <p className="mt-4 max-w-xl text-lg sm:text-xl text-gray-100">
            We import authentic tastes from across Asia—bringing freshness
            straight to your table.
          </p>
        </div>
      </section>

      {/* ---------- rest of homepage ---------- */}
      <AboutSection />
      <ProductsSection />
      <ValueSection />
      <CTASection />
    </>
  );
}
