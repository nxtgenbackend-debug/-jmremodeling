"use client";

import { motion, MotionConfig } from "framer-motion";
import Button from "./Button";
import QuoteForm from "./QuoteForm";

const headingFont = { fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" };

export default function HeroSection() {
  return (
    // reducedMotion="user" → child motion entrances skip movement for users who ask for less motion
    <MotionConfig reducedMotion="user">
    <section
      className="relative flex items-center overflow-hidden py-16 md:py-24 lg:min-h-[88vh]"
      aria-labelledby="hero-heading"
    >
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-bg.webp"
        aria-hidden="true"
      />

      {/* Ink gradient overlay — darker on the left for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(26,35,126,0.96) 0%, rgba(26,35,126,0.90) 40%, rgba(13,71,161,0.70) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left: messaging */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                Serving Greater Milwaukee Since 1998
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 max-w-3xl"
              style={headingFont}
            >
              Remodelers Wisconsin Homeowners Trust
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-lg md:text-xl text-blue-100/90 max-w-xl mb-8 leading-relaxed"
            >
              Kitchens, bathrooms, basements, and full commercial buildouts — delivered on
              time, on budget, and backed by a 5-year workmanship warranty.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="/projects" variant="primary" size="lg">
                View Our Work
              </Button>
              <a
                href="tel:+14143542800"
                className="inline-flex items-center justify-center gap-2 font-bold uppercase tracking-[0.08em] bg-transparent text-white border-2 border-white/80 hover:bg-white hover:text-ink transition-all px-8 py-4 text-base rounded-lg"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                (414) 354-2800
              </a>
            </motion.div>
          </div>

          {/* Right: quote form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <QuoteForm />
          </motion.div>
        </div>
      </div>
    </section>
    </MotionConfig>
  );
}
