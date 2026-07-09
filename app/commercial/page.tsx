"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AnimateOnScroll from "../components/AnimateOnScroll";
import Button from "../components/Button";

const projects = [
  { title: "2001 W Michigan St", location: "Milwaukee, WI", imageSrc: "/images/commercial/2001-w-michigan-st.jpg" },
  { title: "4340 W Loomis Road", location: "Greenfield, WI", imageSrc: "/images/commercial/loomis-road.jpg" },
  { title: "900 E Henry Clay St", location: "Whitefish Bay, WI", imageSrc: "/images/commercial/900-e-henry-clay.jpg" },
  { title: "2107 Washington St", location: "Milwaukee, WI", imageSrc: "/images/commercial/2107-washington-st.jpg" },
  { title: "3201 S 51st St", location: "Milwaukee, WI", imageSrc: "/images/commercial/3201-s-51st-st.jpg" },
  { title: "3575 N Oakland Ave", location: "Milwaukee, WI", imageSrc: "/images/commercial/3575-n-oakland-ave.jpg" },
  { title: "6815 W Capitol Dr", location: "Milwaukee, WI", imageSrc: "/images/commercial/6815-w-capitol-dr.jpg" },
  { title: "7411 W Hampton Ave", location: "Milwaukee, WI", imageSrc: "/images/commercial/7411-w-hampton-ave.jpg" },
  { title: "2340 N Newhall St", location: "Milwaukee, WI", imageSrc: "/images/commercial/2340-n-newhall-st.jpg" },
  { title: "Prospect Avenue", location: "Milwaukee, WI", imageSrc: "/images/commercial/prospect-avenue.jpg" },
  { title: "Riverfront Condos", location: "Milwaukee, WI", imageSrc: "/images/commercial/riverfront-condos.jpg" },
  { title: "River Park Apartments", location: "Milwaukee, WI", imageSrc: "/images/commercial/river-park-apartments.jpg" },
  { title: "1616 W Bender Road", location: "Glendale, WI", imageSrc: "/images/commercial/1616-w-bender-road.jpg" },
  { title: "Commercial Roof", location: "Milwaukee, WI", imageSrc: "/images/commercial/commercial-roof.jpg" },
];

type Project = typeof projects[0];

export default function CommercialGalleryPage() {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      const idx = projects.findIndex((p) => p === selected);
      if (e.key === "Escape") setSelected(null);
      else if (e.key === "ArrowLeft") setSelected(projects[(idx - 1 + projects.length) % projects.length]);
      else if (e.key === "ArrowRight") setSelected(projects[(idx + 1) % projects.length]);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <>
      {/* Header */}
      <section className="bg-gray-heading py-16 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-black uppercase text-white mb-4">
          Commercial Gallery
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Offices, apartments, roofing, and restoration across the Greater Milwaukee area.
          Browse a selection of our completed commercial projects.
        </p>
      </section>

      {/* Grid */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <AnimateOnScroll key={project.title} delay={i * 0.05}>
                <article
                  className="group relative aspect-video rounded-lg overflow-hidden cursor-pointer"
                  tabIndex={0}
                  aria-label={`${project.title} — commercial project in ${project.location}`}
                  onClick={() => setSelected(project)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSelected(project); } }}
                >
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex flex-col items-start justify-end p-5 opacity-0 group-hover:opacity-100 group-focus:opacity-100">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Commercial</span>
                    <h3 className="text-white font-black text-xl uppercase">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.location}</p>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Quality */}
      <section className="py-16 px-4 bg-gray-bg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black uppercase text-gray-heading mb-5">
            Our Commitment to Quality
          </h2>
          <p className="text-gray-body leading-relaxed mb-8">
            Every commercial project is delivered by our in-house team of journeymen
            carpenters, plumbers, electricians, restoration specialists, roofers, siders,
            sheet metal workers, and expert estimators. Self-performing our trades means
            tighter coordination, fewer subcontractors, and a single general contractor
            accountable for the quality of every phase.
          </p>
          <Button href="/services/commercial-buildouts" variant="outline-blue" size="lg">
            Explore Commercial Buildout Services
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black uppercase text-gray-heading mb-4">
            Ready to Start Your Commercial Project?
          </h2>
          <p className="text-gray-body mb-8">
            Get a free, no-obligation estimate — we respond within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Request a Commercial Estimate
            </Button>
            <Button href="tel:+14143542800" variant="outline-blue" size="lg">
              Call Now: (414) 354-2800
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center gap-4 p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} fullscreen view`}
        >
          <button
            className="text-4xl text-white bg-black/40 hover:bg-black/70 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 transition-colors"
            onClick={(e) => { e.stopPropagation(); const idx = projects.findIndex(p => p === selected); setSelected(projects[(idx - 1 + projects.length) % projects.length]); }}
            aria-label="Previous photo"
          >‹</button>
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video">
              <Image
                src={selected.imageSrc}
                alt={selected.title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <div className="bg-black/60 px-5 py-3">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1 block">Commercial</span>
              <h3 className="text-white font-black text-xl uppercase">{selected.title}</h3>
              <p className="text-gray-300 text-sm">{selected.location}</p>
            </div>
            <button
              className="absolute top-3 right-3 text-white bg-black/50 hover:bg-black/80 rounded-full w-9 h-9 flex items-center justify-center transition-colors"
              onClick={() => setSelected(null)}
              aria-label="Close lightbox"
            >
              ✕
            </button>
          </div>
          <button
            className="text-4xl text-white bg-black/40 hover:bg-black/70 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 transition-colors"
            onClick={(e) => { e.stopPropagation(); const idx = projects.findIndex(p => p === selected); setSelected(projects[(idx + 1) % projects.length]); }}
            aria-label="Next photo"
          >›</button>
        </div>
      )}
    </>
  );
}
