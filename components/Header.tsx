"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import useScrollSpy from "./useScrollSpy";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Contact Us", href: "#contact" },
];

const sectionIds = navLinks.map((link) => link.href.slice(1));

function NavLink({
  link,
  active,
  onNavigate,
  mobile = false,
}: {
  link: { label: string; href: string };
  active: string;
  onNavigate?: () => void;
  mobile?: boolean;
}) {
  const isActive = active === link.href.slice(1);
  const base = "text-sm font-medium transition-colors hover:bg-sky-bg hover:text-navy";
  const layout = mobile
    ? "block rounded-md px-3 py-2.5"
    : "rounded-md px-3 py-2";
  return (
    <a
      href={link.href}
      onClick={onNavigate}
      aria-current={isActive ? "true" : undefined}
      className={`${base} ${layout} ${isActive ? "bg-sky-bg text-navy" : "text-gray-700"}`}
    >
      {link.label}
    </a>
  );
}

function MobileMenu({
  active,
  onNavigate,
}: {
  active: string;
  onNavigate: () => void;
}) {
  return (
    <nav
      id="mobile-menu"
      className="border-t border-soft-border bg-white px-4 pb-4 lg:hidden"
      aria-label="Mobile navigation"
    >
      {navLinks.map((link) => (
        <NavLink key={link.href} link={link} active={active} onNavigate={onNavigate} mobile />
      ))}
    </nav>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useScrollSpy(sectionIds);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileOpen, closeMobile]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <Logo />
          <div>
            <span className="text-lg font-bold text-navy leading-tight block">
              Financial Advisory
            </span>
            <span className="text-xs text-gray-500 leading-tight block">
              Plan Today, Prosper Tomorrow
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink key={link.href} link={link} active={active} />
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && <MobileMenu active={active} onNavigate={closeMobile} />}
    </header>
  );
}
