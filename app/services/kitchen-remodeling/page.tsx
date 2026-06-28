import Link from "next/link";
import Button from "../../components/Button";
import AnimateOnScroll from "../../components/AnimateOnScroll";

const processSteps = [
  {
    step: "01",
    title: "Free Consultation",
    desc: "We visit your home, listen to your vision, review your space constraints, and discuss your budget honestly. No sales pressure — just expertise.",
  },
  {
    step: "02",
    title: "Design & Proposal",
    desc: "Our design team creates a detailed layout with material selections. You receive a fixed-price proposal with every line item spelled out before we break ground.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Our licensed crews get to work on your schedule. Your dedicated project manager provides weekly updates and is reachable every day the job is active.",
  },
  {
    step: "04",
    title: "Final Walk-Through",
    desc: "We walk the finished kitchen with you, address any punch-list items on the spot, and hand over your warranty documentation before we leave.",
  },
];

const relatedServices = [
  { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
  { label: "Basement Finishing", href: "/services/basement-finishing" },
  { label: "Additions & Framing", href: "/services/additions-framing" },
  { label: "Commercial Buildouts", href: "/services/commercial-buildouts" },
];

export default function KitchenRemodelingPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-20 px-4 text-white"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d2040 100%)" }}
        aria-labelledby="kitchen-heading"
      >
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6">
            <ol className="flex gap-2" role="list">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Kitchen Remodeling</li>
            </ol>
          </nav>
          <h1
            id="kitchen-heading"
            className="text-5xl md:text-7xl font-black uppercase text-white mb-4"
            style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
          >
            Kitchen Remodeling
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl mb-8">
            Wisconsin&apos;s most trusted kitchen remodeler. Custom designs, fixed pricing, and results that last.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Get a Free Kitchen Estimate
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Content column */}
        <div className="lg:col-span-2">
          {/* Placeholder image */}
          <div className="aspect-video bg-slate-200 rounded-lg mb-10 flex items-center justify-center text-gray-500">
            {/* Replace with next/image pointing to /public/services/kitchen-hero.jpg */}
            Kitchen Remodeling Photo
          </div>

          <AnimateOnScroll>
            <div className="prose prose-gray max-w-none space-y-5 text-gray-body leading-relaxed mb-12">
              <p>
                The kitchen is where families gather, meals are made, and memories are created. When your kitchen no longer fits your life — whether it&apos;s outdated cabinets, limited counter space, or a layout that fights against you — JM General Contractors is ready to rebuild it from the ground up.
              </p>
              <p>
                We&apos;ve completed over 200 kitchen remodels across Milwaukee, Waukesha, Brookfield, and the surrounding communities since 1998. Our approach is simple: we listen first, design second, and build only after you&apos;ve approved every detail. Every project comes with a fixed-price contract — no surprise change orders, no hidden costs.
              </p>
              <p>
                From semi-custom cabinet refacing to complete gut renovations with new plumbing, electrical, and structural changes, our crews handle every trade in-house. That means tighter timelines, cleaner jobsites, and a single point of accountability — your dedicated JM project manager.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Process */}
          <AnimateOnScroll>
            <h2
              className="text-3xl font-black uppercase text-gray-heading mb-8"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
            >
              Our Process
            </h2>
            <div className="space-y-6">
              {processSteps.map((step, i) => (
                <div key={step.step} className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm flex-shrink-0"
                    style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}>
                    {step.step}
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold uppercase text-gray-heading mb-1"
                      style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-body text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Inline CTA form */}
          <div className="bg-gray-bg rounded-lg p-6 border border-gray-border">
            <h3
              className="text-2xl font-black uppercase text-gray-heading mb-4"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
            >
              Get a Free Estimate
            </h3>
            <form className="space-y-4" aria-label="Kitchen remodeling estimate request form">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-heading mb-1">Full Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  className="w-full border border-gray-border rounded px-3 py-2 text-sm text-gray-heading focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-heading mb-1">Phone *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="(414) 555-0000"
                  className="w-full border border-gray-border rounded px-3 py-2 text-sm text-gray-heading focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="project-type" className="block text-sm font-bold text-gray-heading mb-1">Project Type</label>
                <select
                  id="project-type"
                  name="project-type"
                  className="w-full border border-gray-border rounded px-3 py-2 text-sm text-gray-heading focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white"
                >
                  <option value="">Select a project type</option>
                  <option>Full kitchen gut renovation</option>
                  <option>Cabinet replacement</option>
                  <option>Countertop replacement</option>
                  <option>Kitchen expansion / addition</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-heading mb-1">Tell us about your project</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Describe your project, timeline, and any questions..."
                  className="w-full border border-gray-border rounded px-3 py-2 text-sm text-gray-heading focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold uppercase tracking-[0.08em] py-3 rounded hover:bg-primary-dark transition-colors"
              >
                Send My Request
              </button>
              <p className="text-xs text-gray-400 text-center">We respond within 24 hours. No spam, ever.</p>
            </form>
          </div>

          {/* Related services */}
          <div className="bg-white rounded-lg p-6 border border-gray-border">
            <h3
              className="text-lg font-black uppercase text-gray-heading mb-4"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
            >
              Related Services
            </h3>
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

          {/* Quick contact */}
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
    </>
  );
}
