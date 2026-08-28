import {
  HeartPulse,
  Stethoscope,
  PiggyBank,
  GraduationCap,
  Landmark,
  Receipt,
} from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";

const solutions = [
  {
    icon: HeartPulse,
    title: "Life Insurance",
    description:
      "Protect your family's future with the right life cover.",
    color: "text-royal",
    bg: "bg-royal/10",
  },
  {
    icon: Stethoscope,
    title: "Health Insurance",
    description:
      "Quality healthcare without financial worries.",
    color: "text-leaf",
    bg: "bg-leaf/10",
  },
  {
    icon: PiggyBank,
    title: "Investments",
    description:
      "Grow your wealth with mutual funds, ULIPs and more.",
    color: "text-royal",
    bg: "bg-royal/10",
  },
  {
    icon: GraduationCap,
    title: "Child Education",
    description:
      "Plan your child's education with confidence.",
    color: "text-leaf",
    bg: "bg-leaf/10",
  },
  {
    icon: Landmark,
    title: "Retirement Planning",
    description:
      "Build a corpus for a comfortable and independent retirement.",
    color: "text-royal",
    bg: "bg-royal/10",
  },
  {
    icon: Receipt,
    title: "Tax Planning",
    description:
      "Save more with smart tax planning strategies.",
    color: "text-leaf",
    bg: "bg-leaf/10",
  },
];

export default function SolutionsGrid() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-leaf">
          What We Offer
        </p>
        <h2 className="mb-10 text-center text-2xl font-bold text-navy sm:text-3xl md:text-4xl sm:mb-12">
          Comprehensive Financial Solutions
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:gap-7 lg:grid-cols-3">
          {solutions.map((item, i) => {
            const Icon = item.icon;
            return (
              <RevealOnScroll key={item.title} delay={i * 80}>
              <article
                className="group rounded-xl border border-soft-border bg-white p-5 transition-shadow hover:shadow-lg sm:p-6"
              >
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full ${item.bg}`}
                >
                  <Icon size={28} className={item.color} aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>

              </article>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
