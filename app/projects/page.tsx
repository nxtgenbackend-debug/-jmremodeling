"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "../components/AnimateOnScroll";
import Button from "../components/Button";

type Category = "All" | "Kitchens" | "Bathrooms" | "Commercial" | "Additions";

const projects = [
  { title: "Lake Country Kitchen", category: "Kitchens", bg: "bg-slate-400", imageSrc: "/images/kitchen-nice-1.jpg", location: "Delafield, WI", year: "2024" },
  { title: "Wauwatosa Master Bath", category: "Bathrooms", bg: "bg-stone-400", imageSrc: "/images/bathroom-nice-1.jpg", location: "Wauwatosa, WI", year: "2024" },
  { title: "Milwaukee Consultation", category: "Commercial", bg: "bg-zinc-400", imageSrc: "/images/consultation.jpg", location: "Milwaukee, WI", year: "2024" },
  { title: "Brookfield Kitchen Renovation", category: "Kitchens", bg: "bg-stone-500", imageSrc: "/images/kitchen-nice-2.jpg", location: "Brookfield, WI", year: "2023" },
  { title: "Exterior Renovation", category: "Additions", bg: "bg-slate-300", imageSrc: "/images/exterior.png", location: "Mequon, WI", year: "2023" },
  { title: "Framing & Structure", category: "Additions", bg: "bg-zinc-300", imageSrc: "/images/panel-framing.jpg", location: "Pewaukee, WI", year: "2023" },
  { title: "Waukesha Guest Bath", category: "Bathrooms", bg: "bg-slate-500", imageSrc: "/images/bathroom-before.png", location: "Waukesha, WI", year: "2023" },
  { title: "Project Completion", category: "Commercial", bg: "bg-stone-300", imageSrc: "/images/final.jpg", location: "Milwaukee, WI", year: "2022" },
  { title: "Shorewood Kitchen Refresh", category: "Kitchens", bg: "bg-slate-200", imageSrc: "/images/kitchen-before.png", location: "Shorewood, WI", year: "2022" },
];

const tabs: Category[] = ["All", "Kitchens", "Bathrooms", "Commercial", "Additions"];

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
          style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
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
                  className={`group relative aspect-video rounded-lg overflow-hidden ${project.bg} cursor-pointer`}
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
                      style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
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
            style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
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
