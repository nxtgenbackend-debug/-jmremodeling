import Link from "next/link";
import Image from "next/image";
import Button from "../../components/Button";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import ServiceExtras from "../../components/ServiceExtras";
import ServiceContent from "../../components/ServiceContent";

export const metadata = {
  title: "Basement Finishing Milwaukee, WI",
  description:
    "Turn your unfinished basement into living space — home theaters, wet bars, guest suites, and home gyms. Serving Greater Milwaukee since 1990. Free estimates.",
  alternates: { canonical: "/services/basement-finishing" },
};

const processSteps = [
  {
    step: "01",
    title: "Free Consultation",
    desc: "We assess your basement — moisture levels, ceiling height, egress options, and your vision. We tell you exactly what's possible and what it will cost before anything starts.",
  },
  {
    step: "02",
    title: "Design & Proposal",
    desc: "We develop a layout that fits how you actually live, with material selections and a fixed-price proposal covering every trade — framing, electrical, HVAC, drywall, and flooring.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Our crews handle every phase in-house. Your dedicated project manager provides regular updates and is reachable every day the job is active.",
  },
  {
    step: "04",
    title: "Final Walk-Through",
    desc: "We walk the finished space with you, address any punch-list items on the spot, and hand over your 5-year workmanship warranty before we leave.",
  },
];

const relatedServices = [
  { label: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
  { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
  { label: "Additions & Framing", href: "/services/additions-framing" },
  { label: "Commercial Buildouts", href: "/services/commercial-buildouts" },
];

export default function BasementFinishingPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-20 px-4 text-white"
        style={{ background: "linear-gradient(135deg, #1A237E 0%, #0D47A1 100%)" }}
        aria-labelledby="basement-heading"
      >
        <div className="max-w-5xl mx-auto">
          <h1
            id="basement-heading"
            className="text-5xl md:text-7xl font-black uppercase text-white mb-4"
          >
            Basement Finishing
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl mb-8">
            Stop wasting your basement. JM transforms raw concrete into finished, livable square footage — built to Wisconsin code and backed by a 5-year warranty.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Get a Free Basement Estimate
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="relative aspect-video rounded-lg overflow-hidden mb-10">
            <Image
              src="/images/basement-fireplace.jpg"
              alt="Finished basement with fireplace by JM Remodeling & Construction"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
            />
          </div>

          <AnimateOnScroll>
            <div className="prose prose-gray max-w-none space-y-5 text-gray-body leading-relaxed mb-12">
              <p>
                An unfinished basement is one of the most underutilized assets in your home. Whether you want a home theater, a kids&apos; playroom, a guest suite, a home gym, or a wet bar — JM Remodeling &amp; Construction has been turning raw basements into finished living spaces since 1990.
              </p>
              <p>
                We handle every trade in-house: framing, insulation, drywall, flooring, electrical, HVAC tie-ins, and plumbing for bathroom or bar additions. That means fewer subcontractors, tighter scheduling, and a single project manager who owns the outcome from start to finish.
              </p>
              <p>
                Every project starts with a thorough moisture and structural assessment. If there are issues to address before finishing, we tell you upfront — not halfway through the build. You get a fixed-price contract, no change-order surprises, and a space that adds real value to your home.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-3xl font-black uppercase text-gray-heading mb-6">What We Build</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
              {[
                "Home theaters & media rooms",
                "Wet bars & entertainment spaces",
                "Guest suites & in-law quarters",
                "Home gyms & fitness rooms",
                "Playrooms & rec rooms",
                "Home offices & studios",
                "Egress window installation",
                "Full bathroom rough-in & finish",
                "Waterproofing coordination",
                "Open-concept layouts",
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
            <form className="space-y-4" aria-label="Basement finishing estimate request form">
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
                  <option>Full basement finishing</option>
                  <option>Home theater / media room</option>
                  <option>Wet bar / entertainment space</option>
                  <option>Guest suite / bathroom addition</option>
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

      <ServiceContent slug="basement-finishing" />
      <ServiceExtras slug="basement-finishing" path="/services/basement-finishing" />
    </>
  );
}
