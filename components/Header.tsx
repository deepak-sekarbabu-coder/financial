"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [closeMobile]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="40" height="40" rx="8" fill="#06244d" />
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
            <span className="text-lg font-bold text-navy leading-tight block">
              Financial Advisory
            </span>
            <span className="text-xs text-gray-500 leading-tight block">
              Plan Today, Prosper Tomorrow
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-sky-bg hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#consultation"
          className="hidden rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light lg:inline-block"
        >
          Book a Consultation
        </a>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-soft-border bg-white px-4 pb-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-sky-bg hover:text-navy"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#consultation"
            onClick={closeMobile}
            className="mt-2 block rounded-lg bg-navy px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-navy-light"
          >
            Book a Consultation
          </a>
        </nav>
      )}
    </header>
  );
}
