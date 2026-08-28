import type { ComponentType } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

type IconType = ComponentType<{ size?: number | string; className?: string }>;

interface ContactListItem {
  icon: IconType;
  label: string;
  value: string;
  href?: string;
}

const contactDetails: ContactListItem[] = [
  { icon: Phone, label: "Phone", value: "+91 9445729901" },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 9445005707",
    href: "https://wa.me/919445005707",
  },
  {
    icon: Mail,
    label: "Email",
    value: "babujs2008@gmail.com",
    href: "mailto:babujs2008@gmail.com",
  },
  { icon: MapPin, label: "Location", value: "Chennai, Tamil Nadu, India" },
];

function ContactCard({ item }: { item: ContactListItem }) {
  const Icon = item.icon;
  const content = (
    <div className="flex items-center gap-4 rounded-xl border border-soft-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy">
        <Icon size={22} className="text-leaf" aria-hidden="true" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          {item.label}
        </p>
        <p className="text-sm font-medium text-navy">{item.value}</p>
      </div>
    </div>
  );

  if (!item.href) return content;

  const external = item.href.startsWith("http");
  return (
    <a
      href={item.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block rounded-xl"
    >
      {content}
    </a>
  );
}

function ContactDetails() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <p className="text-center text-base leading-relaxed text-gray-700 sm:text-lg">
        Have a question or want to plan your finances? Reach out and I&apos;ll
        be glad to help — whether it&apos;s protection, savings or a
        personalised plan for your goals.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {contactDetails.map((item) => (
          <ContactCard key={item.label} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="bg-sky-bg py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-leaf">
          Contact Us
        </p>
        <h2 className="mb-12 text-center text-3xl font-bold text-navy sm:text-4xl">
          Let&apos;s Get in Touch
        </h2>

        <ContactDetails />
      </div>
    </section>
  );
}
