"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "../components/AnimateOnScroll";
import Button from "../components/Button";

type Category = "All" | "Kitchens" | "Bathrooms" | "Basements" | "Commercial" | "Additions";

const projects = [
  // Kitchens
  { title: "Modern Luxury Kitchen", category: "Kitchens", imageSrc: "/images/kitchen-luxury.jpg", location: "Fox Point, WI", year: "2024" },
  { title: "Premier Art-Deco Kitchen", category: "Kitchens", imageSrc: "/images/kitchen-premier.jpg", location: "Mequon, WI", year: "2024" },
  { title: "Classic White Kitchen", category: "Kitchens", imageSrc: "/images/kitchen-white.jpg", location: "Bayside, WI", year: "2024" },
  { title: "Marble Waterfall Kitchen", category: "Kitchens", imageSrc: "/images/kitchen-marble.png", location: "Brookfield, WI", year: "2023" },
  { title: "Navy & Gold Kitchen", category: "Kitchens", imageSrc: "/images/cat-kitchen.jpg", location: "Elm Grove, WI", year: "2023" },
  // Bathrooms
  { title: "Spa Master Bath", category: "Bathrooms", imageSrc: "/images/bathroom-nice-1.jpg", location: "Wauwatosa, WI", year: "2024" },
  { title: "Marble Shower Suite", category: "Bathrooms", imageSrc: "/images/bathroom-marble.jpg", location: "Fox Point, WI", year: "2024" },
  { title: "Master Bath & Glass Shower", category: "Bathrooms", imageSrc: "/images/bathroom-kent.jpg", location: "Wauwatosa, WI", year: "2023" },
  { title: "Walk-In Shower Remodel", category: "Bathrooms", imageSrc: "/images/panel-framing.jpg", location: "Brookfield, WI", year: "2023" },
  // Basements
  { title: "Basement Built-In & Fireplace", category: "Basements", imageSrc: "/images/basement-fireplace.jpg", location: "Fox Point, WI", year: "2024" },
  { title: "Basement Wet Bar", category: "Basements", imageSrc: "/images/basement-wetbar.jpg", location: "Fox Point, WI", year: "2024" },
  { title: "Lower-Level Lounge", category: "Basements", imageSrc: "/images/basement-fireplace-tall.jpg", location: "Fox Point, WI", year: "2024" },
  // Additions / Exteriors
  { title: "Open-Concept Living Room", category: "Additions", imageSrc: "/images/living-openconcept.jpg", location: "Mequon, WI", year: "2024" },
  { title: "Premier Living Room", category: "Additions", imageSrc: "/images/living-premier.jpg", location: "Mequon, WI", year: "2024" },
  { title: "Bright Living Room Addition", category: "Additions", imageSrc: "/images/cat-addition.jpg", location: "Mequon, WI", year: "2024" },
  { title: "Colonial Exterior Renovation", category: "Additions", imageSrc: "/images/exterior-colonial.jpg", location: "Whitefish Bay, WI", year: "2023" },
  { title: "Siding & Roofing Replacement", category: "Additions", imageSrc: "/images/roofing-siding-home.jpg", location: "Milwaukee, WI", year: "2023" },
  { title: "Custom Exterior Stairs", category: "Additions", imageSrc: "/images/exterior-stairs.jpg", location: "Milwaukee, WI", year: "2023" },
  // Commercial
  { title: "Cafe Storefront Buildout", category: "Commercial", imageSrc: "/images/cat-retail.jpg", location: "Milwaukee, WI", year: "2023" },
  { title: "Stone Church Restoration", category: "Commercial", imageSrc: "/images/commercial-church.jpg", location: "Milwaukee, WI", year: "2022" },
  { title: "Apartment Lobby Renovation", category: "Commercial", imageSrc: "/images/commercial-apartment.jpg", location: "Milwaukee, WI", year: "2021" },
];

const tabs: Category[] = ["All", "Kitchens", "Bathrooms", "Basements", "Additions", "Commercial"];

export default function ProjectsPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Header */}
      <section className="bg-gray-heading py-16 px-4 text-center">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-4">
          <ol className="flex justify-center gap-2" role="list">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-white" aria-current="page">Projects</li>
          </ol>
        </nav>
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
                    <p className="text-gray-300 text-sm">{project.location} · {project.year}</p>
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
          <Button href="/contact" variant="primary" size="lg">
            Request a Free Estimate
          </Button>
        </div>
      </section>
    </>
  );
}
