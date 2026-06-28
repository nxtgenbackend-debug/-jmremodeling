import Link from "next/link";
import AnimateOnScroll from "../components/AnimateOnScroll";

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gray-heading py-16 px-4 text-center">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-4">
          <ol className="flex justify-center gap-2" role="list">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-white" aria-current="page">Contact</li>
          </ol>
        </nav>
        <h1
          className="text-5xl md:text-6xl font-black uppercase text-white mb-4"
          style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
        >
          Contact Us
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Ready to start your project? We respond to all inquiries within 24 hours.
        </p>
      </section>

      {/* Main */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact form */}
          <div className="lg:col-span-3">
            <AnimateOnScroll direction="left">
              <h2
                className="text-3xl font-black uppercase text-gray-heading mb-6"
                style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
              >
                Request a Free Estimate
              </h2>
              <form className="space-y-5" aria-label="Contact form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-bold text-gray-heading mb-1">Full Name *</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className="w-full border border-gray-border rounded px-4 py-3 text-sm text-gray-heading focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-bold text-gray-heading mb-1">Email *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full border border-gray-border rounded px-4 py-3 text-sm text-gray-heading focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-bold text-gray-heading mb-1">Phone Number *</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(414) 555-0000"
                    className="w-full border border-gray-border rounded px-4 py-3 text-sm text-gray-heading focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="contact-service" className="block text-sm font-bold text-gray-heading mb-1">Service Needed</label>
                  <select
                    id="contact-service"
                    name="service"
                    className="w-full border border-gray-border rounded px-4 py-3 text-sm text-gray-heading focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option>Kitchen Remodeling</option>
                    <option>Bathroom Remodeling</option>
                    <option>Basement Finishing</option>
                    <option>Commercial Buildout</option>
                    <option>Roofing & Siding</option>
                    <option>Addition / Framing</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-bold text-gray-heading mb-1">Tell Us About Your Project</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Describe your project, ideal timeline, and any specific questions or concerns..."
                    className="w-full border border-gray-border rounded px-4 py-3 text-sm text-gray-heading focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold uppercase tracking-[0.08em] py-4 text-base rounded hover:bg-primary-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Send My Request — It&apos;s Free
                </button>
                <p className="text-xs text-gray-400 text-center">We respond within 24 hours. No spam, no pressure.</p>
              </form>
            </AnimateOnScroll>
          </div>

          {/* Right column: info + map */}
          <div className="lg:col-span-2 space-y-6">
            <AnimateOnScroll direction="right">
              {/* Contact info */}
              <div className="bg-gray-bg rounded-lg p-6 border border-gray-border">
                <h3
                  className="text-xl font-black uppercase text-gray-heading mb-4"
                  style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
                >
                  Get In Touch
                </h3>
                <address className="not-italic space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div>
                      <p className="text-sm font-bold text-gray-heading">Address</p>
                      <p className="text-sm text-gray-body">7701 N. Teutonia Ave.<br />Milwaukee, WI 53209</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                    </svg>
                    <div>
                      <p className="text-sm font-bold text-gray-heading">Phone</p>
                      <a href="tel:+14143542800" className="text-sm text-primary font-bold hover:text-primary-dark transition-colors">(414) 354-2800</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <div>
                      <p className="text-sm font-bold text-gray-heading">Email</p>
                      <a href="mailto:customerservice@jmremodelingwi.com" className="text-sm text-primary hover:text-primary-dark transition-colors">customerservice@jmremodelingwi.com</a>
                    </div>
                  </div>
                </address>

                <div className="mt-5 pt-5 border-t border-gray-border">
                  <p className="text-sm font-bold text-gray-heading mb-2">Business Hours</p>
                  <table className="text-sm text-gray-body w-full">
                    <tbody>
                      <tr><td className="pr-4 py-0.5 font-medium">Mon–Fri</td><td>7:00 AM – 6:00 PM</td></tr>
                      <tr><td className="pr-4 py-0.5 font-medium">Saturday</td><td>8:00 AM – 2:00 PM</td></tr>
                      <tr><td className="pr-4 py-0.5 font-medium">Sunday</td><td>Closed</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Map placeholder */}
              <div
                className="rounded-lg overflow-hidden border border-gray-border bg-gray-light flex items-center justify-center"
                style={{ height: "250px" }}
                aria-label="Map showing JM General Contractors location at 7701 N. Teutonia Ave., Milwaukee WI 53202"
                role="img"
              >
                {/* Replace with Google Maps embed iframe */}
                <div className="text-center text-gray-400">
                  <svg className="w-10 h-10 mx-auto mb-2 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p className="text-sm font-medium">Map</p>
                  <p className="text-xs mt-1">7701 N. Teutonia Ave., Milwaukee, WI</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
