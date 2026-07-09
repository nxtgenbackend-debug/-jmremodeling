"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const serviceLinks = [
  { label: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
  { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
  { label: "Basement Finishing", href: "/services/basement-finishing" },
  { label: "Roofing & Siding", href: "/services/roofing-siding" },
  { label: "Additions & Framing", href: "/services/additions-framing" },
];

const commercialLinks = [
  { label: "Commercial Gallery", href: "/commercial" },
  { label: "Commercial Buildouts", href: "/services/commercial-buildouts" },
];

const navLinks = [
  { label: "Services", href: "/services", dropdown: serviceLinks },
  { label: "Projects", href: "/projects" },
  { label: "Commercial", href: "/commercial", dropdown: commercialLinks },
  { label: "Premier", href: "/premier" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0"
          aria-label="JM Remodeling & Construction, LLC — Home"
        >
          <Image
            src="/images/logo.webp"
            alt="JM Remodeling & Construction, LLC"
            width={140}
            height={60}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-6" role="list">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-bold uppercase tracking-wide text-gray-heading hover:text-primary transition-colors py-2"
                >
                  {link.label}
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </Link>
                {/* Dropdown */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-border p-2 w-64">
                    {link.dropdown.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2.5 text-sm font-semibold text-gray-heading rounded-lg hover:bg-gray-bg hover:text-primary transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-bold uppercase tracking-wide text-gray-heading hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Button href="/contact" variant="primary" size="md" className="hidden md:inline-flex">
            Free Estimate
          </Button>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden p-2 rounded text-gray-heading hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-border shadow-lg">
          <ul className="flex flex-col py-4" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-6 py-3 text-sm font-bold uppercase tracking-wide text-gray-heading hover:text-primary hover:bg-gray-bg transition-colors"
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <ul role="list">
                    {link.dropdown.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          onClick={() => setMobileOpen(false)}
                          className="block pl-10 pr-6 py-2.5 text-sm font-semibold text-gray-body hover:text-primary hover:bg-gray-bg transition-colors"
                        >
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="px-6 pt-3 pb-2">
              <Button href="/contact" variant="primary" size="md" className="w-full">
                Free Estimate
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
