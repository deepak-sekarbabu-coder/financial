import {
  GraduationCap,
  Briefcase,
  ShieldCheck,
  HeartPulse,
  Award,
} from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "Triple Postgraduate Degrees",
    description:
      "Postgraduate qualifications in Finance, Public Administration and Human Resource Management.",
  },
  {
    icon: Briefcase,
    title: "3+ Decades of Service",
    description:
      "Extensive hands-on experience in a major Public Sector Undertaking (ONGC).",
  },
  {
    icon: Award,
    title: "Internal Audit & ISO",
    description:
      "Worked in Internal Audit and HR, with exposure to Field Party Operations and ISO cross audits.",
  },
  {
    icon: ShieldCheck,
    title: "Kotak Life Insurance",
    description: "Registered Life Advisor dedicated to securing your future.",
  },
  {
    icon: HeartPulse,
    title: "Star Health Insurance",
    description:
      "Composite Agent (Health Insurance) helping families stay protected.",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-leaf">
          About Me
        </p>
        <h2 className="mb-8 text-3xl font-bold text-navy sm:text-4xl">
          Experience You Can Trust, <br className="hidden sm:block" />
          Service You Deserve
        </h2>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Story */}
          <div className="space-y-5">
            <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
              Founded on a lifelong commitment to serving others, my practice is
              built on three-plus decades of experience across the public
              sector. Having held key roles in Internal Audit, Human Resources
              and Field Party Operations within a major Public Sector
              Undertaking, I bring a rare blend of discipline, integrity and
              operational insight to every financial decision I help you make.
            </p>
            <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
              Today, I carry that same dedication into financial advisory as a
              Life Advisor for Kotak Life Insurance and a Composite Agent for
              Star Health Insurance — always with one goal in mind: to give the
              best possible service to those who need it most.
            </p>

            <div className="rounded-xl border-l-4 border-leaf bg-sky-bg p-5">
              <p className="text-sm font-medium italic text-navy sm:text-base">
                &ldquo;Every client, every plan and every goal is treated with
                the same care, honesty and professional integrity that has
                guided me across more than three decades.&rdquo;
              </p>
            </div>
          </div>

          {/* Credentials */}
          <div className="space-y-4">
            {credentials.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-xl border border-soft-border bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-royal/10">
                    <Icon size={24} className="text-royal" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-bold text-navy">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
