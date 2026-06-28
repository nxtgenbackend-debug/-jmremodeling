"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import Link from "next/link";

const trustBadges = [
  { icon: "★★★★★", label: "Google Reviews" },
  { icon: "25+", label: "Years Experience" },
  { icon: "500+", label: "Projects Completed" },
  { icon: "✓", label: "Licensed & Insured" },
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background — Replace this div with next/image using fill + object-cover */}
      {/* <Image src="/hero-bg.jpg" alt="" fill className="object-cover object-center" priority /> */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0a1628 0%, #1a2a4a 40%, #0d1f3c 70%, #111827 100%)",
        }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4"
        >
          Wisconsin&apos;s Premier Contractor
        </motion.p>

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black uppercase text-white mb-6 max-w-4xl mx-auto leading-tight"
          style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
        >
          Residential &amp; Commercial Remodelers You Can Trust
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10"
        >
          From kitchens and bathrooms to full commercial buildouts — JM delivers on time, on budget, and built to last.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button href="/contact" variant="primary" size="lg">
            Request a Free Estimate
          </Button>
          <Button href="/projects" variant="outline-white" size="lg">
            View Our Work
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6"
          aria-label="Trust indicators"
        >
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-white">
              <span className="text-primary font-bold">{badge.icon}</span>
              <span className="text-sm font-medium text-gray-200">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
