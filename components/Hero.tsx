import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative bg-sky-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 py-12 sm:gap-10 md:grid-cols-2 md:py-16 lg:py-20">
          {/* Copy */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-leaf">
              Smart Planning. Secure Future.
            </p>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-navy sm:text-4xl md:text-5xl lg:text-[3.4rem]">
              Your Goals. <br />
              Our Financial Expertise.
            </h1>
            <p className="mb-8 max-w-lg text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
              We help you plan, protect and grow your wealth with customized
              financial solutions for you and your family.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden md:block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/Home.webp"
                alt="Illustration for financial planning and advisory"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
