import Image from "next/image";
import { ShieldCheck, TrendingUp, PiggyBank } from "lucide-react";
import HighlightCard from "./HighlightCard";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Life Protection",
    description:
      "Secure your family's future with the right life insurance cover.",
  },
  {
    icon: TrendingUp,
    title: "Wealth Growth",
    description:
      "Investments built to help your money grow steadily over time.",
  },
  {
    icon: PiggyBank,
    title: "Saving for Goals",
    description:
      "Plan for milestones like retirement and your child's education.",
  },
];

export default function LifeInvestment() {
  return (
    <section id="life-investment" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-leaf">
          Products
        </p>
        <h2 className="mb-10 text-center text-3xl font-bold text-navy sm:text-4xl">
          Life &amp; Investment Products
        </h2>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Image */}
          <div className="relative order-2 overflow-hidden rounded-2xl shadow-xl lg:order-1">
            <div className="relative aspect-[4/3]">
              <Image
                src="/Life & Investment.png"
                alt="Life and investment products"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 space-y-6 lg:order-2">
            <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
              Grow your wealth while protecting the ones you love. From life
              insurance to investment and savings plans, I help you build a
              secure and prosperous future for you and your family.
            </p>
            {highlights.map((item) => (
              <HighlightCard
                key={item.title}
                icon={item.icon}
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
