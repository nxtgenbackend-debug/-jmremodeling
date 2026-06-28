import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import AnimateOnScroll from "../components/AnimateOnScroll";

const services = [
  {
    title: "Kitchen Remodeling",
    href: "/services/kitchen-remodeling",
    description:
      "Your kitchen is the heart of your home. Whether you're dreaming of custom cabinetry, a chef-quality island, quartz countertops, or a complete gut renovation, JM brings it to life on time and on budget. We handle everything from design through final walk-through.",
    highlights: ["Custom cabinets & storage", "Countertop installation (quartz, granite, laminate)", "Tile backsplash", "Lighting & electrical upgrades", "Island & peninsula additions"],
    imageSrc: "/images/kitchen-nice-1.jpg",
  },
  {
    title: "Bathroom Remodeling",
    href: "/services/bathroom-remodeling",
    description:
      "From powder room refreshes to full master bath overhauls, JM delivers spa-quality results. Our crews specialize in precise tile work, custom shower enclosures, vanity installation, and full plumbing rough-ins — all finished on schedule.",
    highlights: ["Walk-in shower design & tile", "Freestanding tub installation", "Double vanity & lighting", "Heated floor systems", "Full plumbing rough-in"],
    imageSrc: "/images/bathroom-nice-1.jpg",
  },
  {
    title: "Basement Finishing",
    href: "/services/basement-finishing",
    description:
      "Stop wasting your basement. JM transforms raw concrete into finished, livable square footage — home theaters, gyms, guest suites, playrooms, home offices, and bar areas. We handle framing, insulation, drywall, flooring, and egress.",
    highlights: ["Open-concept layouts", "Home theater & media rooms", "Bar & entertainment spaces", "Egress window installation", "Waterproofing coordination"],
    imageSrc: "/images/final.jpg",
  },
  {
    title: "Commercial Buildouts",
    href: "/services/commercial-buildouts",
    description:
      "JM partners with business owners, landlords, and property managers to deliver turn-key commercial spaces. Offices, restaurants, retail stores, medical suites — we understand commercial codes, ADA compliance, and the cost of delays.",
    highlights: ["Office & retail tenant improvements", "Restaurant & kitchen buildouts", "Medical & dental suites", "ADA compliance upgrades", "Fast-track scheduling available"],
    imageSrc: "/images/consultation.jpg",
  },
  {
    title: "Roofing & Siding",
    href: "/services/roofing-siding",
    description:
      "Protect your home's most critical systems. JM installs and replaces asphalt shingles, metal roofing, vinyl and fiber cement siding, soffits, fascia, and gutters. Every job includes a thorough inspection before and after.",
    highlights: ["Asphalt shingle replacement", "Metal roofing installation", "Vinyl & fiber cement siding", "Soffit, fascia & gutter systems", "Storm damage repair"],
    imageSrc: "/images/exterior.png",
  },
  {
    title: "Additions & Framing",
    href: "/services/additions-framing",
    description:
      "Need more space? JM's framing crews build room additions, second-story additions, sunrooms, three-season porches, and garage conversions — all permitted, engineered, and built to Wisconsin code.",
    highlights: ["Room & second-story additions", "Sunrooms & three-season porches", "Garage conversions", "Structural framing & engineering coordination", "Full permit management"],
    imageSrc: "/images/panel-framing.jpg",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-heading py-16 px-4 text-center" aria-labelledby="services-page-heading">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-4">
          <ol className="flex justify-center gap-2" role="list">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-white" aria-current="page">Services</li>
          </ol>
        </nav>
        <h1
          id="services-page-heading"
          className="text-5xl md:text-6xl font-black uppercase text-white mb-4"
          style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
        >
          Our Services
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Full-service remodeling and construction for Wisconsin homeowners and businesses since 1998.
        </p>
      </section>

      {/* Services list */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.title} delay={0.05}>
              <article className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start border-b border-gray-border pb-16 last:border-0">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-200">
                  <Image
                    src={service.imageSrc}
                    alt={service.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="md:col-span-2">
                  <h2
                    className="text-3xl font-black uppercase text-gray-heading mb-3"
                    style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-gray-body mb-5">{service.description}</p>
                  <ul className="space-y-2 mb-6" role="list">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-gray-body">
                        <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <Button href={service.href} variant="primary" size="md">
                      Learn More
                    </Button>
                    <Button href="/contact" variant="outline-blue" size="md">
                      Get Estimate
                    </Button>
                  </div>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-4xl font-black uppercase text-white mb-4"
            style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
          >
            Not Sure Which Service You Need?
          </h2>
          <p className="text-blue-100 mb-8">
            Call us for a free consultation. We&apos;ll walk your property, assess your needs, and give you an honest recommendation — no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14143542800"
              className="inline-flex items-center justify-center font-bold uppercase tracking-[0.08em] bg-white text-primary hover:bg-gray-100 transition-colors px-8 py-4 text-base rounded"
            >
              Call (414) 354-2800
            </a>
            <Button href="/contact" variant="outline-white" size="lg">
              Request Free Estimate
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
