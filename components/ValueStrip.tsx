import { Target, Shield, TrendingUp, HeartHandshake } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";

const promises = [
  {
    icon: Target,
    title: "Goal Based Planning",
    description: "Personalized strategies aligned with your goals",
  },
  {
    icon: Shield,
    title: "Protect What Matters",
    description: "Secure your family and future",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Wealth",
    description: "Smart investments for long term growth",
  },
  {
    icon: HeartHandshake,
    title: "Trust & Transparency",
    description: "Honest advice, lifelong relationship",
  },
];

export default function ValueStrip() {
  return (
    <section className="relative z-10 -mt-8 sm:-mt-12 lg:-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-navy p-6 shadow-2xl sm:p-8 md:p-9 lg:p-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:gap-x-10 md:gap-y-8 lg:grid-cols-4 lg:gap-6">
            {promises.map((item, i) => {
              const Icon = item.icon;
              return (
                <RevealOnScroll key={item.title} delay={i * 80}>
                <div
                  className="flex items-start gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Icon size={24} className="text-leaf" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white sm:text-[0.9rem]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-gray-300 sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
                </RevealOnScroll>
            );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
