import Link from "next/link";
import Image from "next/image";
import Button from "../../components/Button";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import ServiceExtras from "../../components/ServiceExtras";
import ServiceContent from "../../components/ServiceContent";

export const metadata = {
  title: "Roofing & Siding Milwaukee, WI",
  description:
    "Roofing and siding installation and replacement built for Wisconsin winters. Licensed & insured with a 5-year workmanship warranty. Free estimates.",
  alternates: { canonical: "/services/roofing-siding" },
};

const processSteps = [
  {
    step: "01",
    title: "Free Inspection",
    desc: "We inspect your roof, siding, soffits, and gutters — taking photos and flagging every issue. You get an honest assessment of what needs attention now versus what can wait.",
  },
  {
    step: "02",
    title: "Proposal & Material Selection",
    desc: "We provide a fixed-price proposal with manufacturer options for shingles, siding, and trim. No vague line items — you know exactly what you're getting and what it costs.",
  },
  {
    step: "03",
    title: "Installation",
    desc: "Our crews work efficiently to minimize disruption. We protect your landscaping, keep the site clean daily, and complete most projects in just a few days.",
  },
  {
    step: "04",
    title: "Post-Job Inspection",
    desc: "We do a thorough walkthrough after completion — checking flashings, seams, and trim — and provide you with manufacturer warranty documentation alongside our workmanship warranty.",
  },
];

const relatedServices = [
  { label: "Additions & Framing", href: "/services/additions-framing" },
  { label: "Commercial Buildouts", href: "/services/commercial-buildouts" },
  { label: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
  { label: "Basement Finishing", href: "/services/basement-finishing" },
];

export default function RoofingSidingPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-20 px-4 text-white"
        style={{ background: "linear-gradient(135deg, #1A237E 0%, #0D47A1 100%)" }}
        aria-labelledby="roofing-heading"
      >
        <div className="max-w-5xl mx-auto">
          <h1
            id="roofing-heading"
            className="text-5xl md:text-7xl font-black uppercase text-white mb-4"
          >
            Roofing & Siding
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl mb-8">
            Protect your home&apos;s most critical systems. Quality roofing and siding installation backed by manufacturer warranties and JM&apos;s 5-year workmanship guarantee.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Get a Free Roofing Estimate
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="relative aspect-video rounded-lg overflow-hidden mb-10">
            <Image
              src="/images/roofing-siding-home.jpg"
              alt="Roofing and siding installation by JM Remodeling & Construction"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
            />
          </div>

          <AnimateOnScroll>
            <div className="prose prose-gray max-w-none space-y-5 text-gray-body leading-relaxed mb-12">
              <p>
                Your roof and siding are your home&apos;s first line of defense against Wisconsin winters. When they fail, the damage spreads fast — insulation, framing, drywall, and interior finishes all pay the price. JM Remodeling &amp; Construction installs and replaces roofing and siding systems built to withstand the Midwest climate.
              </p>
              <p>
                We install asphalt shingles, metal roofing, vinyl siding, fiber cement siding, and full soffit, fascia, and gutter systems. Every job starts with a thorough inspection and ends with a post-installation walkthrough so you know the job is done right.
              </p>
              <p>
                Insurance claim work is welcome. We work directly with adjusters, provide detailed documentation, and handle the coordination so you don&apos;t have to. Storm damage, wind damage, or simply an aging system — JM has you covered.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-black uppercase text-gray-heading mb-6">What We Install</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
              {[
                "Asphalt shingle replacement",
                "Metal roofing installation",
                "Vinyl siding",
                "Fiber cement siding (James Hardie)",
                "Soffit & fascia replacement",
                "Gutter installation & guards",
                "Roof flashing & underlayment",
                "Storm & wind damage repair",
                "Insurance claim coordination",
                "Ice & water shield systems",
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
            <form className="space-y-4" aria-label="Roofing and siding estimate request form">
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
                  <option>Roof replacement</option>
                  <option>Siding replacement</option>
                  <option>Storm damage repair</option>
                  <option>Gutters & soffit / fascia</option>
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

      <ServiceContent slug="roofing-siding" />
      <ServiceExtras slug="roofing-siding" path="/services/roofing-siding" />
    </>
  );
}
