"use client";

import { useState } from "react";

interface PortfolioTileProps {
  title: string;
  category: string;
  bgClass: string;
}

export default function PortfolioTile({ title, category, bgClass }: PortfolioTileProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer ${bgClass}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
      role="img"
      aria-label={`${title} — ${category} project`}
    >
      {/* Replace with next/image pointing to /public/projects/{slug}.jpg */}
      {/* <Image src={`/projects/${slug}.jpg`} alt={title} fill className="object-cover" /> */}

      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 flex items-end p-4 ${
          hovered ? "opacity-80" : "opacity-0"
        }`}
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
            {category}
          </p>
          <p
            className="text-white font-bold text-lg uppercase"
            style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
          >
            {title}
          </p>
        </div>
      </div>
    </article>
  );
}
