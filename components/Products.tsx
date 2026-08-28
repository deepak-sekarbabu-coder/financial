import Image from "next/image";
import { ShieldCheck, Sparkles } from "lucide-react";
import HighlightCard from "./HighlightCard";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Trusted Health Coverage",
    description:
      "Quality health products designed to keep you and your family protected.",
  },
  {
    icon: Sparkles,
    title: "Simple & Accessible",
    description:
      "Easy-to-understand plans and a straightforward path to coverage.",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-sky-bg py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-leaf">
          Our Range
        </p>
        <h2 className="mb-10 text-center text-3xl font-bold text-navy sm:text-4xl">
          Health Products
        </h2>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <div className="relative aspect-[4/3]">
              <Image
                src="/Health Products.jpg"
                alt="Range of health insurance products"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
              Explore a range of reliable health products tailored to your
              needs and budget. Whether it&apos;s safeguarding yourself or
              planning for your family&apos;s well-being, I&apos;m here to help
              you find the right fit.
            </p>
            {highlights.map((item) => (
              <HighlightCard
                key={item.title}
                icon={item.icon}
                iconBg="bg-leaf/10"
                iconColor="text-leaf"
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
