const headingFont = { fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" };

const items = [
  {
    stat: "35+",
    label: "Years in Business",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    stat: "500+",
    label: "Projects Completed",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    stat: "NARI",
    label: "Award-Winning",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="6" />
        <polyline points="8.21 13.89 7 22 12 19 17 22 15.79 13.88" />
      </svg>
    ),
  },
  {
    stat: "Licensed",
    label: "& Fully Insured",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-gray-border" aria-label="Company credentials">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-border">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-3 py-6 px-4 justify-center sm:justify-start">
              <div className="w-10 h-10 text-primary flex-shrink-0">{item.icon}</div>
              <div>
                <p className="text-2xl text-gray-heading leading-none" style={headingFont}>{item.stat}</p>
                <p className="text-xs text-gray-body uppercase tracking-wide font-semibold mt-0.5">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
