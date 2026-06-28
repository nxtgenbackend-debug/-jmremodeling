"use client";

import { useState } from "react";
import Image from "next/image";

interface PortfolioTileProps {
  title: string;
  category: string;
  bgClass?: string;
  imageSrc?: string;
}

export default function PortfolioTile({ title, category, bgClass = "bg-slate-300", imageSrc }: PortfolioTileProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer ${!imageSrc ? bgClass : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
      role="img"
      aria-label={`${title} — ${category} project`}
    >
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      )}

      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 flex items-end p-4 ${
          hovered ? "opacity-75" : "opacity-0"
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
