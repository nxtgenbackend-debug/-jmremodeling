"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatBlockProps {
  value: string;
  label: string;
  suffix?: string;
}

function useCountUp(target: number, active: boolean, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);

  return count;
}

export default function StatBlock({ value, label, suffix = "" }: StatBlockProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const prefix = value.match(/^[^\d]*/)?.[0] ?? "";
  const valueSuffix = value.match(/[^\d]*$/)?.[0] ?? suffix;
  const count = useCountUp(numericValue, isInView);

  return (
    <div ref={ref} className="text-center">
      <p
        className="text-5xl md:text-6xl font-black text-primary leading-none mb-2"
        style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
        aria-label={`${value} ${label}`}
      >
        {prefix}
        {isInView ? count : 0}
        {valueSuffix}
      </p>
      <p className="text-sm font-bold uppercase tracking-widest text-gray-body">{label}</p>
    </div>
  );
}
