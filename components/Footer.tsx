import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
];

const services = [
  "Life Insurance",
  "Health Insurance",
  "Investments",
  "Child Education",
  "Retirement Planning",
  "Tax Planning",
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <svg
                width="36"
                height="36"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="40" height="40" rx="8" fill="#0b4a91" />
                <path
                  d="M12 28V16l8-6 8 6v12"
                  stroke="#2f8b3b"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 28v-6h8v6"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="20" cy="16" r="2" fill="#ffffff" />
              </svg>
              <div>
                <span className="text-base font-bold leading-tight block">
                  Financial Advisory
                </span>
                <span className="text-xs text-gray-400 leading-tight block">
                  Plan Today, Prosper Tomorrow
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              We are committed to helping you achieve financial security and
              long-term prosperity.
            </p>
            <div className="mt-4 flex gap-3">
              {["Facebook", "LinkedIn", "WhatsApp", "YouTube"].map((name) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white transition-colors hover:bg-white/20"
                >
                  {name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-leaf" aria-hidden="true" />
                <span className="text-sm text-gray-400">+91 94450 05707</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-leaf" aria-hidden="true" />
                <span className="text-sm text-gray-400">
                  babujs2008@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-leaf" aria-hidden="true" />
                <span className="text-sm text-gray-400">
                  Chennai, Tamil Nadu, India
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500">
            &copy; 2026 Financial Advisory Services. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span aria-hidden="true">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
