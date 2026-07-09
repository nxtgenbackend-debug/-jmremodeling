import Link from "next/link";
import Image from "next/image";
import Button from "../../components/Button";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import ServiceExtras from "../../components/ServiceExtras";
import ServiceContent from "../../components/ServiceContent";

export const metadata = {
  title: "Home Additions & Framing Milwaukee, WI",
  description:
    "Room additions, sunrooms & structural framing across Milwaukee and Waukesha — engineering, permits, and finish-out handled in-house since 1990.",
  alternates: { canonical: "/services/additions-framing" },
};

const processSteps = [
  {
    step: "01",
    title: "Free Consultation",
    desc: "We walk your property, discuss your space goals, and give you an honest assessment of what's structurally and permit-wise possible. We flag complexity upfront — not mid-build.",
  },
  {
    step: "02",
    title: "Design, Engineering & Proposal",
    desc: "We coordinate with structural engineers, handle permit drawings, and deliver a fixed-price proposal with every line item — foundation, framing, roofing, insulation, and finish work.",
  },
  {
    step: "03",
    title: "Permitted Build",
    desc: "We pull all permits, manage inspections, and self-perform the majority of the work. Your dedicated project manager keeps you updated throughout every phase.",
  },
  {
    step: "04",
    title: "Final Walk-Through",
    desc: "We walk the completed addition with you, close out all permits, and hand over your 5-year workmanship warranty before we leave the jobsite.",
  },
];

const relatedServices = [
  { label: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
  { label: "Basement Finishing", href: "/services/basement-finishing" },
  { label: "Roofing & Siding", href: "/services/roofing-siding" },
  { label: "Commercial Buildouts", href: "/services/commercial-buildouts" },
];

export default function AdditionsFramingPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-20 px-4 text-white"
        style={{ background: "linear-gradient(135deg, #1A237E 0%, #0D47A1 100%)" }}
        aria-labelledby="additions-heading"
      >
        <div className="max-w-5xl mx-auto">
          <h1
            id="additions-heading"
            className="text-5xl md:text-7xl font-black uppercase text-white mb-4"
          >
            Additions & Framing
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl mb-8">
            Need more space? JM builds room additions, second stories, sunrooms, and garage conversions — fully permitted, engineered, and built to Wisconsin code.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Get a Free Addition Estimate
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="relative aspect-video rounded-lg overflow-hidden mb-10">
            <Image
              src="/images/addition-framing.jpg"
              alt="Room addition framing in progress by JM Remodeling & Construction"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
            />
          </div>

          <AnimateOnScroll>
            <div className="prose prose-gray max-w-none space-y-5 text-gray-body leading-relaxed mb-12">
              <p>
                When your home no longer fits your life — whether it&apos;s a growing family, a need for a dedicated home office, or an aging parent moving in — an addition is often the smartest investment you can make. You get the space you need without the disruption and cost of moving.
              </p>
              <p>
                JM Remodeling &amp; Construction has been building additions and structural framing projects across Milwaukee, Waukesha, and surrounding communities since 1990. We handle everything: structural engineering coordination, permit management, foundation work, framing, roofing, insulation, and complete interior finish-out.
              </p>
              <p>
                Our approach is to get the design and engineering right before we break ground — not make it up as we go. Every addition project comes with a fixed-price contract, full permit management, and a dedicated project manager who is reachable every day the job is active.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-black uppercase text-gray-heading mb-6">What We Build</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
              {[
                "Room additions (first floor)",
                "Second-story additions",
                "Master suite additions",
                "Sunrooms & three-season porches",
                "Garage conversions & ADUs",
                "Mudrooms & entryway additions",
                "Structural framing & repairs",
                "Engineering coordination",
                "Full permit management",
                "Insulation & exterior envelope",
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
            <form className="space-y-4" aria-label="Addition and framing estimate request form">
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
                  <option>Room addition</option>
                  <option>Second-story addition</option>
                  <option>Sunroom / three-season porch</option>
                  <option>Garage conversion</option>
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

      <ServiceContent slug="additions-framing" />
      <ServiceExtras slug="additions-framing" path="/services/additions-framing" />
    </>
  );
}
