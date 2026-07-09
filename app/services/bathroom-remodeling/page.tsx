import Link from "next/link";
import Image from "next/image";
import Button from "../../components/Button";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import ServiceExtras from "../../components/ServiceExtras";
import ServiceContent from "../../components/ServiceContent";

export const metadata = {
  title: "Bathroom Remodeling Milwaukee, WI",
  description:
    "Spa-quality bathroom remodeling across Greater Milwaukee — walk-in showers, tub-to-shower conversions, precision tile work. Licensed & insured. Free estimates.",
  alternates: { canonical: "/services/bathroom-remodeling" },
};

const processSteps = [
  {
    step: "01",
    title: "Free Consultation",
    desc: "We visit your home, measure every inch, and listen to what you actually want — whether that's a quick refresh or a full spa-level overhaul. No pressure, just honest input.",
  },
  {
    step: "02",
    title: "Design & Proposal",
    desc: "We put together a detailed layout with tile selections, fixture specs, and a fixed-price proposal. You approve every line item before a single tool comes out.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Our licensed crews handle demo, plumbing, tile, electrical, and finish work. A dedicated project manager keeps you updated daily and stays reachable throughout.",
  },
  {
    step: "04",
    title: "Final Walk-Through",
    desc: "We walk the finished bathroom with you, handle any punch-list items on the spot, and hand over your 5-year workmanship warranty before we leave.",
  },
];

const relatedServices = [
  { label: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
  { label: "Basement Finishing", href: "/services/basement-finishing" },
  { label: "Additions & Framing", href: "/services/additions-framing" },
  { label: "Commercial Buildouts", href: "/services/commercial-buildouts" },
];

export default function BathroomRemodelingPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-20 px-4 text-white"
        style={{ background: "linear-gradient(135deg, #1A237E 0%, #0D47A1 100%)" }}
        aria-labelledby="bathroom-heading"
      >
        <div className="max-w-5xl mx-auto">
          <h1
            id="bathroom-heading"
            className="text-5xl md:text-7xl font-black uppercase text-white mb-4"
          >
            Bathroom Remodeling
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl mb-8">
            Spa-quality results for Wisconsin homeowners. Precision tile work, custom showers, and flawless finishes — on time and on budget.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Get a Free Bathroom Estimate
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Content column */}
        <div className="lg:col-span-2">
          <div className="relative aspect-video rounded-lg overflow-hidden mb-10">
            <Image
              src="/images/bathroom-marble.jpg"
              alt="Luxury bathroom remodel by JM Remodeling & Construction"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
            />
          </div>

          <AnimateOnScroll>
            <div className="prose prose-gray max-w-none space-y-5 text-gray-body leading-relaxed mb-12">
              <p>
                Your bathroom should be a place to recharge — not a source of frustration. Whether you&apos;re dealing with cracked tile, a dated vanity, or a shower that barely functions, JM Remodeling &amp; Construction transforms bathrooms into spaces you&apos;re proud of.
              </p>
              <p>
                We&apos;ve remodeled hundreds of bathrooms across Milwaukee, Waukesha, Brookfield, and surrounding communities since 1990. From powder room touch-ups to full master bath gut renovations with custom tile showers, heated floors, and freestanding tubs — our crews handle every trade in-house.
              </p>
              <p>
                Every bathroom project comes with a fixed-price contract. That means no surprise change orders, no hidden costs, and a single point of accountability from demo day through final grout sealing. Your dedicated JM project manager is reachable every day the job is active.
              </p>
            </div>
          </AnimateOnScroll>

          {/* What's Included */}
          <AnimateOnScroll>
            <h2 className="text-3xl font-black uppercase text-gray-heading mb-6">What We Handle</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
              {[
                "Walk-in shower design & tile",
                "Freestanding tub installation",
                "Double vanity & lighting",
                "Heated floor systems",
                "Full plumbing rough-in",
                "Custom tile & stone work",
                "Glass enclosures & frameless doors",
                "Exhaust fan & electrical upgrades",
                "Niche & built-in storage",
                "Accessibility & ADA modifications",
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

          {/* Process */}
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

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-gray-bg rounded-lg p-6 border border-gray-border">
            <h3 className="text-2xl font-black uppercase text-gray-heading mb-4">Get a Free Estimate</h3>
            <form className="space-y-4" aria-label="Bathroom remodeling estimate request form">
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
                  <option>Full bathroom gut renovation</option>
                  <option>Shower replacement / conversion</option>
                  <option>Vanity & fixture update</option>
                  <option>Tile replacement</option>
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

      <ServiceContent slug="bathroom-remodeling" />
      <ServiceExtras slug="bathroom-remodeling" path="/services/bathroom-remodeling" />
    </>
  );
}
