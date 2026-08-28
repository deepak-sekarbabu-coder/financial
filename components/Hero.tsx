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
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-royal/10 to-leaf/10 flex items-center justify-center">
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {/* Sky */}
                  <rect width="400" height="300" fill="#eef6fc" />
                  {/* Hills */}
                  <ellipse cx="200" cy="320" rx="280" ry="100" fill="#2f8b3b" opacity="0.3" />
                  <ellipse cx="100" cy="340" rx="200" ry="80" fill="#2f8b3b" opacity="0.2" />
                  {/* Family silhouette */}
                  <g transform="translate(140, 100)">
                    {/* Adult 1 */}
                    <rect x="20" y="40" width="30" height="80" rx="4" fill="#06244d" />
                    <circle cx="35" cy="25" r="14" fill="#06244d" />
                    {/* Adult 2 */}
                    <rect x="60" y="45" width="28" height="75" rx="4" fill="#0b4a91" />
                    <circle cx="74" cy="30" r="13" fill="#0b4a91" />
                    {/* Child */}
                    <rect x="100" y="60" width="22" height="60" rx="3" fill="#2f8b3b" />
                    <circle cx="111" cy="50" r="10" fill="#2f8b3b" />
                  </g>
                  {/* House */}
                  <g transform="translate(280, 130)">
                    <rect x="0" y="20" width="60" height="50" rx="2" fill="#06244d" opacity="0.8" />
                    <polygon points="30,-5 -5,20 65,20" fill="#0b4a91" />
                    <rect x="20" y="40" width="20" height="30" rx="1" fill="#eef6fc" opacity="0.6" />
                  </g>
                  {/* Tree */}
                  <circle cx="100" cy="170" r="25" fill="#2f8b3b" opacity="0.6" />
                  <rect x="96" y="190" width="8" height="30" fill="#06244d" opacity="0.4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
