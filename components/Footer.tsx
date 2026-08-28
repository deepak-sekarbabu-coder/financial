import { Phone, Mail, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import Logo from "./Logo";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Contact Us", href: "#contact" },
];

const services = [
  "Life Insurance",
  "Health Insurance",
  "Investments",
  "Child Education",
  "Retirement Planning",
  "Tax Planning",
  "Income Tax Filing",
];

const contactRows = [
  { icon: Phone, value: "+91 9445729901", href: undefined },
  {
    icon: null,
    value: "+91 9445005707",
    href: "https://wa.me/919445005707",
    isWhatsApp: true,
  },
  { icon: Mail, value: "babujs2008@gmail.com", href: undefined },
  { icon: MapPin, value: "Chennai, Tamil Nadu, India", href: undefined },
];

function FooterBrand() {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <Logo size={36} bg="#0b4a91" />
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
    </div>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
        {title}
      </h3>
      {children}
    </div>
  );
}

function FooterQuickLinks() {
  return (
    <FooterColumn title="Quick Links">
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
    </FooterColumn>
  );
}

function FooterServices() {
  return (
    <FooterColumn title="Our Services">
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
    </FooterColumn>
  );
}

function FooterContact() {
  return (
    <FooterColumn title="Contact Us">
      <ul className="space-y-3">
        {contactRows.map((row) => {
          if (row.isWhatsApp) {
            return (
              <li key={row.value} className="flex items-start gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#25D366"
                  className="mt-0.5 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <a
                  href={row.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-[#25D366] transition-colors"
                >
                  {row.value}
                </a>
              </li>
            );
          }
          const Icon = row.icon;
          return (
            <li key={row.value} className="flex items-start gap-3">
              {Icon && (
                <Icon size={16} className="mt-0.5 shrink-0 text-leaf" aria-hidden="true" />
              )}
              <span className="text-sm text-gray-400">{row.value}</span>
            </li>
          );
        })}
      </ul>
    </FooterColumn>
  );
}

function FooterBottom() {
  return (
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
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          <FooterBrand />
          <FooterQuickLinks />
          <FooterServices />
          <FooterContact />
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
}
