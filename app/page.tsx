import HeroSection from "./components/HeroSection";
import TrustBar from "./components/TrustBar";
import ServiceCard from "./components/ServiceCard";
import SectionHeader from "./components/SectionHeader";
import TestimonialCard from "./components/TestimonialCard";
import BlogCard from "./components/BlogCard";
import PortfolioTile from "./components/PortfolioTile";
import StatBlock from "./components/StatBlock";
import ProcessSteps from "./components/ProcessSteps";
import AnimateOnScroll from "./components/AnimateOnScroll";
import Button from "./components/Button";

const headingFont = { fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" };

/* Quality-promise icons */
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
  { title: "Kitchen Remodeling", description: "Custom cabinets, countertops, islands, and full gut renovations that transform the heart of your home.", href: "/services/kitchen-remodeling", imageSrc: "/images/kitchen-luxury.jpg" },
  { title: "Bathroom Remodeling", description: "Spa-quality bathrooms with precision tile work, vanities, walk-in showers, and smart storage.", href: "/services/bathroom-remodeling", imageSrc: "/images/bathroom-nice-1.jpg" },
  { title: "Basement Finishing", description: "Convert raw square footage into livable space — home theaters, gyms, offices, and in-law suites.", href: "/services/basement-finishing", imageSrc: "/images/loft-attic.jpg" },
  { title: "Commercial Buildouts", description: "Turn-key office, retail, and restaurant buildouts built to code, on schedule and within budget.", href: "/services/commercial-buildouts", imageSrc: "/images/cat-retail.jpg" },
  { title: "Roofing & Siding", description: "Protect your investment with quality roofing materials and energy-efficient siding solutions.", href: "/services/roofing-siding", imageSrc: "/images/cat-roofing.jpg" },
  { title: "Additions & Framing", description: "Expand your footprint with expertly framed room additions, sunrooms, and garage conversions.", href: "/services/additions-framing", imageSrc: "/images/cat-porch.jpg" },
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
  { title: "Open-Concept Living", category: "Whole Home", imageSrc: "/images/living-openconcept.jpg" },
  { title: "Modern Luxury Kitchen", category: "Kitchen", imageSrc: "/images/kitchen-luxury.jpg" },
  { title: "Spa Master Bath", category: "Bathroom", imageSrc: "/images/bathroom-nice-1.jpg" },
  { title: "Classic White Kitchen", category: "Kitchen", imageSrc: "/images/kitchen-white.jpg" },
  { title: "Colonial Exterior", category: "Exterior", imageSrc: "/images/exterior-colonial.jpg" },
  { title: "Commercial Cafe Buildout", category: "Commercial", imageSrc: "/images/cat-retail.jpg" },
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

      {/* 2. TRUST BAR */}
      <TrustBar />

      {/* 3. SERVICES */}
      <section className="py-20 md:py-28 px-4 bg-gray-bg" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader
              eyebrow="What We Do"
              heading="Full-Service Remodeling"
              subheading="One trusted team for every project — from a single bathroom to a complete commercial buildout, across Greater Milwaukee."
            />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.title} delay={i * 0.08}>
                <ServiceCard {...service} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-20 md:py-28 px-4 bg-white" aria-labelledby="why-choose-heading">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-14 items-center">
          <div className="lg:col-span-3">
            <AnimateOnScroll direction="left">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary mb-3">Why JM</p>
              <h2 id="why-choose-heading" className="text-4xl md:text-5xl text-gray-heading mb-8" style={headingFont}>
                Built on Trust. Delivered on Time.
              </h2>
              <ul className="space-y-5 mb-10" role="list">
                {[
                  "25+ Years of Wisconsin Experience",
                  "Fixed-Price Contracts — No Surprise Billing",
                  "Dedicated Project Manager on Every Job",
                  "5-Year Workmanship Warranty",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="w-7 h-7 rounded-full bg-primary-light text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-gray-heading font-semibold text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="primary" size="lg">Get Your Free Estimate</Button>
            </AnimateOnScroll>
          </div>
          <div className="lg:col-span-2">
            <AnimateOnScroll direction="right">
              <div className="grid grid-cols-2 gap-px bg-gray-border rounded-2xl overflow-hidden border border-gray-border">
                {[
                  { value: "500+", label: "Projects Completed" },
                  { value: "25+", label: "Years in Business" },
                  { value: "4.9★", label: "Google Rating" },
                  { value: "98%", label: "On-Time Delivery" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white p-8">
                    <StatBlock value={stat.value} label={stat.label} />
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* 5. PROCESS */}
      <ProcessSteps />

      {/* 6. PORTFOLIO PREVIEW */}
      <section className="py-20 md:py-28 px-4 bg-gray-bg" aria-labelledby="portfolio-heading">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader eyebrow="Our Work" heading="Recent Projects" subheading="A look at recent kitchens, baths, and whole-home transformations across Wisconsin." />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {portfolioItems.map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 0.07}>
                <PortfolioTile {...item} />
              </AnimateOnScroll>
            ))}
          </div>
          <div className="text-center">
            <Button href="/projects" variant="outline-blue" size="lg">View All Projects</Button>
          </div>
        </div>
      </section>

      {/* 7. FINANCING */}
      <section className="py-16 md:py-20 px-4 bg-ink" aria-labelledby="financing-heading">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll direction="left">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-accent mb-3">Affordable Financing</p>
              <h2 id="financing-heading" className="text-4xl md:text-5xl text-white mb-4" style={headingFont}>
                Flexible Payment Plans
              </h2>
              <p className="text-blue-100/80 text-lg mb-7 leading-relaxed">
                We partner with GreenSky to offer flexible financing. Get approved in minutes with no impact to your credit score — so the project you need doesn&apos;t have to wait.
              </p>
              <Button href="/financing" variant="outline-white" size="lg">Learn About Financing</Button>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right">
            <div className="bg-white/5 border border-white/15 rounded-2xl p-8 text-center backdrop-blur-sm">
              <p className="text-6xl text-accent mb-1" style={headingFont}>0%</p>
              <p className="text-white font-bold text-lg mb-5">Interest Available</p>
              <div className="h-px bg-white/15 my-5" />
              <p className="text-white font-bold text-xl" style={headingFont}>Plans from 12–84 Months</p>
              <p className="text-blue-200/70 text-sm mt-1">Subject to credit approval</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 8. OFFER — signature accent moment */}
      <section className="py-20 md:py-24 px-4 bg-white" aria-labelledby="offer-heading">
        <AnimateOnScroll>
          <div className="max-w-4xl mx-auto relative rounded-3xl bg-ink overflow-hidden px-8 py-14 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" aria-hidden="true" />
            <div className="relative">
              <span className="inline-block bg-accent text-ink text-xs font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-5">
                Limited-Time Offer
              </span>
              <h2 id="offer-heading" className="text-4xl md:text-5xl text-white mb-4" style={headingFont}>
                Save $500 on Any Project Over $5,000
              </h2>
              <p className="text-blue-100/80 text-lg mb-8 max-w-xl mx-auto">
                Mention this offer when you request your free estimate. Offer expires July 31, 2026.
              </p>
              <Button href="/contact" variant="primary" size="lg">Claim This Offer</Button>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* 9. QUALITY PROMISE */}
      <section className="py-20 md:py-28 px-4 bg-gray-bg" aria-labelledby="quality-heading">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader eyebrow="Our Promise" heading="The JM Difference" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualityItems.map(({ Icon, title, desc }, i) => (
              <AnimateOnScroll key={title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-gray-border h-full text-center md:text-left">
                  <div className="inline-flex w-16 h-16 rounded-xl bg-primary-light items-center justify-center mb-5">
                    <Icon />
                  </div>
                  <h3 className="text-2xl text-gray-heading mb-2" style={headingFont}>{title}</h3>
                  <p className="text-gray-body text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <section className="py-20 md:py-28 px-4 bg-white" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader eyebrow="Reviews" heading="What Our Customers Say" subheading="Real homeowners across Greater Milwaukee, in their own words." />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={t.name} delay={i * 0.1}>
                <TestimonialCard {...t} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 11. BLOG PREVIEW */}
      <section className="py-20 md:py-28 px-4 bg-gray-bg" aria-labelledby="blog-heading">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader eyebrow="Resources" heading="Remodeling Tips & News" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {blogPosts.map((post, i) => (
              <AnimateOnScroll key={post.title} delay={i * 0.1}>
                <BlogCard {...post} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="relative py-24 md:py-32 px-4 bg-primary overflow-hidden text-center" aria-labelledby="final-cta-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" aria-hidden="true" />
        <AnimateOnScroll>
          <div className="relative max-w-3xl mx-auto">
            <h2 id="final-cta-heading" className="text-4xl md:text-6xl text-white mb-4" style={headingFont}>
              Ready to Start Your Project?
            </h2>
            <p className="text-blue-100 text-lg mb-10">
              Call today or request a free estimate — we&apos;ll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+14143542800"
                className="inline-flex items-center justify-center gap-2 font-bold uppercase tracking-[0.08em] bg-white text-primary hover:bg-gray-light transition-colors px-8 py-4 text-base rounded-lg shadow-lg"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                Call (414) 354-2800
              </a>
              <Button href="/contact" variant="outline-white" size="lg">Request Free Estimate</Button>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
