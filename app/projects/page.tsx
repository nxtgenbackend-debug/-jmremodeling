"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AnimateOnScroll from "../components/AnimateOnScroll";
import Button from "../components/Button";

type Category = "All" | "Kitchens" | "Bathrooms" | "Basements" | "Commercial" | "Additions";

// Photos are real JM projects; titles describe the space and locations use the
// project's real street/municipality where known (else "Greater Milwaukee, WI").
const projects = [
  // Kitchens
  { title: "White Marble Kitchen", category: "Kitchens", imageSrc: "/images/kitchen-luxury.jpg", location: "Greater Milwaukee, WI" },
  { title: "Art-Deco Designer Kitchen", category: "Kitchens", imageSrc: "/images/kitchen-premier.jpg", location: "Premier Collection" },
  { title: "Classic White Kitchen", category: "Kitchens", imageSrc: "/images/kitchen-white.jpg", location: "Greater Milwaukee, WI" },
  { title: "Open Kitchen & Great Room", category: "Kitchens", imageSrc: "/images/project-kitchen-fairychasm.jpg", location: "Bayside, WI" },
  { title: "Chef's Kitchen with Custom Hood", category: "Kitchens", imageSrc: "/images/cat-kitchen.jpg", location: "Whitefish Bay, WI" },
  { title: "Bright White Kitchen Remodel", category: "Kitchens", imageSrc: "/images/project-kitchen-wisconsin.jpg", location: "Milwaukee, WI" },
  // Bathrooms
  { title: "Spa Master Bath", category: "Bathrooms", imageSrc: "/images/bathroom-nice-1.jpg", location: "Greater Milwaukee, WI" },
  { title: "Marble Shower Suite", category: "Bathrooms", imageSrc: "/images/bathroom-marble.jpg", location: "Greater Milwaukee, WI" },
  { title: "Barn-Door Bath Renovation", category: "Bathrooms", imageSrc: "/images/bathroom-barndoor.jpg", location: "Greater Milwaukee, WI" },
  { title: "Walk-In Shower & Custom Tile", category: "Bathrooms", imageSrc: "/images/bathroom-shower.jpg", location: "Greater Milwaukee, WI" },
  { title: "Freestanding-Tub Master Bath", category: "Bathrooms", imageSrc: "/images/project-bath-deercreek.jpg", location: "Greater Milwaukee, WI" },
  { title: "Glass Shower & Vanity Remodel", category: "Bathrooms", imageSrc: "/images/project-bath-herman.jpg", location: "Milwaukee, WI" },
  // Basements
  { title: "Basement Built-In & Fireplace", category: "Basements", imageSrc: "/images/basement-fireplace.jpg", location: "Greater Milwaukee, WI" },
  { title: "Basement Wet Bar", category: "Basements", imageSrc: "/images/basement-wetbar.jpg", location: "Greater Milwaukee, WI" },
  { title: "Lower-Level Lounge", category: "Basements", imageSrc: "/images/basement-fireplace-tall.jpg", location: "Greater Milwaukee, WI" },
  { title: "Basement Family Lounge", category: "Basements", imageSrc: "/images/project-basement-lounge.jpg", location: "Whitefish Bay, WI" },
  { title: "Basement Home Gym", category: "Basements", imageSrc: "/images/project-basement-gym.jpg", location: "Greater Milwaukee, WI" },
  { title: "Finished Basement & Bar", category: "Basements", imageSrc: "/images/project-basement-regent.jpg", location: "Greater Milwaukee, WI" },
  // Additions / Exteriors
  { title: "Open-Concept Living Room", category: "Additions", imageSrc: "/images/living-openconcept.jpg", location: "Greater Milwaukee, WI" },
  { title: "Living Room Addition", category: "Additions", imageSrc: "/images/cat-addition.jpg", location: "Greater Milwaukee, WI" },
  { title: "Vaulted Wood-Ceiling Loft", category: "Additions", imageSrc: "/images/project-loft-hawthorne.jpg", location: "Greater Milwaukee, WI" },
  { title: "Custom Home Exterior", category: "Additions", imageSrc: "/images/project-exterior-carriage.jpg", location: "Greater Milwaukee, WI" },
  { title: "Colonial Exterior Renovation", category: "Additions", imageSrc: "/images/exterior-colonial.jpg", location: "Greater Milwaukee, WI" },
  { title: "Siding & Roofing Replacement", category: "Additions", imageSrc: "/images/roofing-siding-home.jpg", location: "Milwaukee, WI" },
  { title: "Full Roof Replacement", category: "Additions", imageSrc: "/images/project-roofing-73rd.jpg", location: "Greater Milwaukee, WI" },
  { title: "Custom Exterior Stairs", category: "Additions", imageSrc: "/images/exterior-stairs.jpg", location: "Milwaukee, WI" },
  { title: "Custom Deck & Railings", category: "Additions", imageSrc: "/images/project-deck-cramer.jpg", location: "Milwaukee, WI" },
  { title: "Cedar Pergola & Patio", category: "Additions", imageSrc: "/images/project-pergola-helene.jpg", location: "Greater Milwaukee, WI" },
  // Commercial
  { title: "Cafe Storefront Buildout", category: "Commercial", imageSrc: "/images/cat-retail.jpg", location: "Milwaukee, WI" },
  { title: "Historic Church Restoration", category: "Commercial", imageSrc: "/images/commercial-church.jpg", location: "Milwaukee, WI" },
  { title: "Apartment Building Renovation", category: "Commercial", imageSrc: "/images/commercial-apartment.jpg", location: "Milwaukee, WI" },
  { title: "Mixed-Use Building", category: "Commercial", imageSrc: "/images/project-commercial-oakland.jpg", location: "Milwaukee, WI" },
  { title: "Masonry Building Restoration", category: "Commercial", imageSrc: "/images/project-commercial-henryclay.jpg", location: "Whitefish Bay, WI" },
  { title: "Commercial Exterior Buildout", category: "Commercial", imageSrc: "/images/project-commercial-washington.jpg", location: "Milwaukee, WI" },
];

const tabs: Category[] = ["All", "Kitchens", "Bathrooms", "Basements", "Additions", "Commercial"];

type Project = typeof projects[0];

export default function ProjectsPage() {
  const [active, setActive] = useState<Category>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      const idx = filtered.findIndex(p => p === selected);
      if (e.key === "Escape") setSelected(null);
      else if (e.key === "ArrowLeft") setSelected(filtered[(idx - 1 + filtered.length) % filtered.length]);
      else if (e.key === "ArrowRight") setSelected(filtered[(idx + 1) % filtered.length]);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selected, filtered]);

  return (
    <>
      {/* Header */}
      <section className="bg-gray-heading py-16 px-4 text-center">
        <h1
          className="text-5xl md:text-6xl font-black uppercase text-white mb-4"
        >
          Our Work
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          500+ completed projects across Wisconsin. Browse our portfolio by category.
        </p>
      </section>

      {/* Filter tabs */}
      <div className="bg-white border-b border-gray-border sticky top-[calc(64px+34px)] z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-3" role="tablist" aria-label="Project category filter">
            {tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={active === tab}
                onClick={() => setActive(tab)}
                className={`px-5 py-2 text-sm font-bold uppercase tracking-wide rounded whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  active === tab
                    ? "bg-primary text-white"
                    : "bg-gray-bg text-gray-body hover:text-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <AnimateOnScroll key={project.title} delay={i * 0.05}>
                <article
                  className="group relative aspect-video rounded-lg overflow-hidden cursor-pointer"
                  tabIndex={0}
                  aria-label={`${project.title} — ${project.category} project in ${project.location}`}
                  onClick={() => setSelected(project)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSelected(project); } }}
                >
                  {project.imageSrc && (
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex flex-col items-start justify-end p-5 opacity-0 group-hover:opacity-100 group-focus:opacity-100">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1">{project.category}</span>
                    <h3
                      className="text-white font-black text-xl uppercase"
                    >
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{project.location}</p>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-body py-16">No projects found in this category.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-bg text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-4xl font-black uppercase text-gray-heading mb-4"
          >
            Ready to Add Your Project to This List?
          </h2>
          <p className="text-gray-body mb-8">Get a free estimate in 24 hours. No pressure, no obligation.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Request a Free Estimate
            </Button>
            <Button href="/premier" variant="outline-blue" size="lg">
              Explore JM Premier
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
            onClick={(e) => { e.stopPropagation(); const idx = filtered.findIndex(p => p === selected); setSelected(filtered[(idx - 1 + filtered.length) % filtered.length]); }}
            aria-label="Previous photo"
          >‹</button>
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
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
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1 block">{selected.category}</span>
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
            onClick={(e) => { e.stopPropagation(); const idx = filtered.findIndex(p => p === selected); setSelected(filtered[(idx + 1) % filtered.length]); }}
            aria-label="Next photo"
          >›</button>
        </div>
      )}
    </>
  );
}
