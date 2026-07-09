import Link from "next/link";
import Image from "next/image";
import Button from "../../components/Button";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import ServiceExtras from "../../components/ServiceExtras";
import ServiceContent from "../../components/ServiceContent";

export const metadata = {
  title: "Commercial Buildouts Milwaukee, WI",
  description:
    "Turn-key office, retail & restaurant buildouts across Greater Milwaukee. Built to code, on schedule, and within budget since 1990.",
  alternates: { canonical: "/services/commercial-buildouts" },
};

const processSteps = [
  {
    step: "01",
    title: "Site Walk & Scope",
    desc: "We walk your space, review any existing plans or lease requirements, and get a clear picture of your timeline and budget constraints. We understand that downtime costs money.",
  },
  {
    step: "02",
    title: "Design & Fixed Bid",
    desc: "We coordinate with your architect or design the layout ourselves, then provide a detailed fixed-price bid — broken down by trade so you know exactly what you're paying for.",
  },
  {
    step: "03",
    title: "Permitted Build",
    desc: "We pull all required permits, manage every trade, and keep the project on schedule. Your project manager sends regular progress updates and flags issues before they become delays.",
  },
  {
    step: "04",
    title: "Punch List & Handover",
    desc: "We complete a thorough punch-list walkthrough, coordinate final inspections, and hand over a clean, fully functional space — ready for your team or tenants.",
  },
];

const relatedServices = [
  { label: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
  { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
  { label: "Additions & Framing", href: "/services/additions-framing" },
  { label: "Roofing & Siding", href: "/services/roofing-siding" },
];

export default function CommercialBuildoutsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-20 px-4 text-white"
        style={{ background: "linear-gradient(135deg, #1A237E 0%, #0D47A1 100%)" }}
        aria-labelledby="commercial-heading"
      >
        <div className="max-w-5xl mx-auto">
          <h1
            id="commercial-heading"
            className="text-5xl md:text-7xl font-black uppercase text-white mb-4"
          >
            Commercial Buildouts
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl mb-8">
            Turn-key commercial construction for Wisconsin businesses. Offices, restaurants, retail, roofing, concrete, and additions — on schedule, on budget, and built to code.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Request a Commercial Estimate
            </Button>
            <Button href="/commercial" variant="outline-white" size="lg">
              View Our Commercial Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="relative aspect-video rounded-lg overflow-hidden mb-10">
            <Image
              src="/images/cat-retail.jpg"
              alt="Commercial buildout by JM Remodeling & Construction"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
            />
          </div>

          <AnimateOnScroll>
            <div className="prose prose-gray max-w-none space-y-5 text-gray-body leading-relaxed mb-12">
              <p>
                Commercial construction is different from residential work. Timelines are tied to lease agreements, tenant move-in dates, and revenue starts. Code requirements are stricter. And the cost of a delay is measured in business days, not inconvenience.
              </p>
              <p>
                JM Remodeling &amp; Construction has been delivering commercial buildouts across the Greater Milwaukee area since 1990. We partner with business owners, landlords, and property managers to deliver turn-key spaces — offices, restaurants, retail stores, roofing, concrete, additions, and more — on a schedule that respects your bottom line.
              </p>
              <p>
                We self-perform most trades, which means fewer subcontractors, tighter coordination, and a single general contractor who is accountable for every phase. Every project is permitted, inspected, and delivered with full documentation.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-black uppercase text-gray-heading mb-6">What We Build</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
              {[
                "Office & corporate tenant improvements",
                "Restaurant & commercial kitchen buildouts",
                "Retail store fit-outs",
                "Large-scale commercial roofing",
                "Concrete & foundation work",
                "Building additions & expansions",
                "Salon & spa buildouts",
                "Warehouse & light industrial",
                "ADA compliance upgrades",
                "Bathroom & break room additions",
                "Storefront & façade work",
                "Fast-track scheduling available",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-body">
                  <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-black uppercase text-gray-heading mb-8">Our Process</h2>
            <div className="space-y-6">
              {processSteps.map((step) => (
                <div key={step.step} className="flex gap-5 items-start">
                  <div
                    className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm flex-shrink-0"
                    style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
                  >
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase text-gray-heading mb-1">{step.title}</h3>
                    <p className="text-gray-body text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>

        <aside className="space-y-6">
          <div className="bg-gray-bg rounded-lg p-6 border border-gray-border">
            <h3 className="text-2xl font-black uppercase text-gray-heading mb-4">Get a Free Estimate</h3>
            <form className="space-y-4" aria-label="Commercial buildout estimate request form">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-heading mb-1">Full Name *</label>
                <input id="name" name="name" type="text" required placeholder="Jane Smith"
                  className="w-full border border-gray-border rounded px-3 py-2 text-sm text-gray-heading focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-heading mb-1">Phone *</label>
                <input id="phone" name="phone" type="tel" required placeholder="(414) 555-0000"
                  className="w-full border border-gray-border rounded px-3 py-2 text-sm text-gray-heading focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="project-type" className="block text-sm font-bold text-gray-heading mb-1">Project Type</label>
                <select id="project-type" name="project-type"
                  className="w-full border border-gray-border rounded px-3 py-2 text-sm text-gray-heading focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white">
                  <option value="">Select a project type</option>
                  <option>Office / tenant improvement</option>
                  <option>Restaurant / food service</option>
                  <option>Retail store</option>
                  <option>Roofing</option>
                  <option>Concrete & foundations</option>
                  <option>Building addition</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-heading mb-1">Tell us about your project</label>
                <textarea id="message" name="message" rows={4}
                  placeholder="Describe your project, timeline, and any questions..."
                  className="w-full border border-gray-border rounded px-3 py-2 text-sm text-gray-heading focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none" />
              </div>
              <button type="submit"
                className="w-full bg-primary text-white font-bold uppercase tracking-[0.08em] py-3 rounded hover:bg-primary-dark transition-colors">
                Send My Request
              </button>
              <p className="text-xs text-gray-400 text-center">We respond within 24 hours. No spam, ever.</p>
            </form>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-border">
            <h3 className="text-lg font-black uppercase text-gray-heading mb-4">Related Services</h3>
            <ul className="space-y-2" role="list">
              {relatedServices.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-primary font-bold hover:text-primary-dark transition-colors hover:underline">
                    → {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-primary text-white rounded-lg p-6 text-center">
            <p className="font-black text-xl uppercase mb-2" style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}>
              Questions? Call Us
            </p>
            <a href="tel:+14143542800" className="text-2xl font-black text-white hover:text-blue-200 transition-colors" style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}>
              (414) 354-2800
            </a>
            <p className="text-blue-100 text-xs mt-2">Mon–Fri 7am–6pm | Sat 8am–2pm</p>
          </div>
        </aside>
      </div>

      <ServiceContent slug="commercial-buildouts" />
      <ServiceExtras slug="commercial-buildouts" path="/services/commercial-buildouts" />
    </>
  );
}
