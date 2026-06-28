"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Financing", href: "/financing" },
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
          className="flex items-center gap-2 shrink-0"
          aria-label="JM General Contractors — Home"
        >
          <span
            className="text-3xl font-black text-primary leading-none"
            style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
          >
            JM
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span
              className="text-xs font-bold uppercase tracking-widest text-gray-heading"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
            >
              General
            </span>
            <span
              className="text-xs font-bold uppercase tracking-widest text-gray-heading"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
            >
              Contractors
            </span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-6" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-bold uppercase tracking-wide text-gray-heading hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
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
