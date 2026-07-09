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
import { posts } from "./blog/posts";

export const metadata = {
  description:
    "JM Remodeling & Construction, LLC — Wisconsin's premier residential and commercial remodeler since 1990. Kitchens, bathrooms, basements, commercial buildouts, and more. Licensed & insured. Free estimates.",
  alternates: { canonical: "/" },
};

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
  { title: "Basement Finishing", description: "Convert raw square footage into livable space — home theaters, wet bars, gyms, offices, and in-law suites.", href: "/services/basement-finishing", imageSrc: "/images/basement-fireplace.jpg" },
  { title: "Commercial Buildouts", description: "Turn-key office, retail, and restaurant buildouts built to code, on schedule and within budget.", href: "/services/commercial-buildouts", imageSrc: "/images/cat-retail.jpg" },
  { title: "Roofing & Siding", description: "Protect your investment with quality roofing materials and energy-efficient siding solutions.", href: "/services/roofing-siding", imageSrc: "/images/roofing-siding-home.jpg" },
  { title: "Additions & Framing", description: "Expand your footprint with expertly framed room additions, sunrooms, and garage conversions.", href: "/services/additions-framing", imageSrc: "/images/exterior-stairs.jpg" },
];

const testimonials = [
  { initials: "M", name: "Mindy", city: "Verified Customer", quote: "Love the high quality work, attention to detail, great communication — JM is the full package & more!" },
  { initials: "D", name: "Donna", city: "Verified Customer", quote: "I would recommend JM to a friend. I was extremely happy with everything that was done here." },
  { initials: "J", name: "Judith", city: "Verified Customer", quote: "The staff was pleasant and knowledgeable. I am very pleased with the results. It was a difficult job!" },
];

const blogPosts = posts.map((p) => ({
  category: p.category,
  title: p.title,
  excerpt: p.excerpt,
  date: p.date,
  href: `/blog/${p.slug}`,
}));

const portfolioItems = [
  { title: "Open-Concept Living", category: "Whole Home", imageSrc: "/images/living-openconcept.jpg" },
  { title: "Modern Luxury Kitchen", category: "Kitchen", imageSrc: "/images/kitchen-luxury.jpg" },
  { title: "Finished Basement", category: "Basement", imageSrc: "/images/basement-fireplace.jpg" },
  { title: "Spa Master Bath", category: "Bathroom", imageSrc: "/images/bathroom-nice-1.jpg" },
  { title: "Colonial Exterior", category: "Exterior", imageSrc: "/images/exterior-colonial.jpg" },
  { title: "Stone Church Restoration", category: "Commercial", imageSrc: "/images/commercial-church.jpg" },
];

const qualityItems = [
  { Icon: ShieldIcon, title: "Award-Winning & Accredited", desc: "NARI award winner, Better Business Bureau and NRCA member — licensed, bonded, and insured with certified installers for siding, windows, and roofing." },
  { Icon: StarQualityIcon, title: "Guaranteed Work", desc: "Backed by labor, factory, and extended warranties — plus a 30-day labor price lock so your kitchen budget stays predictable." },
  { Icon: HouseIcon, title: "In-House Journeymen", desc: "Our own carpenters, plumbers, electricians, roofers, and sheet-metal workers — every trade under one roof since 1990, with an in-house apprenticeship program." },
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
                  "35+ Years of Wisconsin Experience",
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
                  { value: "35+", label: "Years in Business" },
                  { value: "NARI", label: "Award-Winning" },
                  { value: "BBB", label: "Accredited Member" },
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
                Get approved in minutes with no impact to your credit score — so the project you need doesn&apos;t have to wait.
              </p>
              <Button href="/contact" variant="outline-white" size="lg">Get Pre-Qualified Today</Button>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right">
            <div className="bg-white/5 border border-white/15 rounded-2xl p-8 text-center backdrop-blur-sm">
              <p className="text-6xl text-accent mb-1" style={headingFont}>0%</p>
              <p className="text-white font-bold text-lg mb-1">Interest if Paid in Full in 18 Months</p>
              <div className="h-px bg-white/15 my-5" />
              <p className="text-white font-bold text-xl" style={headingFont}>As Low as 5.99% Long Term</p>
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
                Limited-Time Summer Special
              </span>
              <h2 id="offer-heading" className="text-4xl md:text-5xl text-white mb-4" style={headingFont}>
                $2,000 Off Tub-to-Shower Conversions
              </h2>
              <p className="text-blue-100/80 text-lg mb-8 max-w-xl mx-auto">
                Upgrade your bathroom without committing to a full remodel. No overlays. No shortcuts. Mention this offer when you request your free estimate.
              </p>
              <Button href="/contact" variant="primary" size="lg">Claim This Offer</Button>
              <p className="text-blue-200/70 text-sm mt-6">
                Active military and homeowners 65+ are eligible for up to 10% off JM Remodeling services — just ask for details.
              </p>
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
            <SectionHeader eyebrow="Reviews" heading="Customer Experience Is Our Top Priority" subheading="Real homeowners across Greater Milwaukee, in their own words." />
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
