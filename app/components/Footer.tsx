import Link from "next/link";

const services = [
  { label: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
  { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
  { label: "Basement Finishing", href: "/services/basement-finishing" },
  { label: "Commercial Buildouts", href: "/services/commercial-buildouts" },
  { label: "Roofing & Siding", href: "/services/roofing-siding" },
  { label: "Additions & Framing", href: "/services/additions-framing" },
];

const serviceAreas = [
  "Milwaukee, WI",
  "Waukesha, WI",
  "Brookfield, WI",
  "Wauwatosa, WI",
  "Mequon, WI",
  "Oconomowoc, WI",
  "Pewaukee, WI",
  "Menomonee Falls, WI",
];

export default function Footer() {
  return (
    <footer className="bg-black text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company */}
          <div>
            <div className="mb-4">
              <span
                className="text-4xl font-black text-primary leading-none"
                style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
              >
                JM
              </span>
              <p
                className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1"
                style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
              >
                General Contractors
              </p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Wisconsin&apos;s trusted remodeling and construction partner since 1998. We build homes and businesses — and the relationships that last a lifetime.
            </p>
            <p className="text-gray-400 text-xs">
              License #: WI-GC-1998-0042
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-widest text-white mb-4"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
            >
              Our Services
            </h3>
            <ul className="space-y-2" role="list">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-widest text-white mb-4"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
            >
              Service Areas
            </h3>
            <ul className="space-y-2" role="list">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm text-gray-400">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-widest text-white mb-4"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
            >
              Contact Us
            </h3>
            <address className="not-italic space-y-3">
              <p className="text-sm text-gray-400">
                1234 Construction Ave<br />
                Milwaukee, WI 53202
              </p>
              <p>
                <a
                  href="tel:+14145550100"
                  className="text-sm text-white font-bold hover:text-primary transition-colors"
                >
                  (414) 555-0100
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@jmgeneralcontractors.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  info@jmgeneralcontractors.com
                </a>
              </p>
            </address>
            <div className="mt-4">
              <h4
                className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2"
                style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
              >
                Hours
              </h4>
              <p className="text-sm text-gray-400">Mon–Fri: 7am–6pm</p>
              <p className="text-sm text-gray-400">Sat: 8am–2pm</p>
              <p className="text-sm text-gray-400">Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} JM General Contractors. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>License #: WI-GC-1998-0042</span>
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
