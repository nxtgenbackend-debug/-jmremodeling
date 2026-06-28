"use client";

import { useState } from "react";

const headingFont = { fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" };

const services = [
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Basement Finishing",
  "Commercial Buildout",
  "Roofing & Siding",
  "Addition / Framing",
  "Other / Not Sure",
];

interface QuoteFormProps {
  variant?: "card" | "plain";
  title?: string;
  subtitle?: string;
}

export default function QuoteForm({
  variant = "card",
  title = "Get Your Free Estimate",
  subtitle = "Tell us about your project — we respond within 24 hours.",
}: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const wrapper =
    variant === "card"
      ? "bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-border"
      : "";

  if (submitted) {
    return (
      <div className={wrapper}>
        <div className="text-center py-8">
          <div className="w-14 h-14 rounded-full bg-primary-light text-primary flex items-center justify-center mx-auto mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="text-2xl text-gray-heading mb-2" style={headingFont}>Thank You!</h3>
          <p className="text-gray-body text-sm">
            Your request is in. A JM project manager will reach out within 24 hours. Need to talk now? Call{" "}
            <a href="tel:+14143542800" className="text-primary font-bold">(414) 354-2800</a>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={wrapper}>
      <h3 className="text-2xl sm:text-3xl text-gray-heading mb-1" style={headingFont}>{title}</h3>
      <p className="text-gray-body text-sm mb-5">{subtitle}</p>
      <form className="space-y-3" onSubmit={handleSubmit} aria-label="Free estimate request form">
        <div>
          <label htmlFor="qf-name" className="sr-only">Full name</label>
          <input
            id="qf-name"
            name="name"
            type="text"
            required
            placeholder="Full Name *"
            className="w-full border border-gray-border rounded-lg px-4 py-3 text-sm text-gray-heading focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="qf-phone" className="sr-only">Phone number</label>
            <input
              id="qf-phone"
              name="phone"
              type="tel"
              required
              placeholder="Phone *"
              className="w-full border border-gray-border rounded-lg px-4 py-3 text-sm text-gray-heading focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label htmlFor="qf-email" className="sr-only">Email address</label>
            <input
              id="qf-email"
              name="email"
              type="email"
              placeholder="Email"
              className="w-full border border-gray-border rounded-lg px-4 py-3 text-sm text-gray-heading focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
        <div>
          <label htmlFor="qf-service" className="sr-only">Service needed</label>
          <select
            id="qf-service"
            name="service"
            className="w-full border border-gray-border rounded-lg px-4 py-3 text-sm text-gray-body focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
            defaultValue=""
          >
            <option value="" disabled>Service Needed</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white font-bold uppercase tracking-[0.08em] py-3.5 rounded-lg hover:bg-primary-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 shadow-lg shadow-primary/20"
        >
          Request My Free Estimate
        </button>
        <p className="text-[11px] text-gray-body/70 text-center">
          No spam, no obligation. Licensed &amp; insured since 1998.
        </p>
      </form>
    </div>
  );
}
