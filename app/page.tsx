import HeroSection from "./components/HeroSection";
import ServiceCard from "./components/ServiceCard";
import SectionHeader from "./components/SectionHeader";
import TestimonialCard from "./components/TestimonialCard";
import BlogCard from "./components/BlogCard";
import PortfolioTile from "./components/PortfolioTile";
import StatBlock from "./components/StatBlock";
import AnimateOnScroll from "./components/AnimateOnScroll";
import Button from "./components/Button";

/* ── SVG Icons ── */
function KitchenIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="2" y="3" width="20" height="5" rx="1" />
      <path d="M2 8v13h20V8" />
      <path d="M8 8v5h8V8" />
      <circle cx="12" cy="17" r="1" />
    </svg>
  );
}
function BathroomIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M9 6 C9 4.3 10.3 3 12 3 C13.7 3 15 4.3 15 6" />
      <rect x="4" y="9" width="16" height="8" rx="2" />
      <path d="M6 17v2" /><path d="M18 17v2" /><path d="M4 9H2" /><path d="M2 6v3" />
    </svg>
  );
}
function BasementIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
      <line x1="3" y1="14" x2="21" y2="14" />
    </svg>
  );
}
function CommercialIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="2" y="7" width="20" height="14" rx="1" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
    </svg>
  );
}
function RoofingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polyline points="3 9 12 2 21 9" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <rect x="5" y="9" width="14" height="12" />
      <rect x="9" y="14" width="6" height="7" />
    </svg>
  );
}
function AdditionsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="2" y="10" width="12" height="11" rx="1" />
      <path d="M8 10V6l4-4 4 4v4" />
      <rect x="14" y="14" width="8" height="7" rx="1" />
      <line x1="18" y1="10" x2="18" y2="14" /><line x1="16" y1="12" x2="20" y2="12" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
function StarQualityIcon() {
  return (
    <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
function HouseIcon() {
  return (
    <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

const services = [
  { icon: <KitchenIcon />, title: "Kitchen Remodeling", description: "Custom cabinets, countertops, islands, and full gut renovations that transform the heart of your home.", href: "/services/kitchen-remodeling" },
  { icon: <BathroomIcon />, title: "Bathroom Remodeling", description: "Spa-quality bathrooms with precision tile work, vanities, walk-in showers, and smart storage.", href: "/services/bathroom-remodeling" },
  { icon: <BasementIcon />, title: "Basement Finishing", description: "Convert raw square footage into livable space — home theaters, gyms, offices, and in-law suites.", href: "/services/basement-finishing" },
  { icon: <CommercialIcon />, title: "Commercial Buildouts", description: "Turn-key office, retail, and restaurant buildouts built to code on schedule and within budget.", href: "/services/commercial-buildouts" },
  { icon: <RoofingIcon />, title: "Roofing & Siding", description: "Protect your investment with quality roofing materials and energy-efficient siding solutions.", href: "/services/roofing-siding" },
  { icon: <AdditionsIcon />, title: "Additions & Framing", description: "Expand your footprint with expertly framed room additions, sunrooms, and garage conversions.", href: "/services/additions-framing" },
];

const testimonials = [
  { initials: "SR", name: "Susan R.", city: "Brookfield, WI", quote: "JM completely transformed our kitchen — new cabinets, quartz countertops, the works. They finished three days ahead of schedule and our project manager was responsive every single day. Would absolutely hire them again." },
  { initials: "TM", name: "Tom M.", city: "Wauwatosa, WI", quote: "We had a tight budget and JM worked with us to maximize every dollar. The basement finishing turned out better than we imagined. Fixed-price contract meant no surprises — that's rare in this industry." },
  { initials: "LK", name: "Linda K.", city: "Mequon, WI", quote: "After getting burned by another contractor, we were skeptical. JM came with references, a clear contract, and actually showed up when they said they would. The bathroom remodel is stunning." },
];

const blogPosts = [
  { category: "Kitchen Design", title: "2025 Kitchen Trends Wisconsin Homeowners Are Loving", excerpt: "From bold two-tone cabinets to waterfall quartz islands — here are the kitchen design trends dominating Milwaukee remodels this year.", date: "2025-03-15", href: "/blog/kitchen-trends-2025" },
  { category: "ROI Guide", title: "Bathroom Remodel ROI: What You'll Actually Recoup", excerpt: "A mid-range bathroom remodel returns 67% on average at resale. Here's how to maximize your return in the Wisconsin market.", date: "2025-02-22", href: "/blog/bathroom-remodel-roi" },
  { category: "Contractor Tips", title: "How to Choose a General Contractor in Wisconsin", excerpt: "License checks, red flags to avoid, and the 7 questions every homeowner should ask before signing a remodeling contract.", date: "2025-01-10", href: "/blog/how-to-choose-contractor-wisconsin" },
];

const portfolioItems = [
  { title: "Lake Country Kitchen", category: "Kitchen", bgClass: "bg-slate-400" },
  { title: "Wauwatosa Master Bath", category: "Bathroom", bgClass: "bg-stone-400" },
  { title: "Mequon Basement Theater", category: "Basement", bgClass: "bg-slate-500" },
  { title: "Milwaukee Office Buildout", category: "Commercial", bgClass: "bg-zinc-400" },
  { title: "Brookfield Home Addition", category: "Addition", bgClass: "bg-slate-300" },
  { title: "Pewaukee Roof & Siding", category: "Roofing", bgClass: "bg-stone-500" },
];

const qualityItems = [
  { Icon: ShieldIcon, title: "Licensed & Insured", desc: "Fully licensed in Wisconsin and carrying comprehensive liability and workers' comp insurance on every project." },
  { Icon: StarQualityIcon, title: "Satisfaction Guaranteed", desc: "We stand behind our work with a 5-year workmanship warranty and a promise to make it right, every time." },
  { Icon: HouseIcon, title: "Local, Family-Owned", desc: "Rooted in Milwaukee since 1998, we're your neighbors — and we treat every home like it's our own." },
];

export default function HomePage() {
  return (
    <>
      {/* 1. HERO */}
      <HeroSection />

      {/* 2. SERVICES */}
      <section className="py-20 px-4 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader
              eyebrow="What We Do"
              heading="Full-Service Remodeling"
              subheading="Full-service remodeling for homeowners and businesses across Wisconsin"
            />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.title} delay={i * 0.08}>
                <ServiceCard {...service} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-20 px-4 bg-gray-bg" aria-labelledby="why-choose-heading">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <AnimateOnScroll direction="left">
              <h2
                id="why-choose-heading"
                className="text-4xl md:text-5xl font-black uppercase text-gray-heading mb-8"
                style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
              >
                Built on Trust. Delivered on Time.
              </h2>
              <ul className="space-y-5 mb-10" role="list">
                {[
                  "25+ Years of Wisconsin Experience",
                  "Fixed-Price Contracts — No Surprise Billing",
                  "Dedicated Project Manager on Every Job",
                  "5-Year Workmanship Warranty",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-body font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="primary" size="lg">
                Get Your Free Estimate
              </Button>
            </AnimateOnScroll>
          </div>
          <div className="lg:col-span-2">
            <AnimateOnScroll direction="right">
              <div className="grid grid-cols-2 gap-8">
                <StatBlock value="500+" label="Projects Completed" />
                <StatBlock value="25+" label="Years in Business" />
                <StatBlock value="4.9★" label="Google Rating" />
                <StatBlock value="98%" label="On-Time Delivery" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* 4. PORTFOLIO PREVIEW */}
      <section className="py-20 px-4 bg-white" aria-labelledby="portfolio-heading">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader eyebrow="Our Work" heading="Recent Projects" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {portfolioItems.map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 0.07}>
                <PortfolioTile {...item} />
              </AnimateOnScroll>
            ))}
          </div>
          <div className="text-center">
            <Button href="/projects" variant="outline-blue" size="lg">
              View All Projects →
            </Button>
          </div>
        </div>
      </section>

      {/* 5. FINANCING */}
      <section className="py-16 px-4 bg-primary" aria-labelledby="financing-heading">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <AnimateOnScroll direction="left">
            <div>
              <h2
                id="financing-heading"
                className="text-4xl md:text-5xl font-black uppercase text-white mb-4"
                style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
              >
                Financing Available
              </h2>
              <p className="text-blue-100 text-lg mb-6">
                We partner with GreenSky to offer flexible payment plans. Get approved in minutes with no impact to your credit score.
              </p>
              <Button href="/financing" variant="outline-white" size="lg">
                Learn About Financing →
              </Button>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right">
            <div className="border-2 border-white/30 rounded-lg p-8 text-center text-white">
              <p className="text-5xl font-black mb-2" style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}>0%</p>
              <p className="text-blue-100 font-bold text-lg mb-4">Interest Available</p>
              <div className="h-px bg-white/20 my-4" />
              <p className="text-white font-bold">Plans from 12–84 months</p>
              <p className="text-blue-200 text-sm mt-1">Subject to credit approval</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 6. DISCOUNT / OFFER */}
      <section className="py-20 px-4 bg-black text-white text-center" aria-labelledby="offer-heading">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">Current Offer</p>
            <h2
              id="offer-heading"
              className="text-4xl md:text-5xl font-black uppercase text-white mb-4"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
            >
              Save $500 on Any Project Over $5,000
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Mention this offer when requesting your free estimate. Expires July 31, 2026.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Claim This Offer
            </Button>
          </div>
        </AnimateOnScroll>
      </section>

      {/* 7. QUALITY PROMISE */}
      <section className="py-20 px-4 bg-white" aria-labelledby="quality-heading">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader eyebrow="Our Promise" heading="Why JM?" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {qualityItems.map(({ Icon, title, desc }, i) => (
              <AnimateOnScroll key={title} delay={i * 0.1}>
                <div className="flex flex-col items-center">
                  <div className="mb-4"><Icon /></div>
                  <h3
                    className="text-2xl font-bold uppercase text-gray-heading mb-2"
                    style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
                  >
                    {title}
                  </h3>
                  <p className="text-gray-body text-sm max-w-xs">{desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-20 px-4 bg-gray-bg" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader eyebrow="Reviews" heading="What Our Customers Say" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={t.name} delay={i * 0.1}>
                <TestimonialCard {...t} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BLOG PREVIEW */}
      <section className="py-20 px-4 bg-white" aria-labelledby="blog-heading">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader eyebrow="Resources" heading="Remodeling Tips & News" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <AnimateOnScroll key={post.title} delay={i * 0.1}>
                <BlogCard {...post} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary to-primary-dark text-white text-center" aria-labelledby="final-cta-heading">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto">
            <h2
              id="final-cta-heading"
              className="text-4xl md:text-6xl font-black uppercase text-white mb-4"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
            >
              Ready to Start Your Project?
            </h2>
            <p className="text-blue-100 text-lg mb-10">
              Call us today or fill out a quick form — we&apos;ll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+14145550100"
                className="inline-flex items-center justify-center font-bold uppercase tracking-[0.08em] bg-white text-primary hover:bg-gray-100 transition-colors px-8 py-4 text-base rounded"
              >
                Call (414) 555-0100
              </a>
              <Button href="/contact" variant="outline-white" size="lg">
                Request Free Estimate
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
