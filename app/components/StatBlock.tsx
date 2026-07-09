"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface StatBlockProps {
  value: string;
  label: string;
}

function useCountUp(target: number, active: boolean, duration = 1500) {
  const [count, setCount] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!active) return;
    if (reduceMotion) {
      setCount(target); // no tween — show the final value immediately
      return;
    }
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration, reduceMotion]);

  return count;
}

export default function StatBlock({ value, label }: StatBlockProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  // ponytail: value is "<prefix?><number><suffix?>", e.g. "4.9★", "500+", "98%".
  // Keep the dot so 4.9 doesn't become 49; format the count to the source's decimals.
  const hasNumber = /\d/.test(value);
  const numericValue = parseFloat(value.replace(/[^\d.]/g, "")) || 0;
  const decimals = (value.split(".")[1]?.match(/^\d+/)?.[0] ?? "").length;
  const prefix = value.match(/^[^\d.]*/)?.[0] ?? "";
  const valueSuffix = value.match(/[^\d.]*$/)?.[0] ?? "";
  const count = useCountUp(numericValue, isInView);

  return (
    <div ref={ref} className="text-center">
      <p
        className="text-5xl md:text-6xl font-black text-primary leading-none mb-2"
        style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
        aria-label={`${value} ${label}`}
      >
        {/* Non-numeric values (e.g. "NARI", "BBB") render as-is — no count-up. */}
        {hasNumber ? (
          <>
            {prefix}
            {(isInView ? count : 0).toFixed(decimals)}
            {valueSuffix}
          </>
        ) : (
          value
        )}
      </p>
      <p className="text-sm font-bold uppercase tracking-widest text-gray-body">{label}</p>
    </div>
  );
}
