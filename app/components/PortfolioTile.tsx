"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface PortfolioTileProps {
  title: string;
  category: string;
  imageSrc: string;
}

export default function PortfolioTile({ title, category, imageSrc }: PortfolioTileProps) {
  const [hovered, setHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightboxOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxOpen]);

  return (
    <>
      <article
        className="relative aspect-video rounded-lg overflow-hidden cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        tabIndex={0}
        role="button"
        aria-label={`${title} — ${category} project. Click to view fullscreen.`}
        onClick={() => setLightboxOpen(true)}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setLightboxOpen(true); } }}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

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

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} fullscreen view`}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <div className="bg-black/60 px-5 py-3">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">{category}</p>
              <p
                className="text-white font-bold text-lg uppercase"
                style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
              >
                {title}
              </p>
            </div>
            <button
              className="absolute top-3 right-3 text-white bg-black/50 hover:bg-black/80 rounded-full w-9 h-9 flex items-center justify-center transition-colors"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close lightbox"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
