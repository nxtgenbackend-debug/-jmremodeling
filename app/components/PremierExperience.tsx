"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  MotionConfig,
  useScroll,
  useReducedMotion,
} from "framer-motion";

/* ── Bespoke type + palette, scoped to this page ──────────────────────────
   Fonts arrive as CSS vars from next/font in premier/page.tsx.            */
const cinzel = "var(--font-cinzel), 'Cinzel', Georgia, serif";
const josefin = "var(--font-josefin), 'Josefin Sans', sans-serif";

const GOLD = "#C8A45C";
const CREAM = "#EDE6D8";
const STONE = "#9C9488";
const NEARBLACK = "#0E0D0C";

/* Frosted glass plate behind text — keeps copy legible over the scrubbing video */
const panelClass = "rounded-2xl border backdrop-blur-sm";
const panelStyle: React.CSSProperties = {
  backgroundColor: "rgba(14,13,12,0.58)",
  borderColor: "rgba(200,164,92,0.20)",
  boxShadow: "0 24px 60px -24px rgba(0,0,0,0.65)",
};

type Section = {
  id: string;
  numeral: string;
  label: string;
  headline: string;
  body: string[];
  image: string;
  imageAlt: string;
};

const sections: Section[] = [
  {
    id: "kitchens",
    numeral: "I",
    label: "Kitchens",
    headline: "Kitchen Design",
    body: [
      "For homeowners who want more than a simple remodel, our premier kitchen service offers a sophisticated, fully managed experience. We deliberately limit our concurrent projects to ensure your renovation receives unparalleled daily supervision, tight scheduling, and direct access to exclusive, high-end vendors.",
      "You’ll collaborate with a dedicated specialist to view precise 3D renderings of custom cabinetry and premium stone layouts, ensuring the final result is visually stunning and incredibly practical. We handle every step — from showroom curation to final material delivery — giving you a remarkably smooth, low-stress experience.",
    ],
    image: "/images/premier-weston-kitchen.jpg",
    imageAlt: "Premier art-deco kitchen with custom island and integrated lighting",
  },
  {
    id: "bathrooms",
    numeral: "II",
    label: "Bathrooms",
    headline: "Bathroom Design",
    body: [
      "Elevate your home with a premium bathroom transformation that prioritizes your peace of mind as much as the final aesthetic. By pairing you with a dedicated internal designer, we utilize advanced 3D renderings to eliminate all guesswork, letting you visualize custom vanities, premium stone details, and high-end fixtures perfectly tailored to your space.",
      "We believe that true luxury means never having to worry about the details. Our team manages the entire project pipeline, including showroom scheduling, material sourcing, and vendor logistics, protecting you from the typical friction of home renovation while guaranteeing an efficient, organized process.",
    ],
    image: "/images/premier-sanssouci-bath.jpg",
    imageAlt: "Premier bathroom with freestanding soaking tub and floor-to-ceiling windows",
  },
  {
    id: "design",
    numeral: "III",
    label: "The Process",
    headline: "The Collaborative Design Process",
    body: [
      "Great spaces start with great conversations. Our fully guided, design-driven experience bridges the gap between your initial ideas and flawless execution by making you an active partner in the creative journey. You will work one-on-one with a dedicated designer who listens to your goals and translates them into a cohesive, intentional vision.",
      "Through detailed 3D renderings and curated material palettes, we explore layout iterations together so you can see exactly how your space will look, feel, and function in real life. By investing in this deliberate collaborative phase upfront, every choice feels clear and exciting instead of overwhelming, setting the stage for a seamless build.",
    ],
    image: "/images/premier-weston-living.jpg",
    imageAlt: "Premier open-concept living room with bespoke millwork and designer furnishings",
  },
];

/* Premier gallery — a few marquee spaces, framed like the rest of the page */
const galleryImages: { src: string; alt: string }[] = [
  { src: "/images/premier-sanssouci-front.jpg", alt: "Premier modern estate exterior" },
  { src: "/images/premier-sanssouci-pool.jpg", alt: "Premier estate with pool and outdoor living" },
  { src: "/images/premier-weston-dining.jpg", alt: "Premier dining area with sculptural chandelier" },
  { src: "/images/living-premier.jpg", alt: "Premier interior courtyard atrium" },
];

/* Shared reveal transition for foreground copy */
const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-15% 0px" },
};

function PremierSection({ section, index }: { section: Section; index: number }) {
  const imageLeft = index % 2 === 1;
  return (
    <section
      aria-label={`JM Premier — ${section.label}`}
      className="relative flex min-h-[100dvh] items-center overflow-hidden"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 px-6 sm:px-10 lg:grid-cols-2 lg:gap-14">
        {/* Framed image plate — gold mat to match the page */}
        <motion.div
          {...reveal}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={imageLeft ? "lg:order-1" : "lg:order-2"}
        >
          <div
            className="overflow-hidden rounded-xl border"
            style={{
              borderColor: "rgba(200,164,92,0.35)",
              boxShadow: "0 30px 70px -30px rgba(0,0,0,0.75)",
            }}
          >
            <Image
              src={section.image}
              alt={section.imageAlt}
              width={1040}
              height={694}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>
        </motion.div>

        {/* Text panel — a container so the headline can size to the panel width */}
        <div
          className={`p-8 sm:p-10 lg:p-12 ${panelClass} ${imageLeft ? "lg:order-2" : "lg:order-1"}`}
          style={{ ...panelStyle, containerType: "inline-size" }}
        >
          {/* Numeral + label */}
          <motion.div {...reveal} className="mb-6 flex items-center gap-4">
            <span
              className="text-2xl"
              style={{ fontFamily: cinzel, color: GOLD }}
            >
              {section.numeral}
            </span>
            <span
              className="h-px w-14"
              style={{ backgroundColor: GOLD }}
              aria-hidden="true"
            />
            <span
              className="text-sm uppercase"
              style={{ fontFamily: josefin, color: STONE, letterSpacing: "0.42em" }}
            >
              {section.label}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            {...reveal}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7 normal-case"
            style={{
              fontFamily: cinzel,
              color: CREAM,
              letterSpacing: "0.01em",
              lineHeight: 1.06,
              // Size to the panel, not the viewport, so the longest word
              // ("COLLABORATIVE") always fits inside the box at every width.
              fontSize: "clamp(1.75rem, calc(100cqi / 9.6), 3.75rem)",
            }}
          >
            {section.headline}
          </motion.h2>

          {/* Body — one or more paragraphs */}
          <div className="max-w-xl space-y-5">
            {section.body.map((para, i) => (
              <motion.p
                key={i}
                {...reveal}
                transition={{ duration: 0.7, delay: 0.18 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg leading-relaxed sm:text-xl"
                style={{ fontFamily: josefin, color: CREAM, opacity: 0.86, fontWeight: 300 }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PremierExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReduced = useReducedMotion();

  // Whole-page scroll progress: top of page → 0, bottom of page → 1.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scrub the video with scroll: currentTime tracks scroll progress across the
  // whole clip. Eased in a rAF loop so seeking stays smooth and doesn't pile up.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause(); // manual seeking only — no autoplay

    if (prefersReduced) {
      // Reduced motion: hold a static first frame, no scroll scrubbing.
      const seek0 = () => {
        try {
          video.currentTime = 0;
        } catch {}
      };
      if (video.readyState >= 1) seek0();
      else video.addEventListener("loadedmetadata", seek0, { once: true });
      return;
    }

    let raf = 0;
    let curr = 0;
    const loop = () => {
      const dur = video.duration;
      if (dur && Number.isFinite(dur)) {
        const target = scrollYProgress.get() * dur; // top→0, bottom→dur
        curr += (target - curr) * 0.12; // ease toward target
        if (Math.abs(target - curr) < 0.004) curr = target;
        if (!video.seeking && video.readyState >= 2) {
          video.currentTime = Math.min(Math.max(curr, 0), dur - 0.05);
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [scrollYProgress, prefersReduced]);

  return (
    <MotionConfig reducedMotion="user">
      <div ref={containerRef} className="relative" style={{ backgroundColor: NEARBLACK }}>
        {/* ── Single fixed parallax background video (whole page) ───────── */}
        <div
          className="fixed inset-0 overflow-hidden"
          aria-hidden="true"
          style={{ backgroundColor: NEARBLACK }}
        >
          {/* Scroll-scrubbed clip — currentTime is driven by scroll position */}
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/hero3.mp4"
            muted
            playsInline
            preload="auto"
          />

          {/* Light cinematic tint — glass panels carry the text legibility now */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(14,13,12,0.45) 0%, rgba(14,13,12,0.32) 50%, rgba(14,13,12,0.55) 100%)",
            }}
          />
        </div>

        {/* ── Cohesion: a faint gold "gallery mat" framing the whole page ── */}
        <div
          className="pointer-events-none fixed inset-4 z-30 border sm:inset-6 lg:inset-8"
          aria-hidden="true"
          style={{ borderColor: "rgba(200,164,92,0.22)" }}
        />

        {/* ── Intro title card ─────────────────────────────────────────── */}
        <section
          aria-label="JM Premier"
          className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 text-center"
        >
          {/* faint warm vignette */}
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(120% 90% at 50% 35%, rgba(200,164,92,0.08) 0%, rgba(14,13,12,0) 55%)",
            }}
          />

          <div
            className={`relative z-10 flex flex-col items-center px-4 py-10 sm:px-14 sm:py-14 ${panelClass}`}
            style={panelStyle}
          >
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="mb-7 text-xs uppercase sm:text-sm"
              style={{ fontFamily: josefin, color: STONE, letterSpacing: "0.5em" }}
            >
              JM Remodeling &amp; Construction
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl normal-case sm:text-8xl lg:text-9xl"
              style={{ fontFamily: cinzel, color: CREAM, letterSpacing: "0.08em" }}
            >
              Premier
            </motion.h1>

            <motion.span
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="my-8 block h-px w-24 origin-center"
              style={{ backgroundColor: GOLD }}
              aria-hidden="true"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.65, ease: "easeOut" }}
              className="max-w-md text-lg sm:text-xl"
              style={{ fontFamily: josefin, color: CREAM, opacity: 0.82, fontWeight: 300 }}
            >
              A bespoke division for interiors built once — and built without compromise.
            </motion.p>
          </div>

          {/* Scroll cue (non-interactive) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="absolute bottom-10 flex flex-col items-center gap-3"
            aria-hidden="true"
          >
            <span
              className="text-[0.65rem] uppercase"
              style={{ fontFamily: josefin, color: STONE, letterSpacing: "0.4em" }}
            >
              Scroll
            </span>
            <motion.span
              className="block w-px"
              style={{ backgroundColor: GOLD, height: 48 }}
              initial={{ scaleY: 0.3, originY: 0 }}
              animate={{ scaleY: [0.3, 1, 0.3] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </section>

        {/* ── Three immersive sections ─────────────────────────────────── */}
        {sections.map((section, i) => (
          <PremierSection key={section.id} section={section} index={i} />
        ))}

        {/* ── Selected work — a framed gallery of marquee spaces ────────── */}
        <section
          aria-label="JM Premier — Selected Work"
          className="relative z-10 flex min-h-[100dvh] items-center overflow-hidden px-6 py-24 sm:px-10"
        >
          <div className="mx-auto w-full max-w-6xl">
            <motion.div {...reveal} className="mb-10 flex items-center gap-4">
              <span className="h-px w-14" style={{ backgroundColor: GOLD }} aria-hidden="true" />
              <span
                className="text-sm uppercase"
                style={{ fontFamily: josefin, color: STONE, letterSpacing: "0.42em" }}
              >
                Selected Work
              </span>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2">
              {galleryImages.map((img, i) => (
                <motion.div
                  key={img.src}
                  {...reveal}
                  transition={{ duration: 0.8, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden rounded-xl border"
                  style={{
                    borderColor: "rgba(200,164,92,0.30)",
                    boxShadow: "0 30px 70px -30px rgba(0,0,0,0.75)",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={1040}
                    height={694}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 640px) 100vw, 45vw"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Closing — single Contact Us action ───────────────────────── */}
        <section
          aria-label="Contact JM Premier"
          className="relative z-10 flex min-h-[80dvh] flex-col items-center justify-center overflow-hidden px-6 text-center"
        >
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(120% 90% at 50% 50%, rgba(200,164,92,0.07) 0%, rgba(14,13,12,0) 60%)",
            }}
          />

          <div
            className={`relative z-10 flex flex-col items-center px-4 py-12 sm:px-16 sm:py-16 ${panelClass}`}
            style={panelStyle}
          >
            {/* Closes the numeral rhythm: I · II · III · IV */}
            <motion.div {...reveal} className="mb-7 flex items-center gap-4">
              <span className="text-2xl" style={{ fontFamily: cinzel, color: GOLD }}>
                IV
              </span>
              <span
                className="h-px w-14"
                style={{ backgroundColor: GOLD }}
                aria-hidden="true"
              />
              <span
                className="text-sm uppercase"
                style={{ fontFamily: josefin, color: STONE, letterSpacing: "0.42em" }}
              >
                Appointments
              </span>
            </motion.div>

            <motion.h2
              {...reveal}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 text-4xl normal-case sm:text-6xl"
              style={{ fontFamily: cinzel, color: CREAM, letterSpacing: "0.02em", lineHeight: 1.08 }}
            >
              Begin the conversation
            </motion.h2>

            <motion.p
              {...reveal}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12 max-w-md text-lg"
              style={{ fontFamily: josefin, color: CREAM, opacity: 0.78, fontWeight: 300 }}
            >
              Premier commissions are taken by appointment. Tell us about the space, and we will take it from there.
            </motion.p>

            <motion.div {...reveal} transition={{ duration: 0.7, delay: 0.22 }}>
              <Link
                href="/contact"
                className="group inline-flex min-h-[56px] items-center gap-3 border px-12 py-4 text-sm uppercase transition-colors duration-300 hover:bg-[#C8A45C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E0D0C]"
                style={{
                  fontFamily: josefin,
                  letterSpacing: "0.28em",
                  color: CREAM,
                  borderColor: GOLD,
                }}
              >
                <span className="transition-colors duration-300 group-hover:text-[#0E0D0C]">
                  Contact Us
                </span>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </MotionConfig>
  );
}
