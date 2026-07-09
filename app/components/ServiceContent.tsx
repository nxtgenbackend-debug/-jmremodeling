import { serviceContent } from "../services/serviceContent";

const headingFont = {
  fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
};

interface ServiceContentProps {
  slug: string;
}

const Check = () => (
  <svg
    className="w-4 h-4 text-primary flex-shrink-0 mt-1"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/**
 * Long-form, per-trade content section for service pages. Renders unique
 * overview copy plus "what's included" and "cost factors" lists from
 * services/serviceContent.ts keyed by slug.
 */
export default function ServiceContent({ slug }: ServiceContentProps) {
  const info = serviceContent[slug];
  if (!info) return null;

  return (
    <section className="py-16 md:py-20 px-4 bg-white border-t border-gray-border">
      <div className="max-w-4xl mx-auto">
        {info.sections.map((section) => (
          <div key={section.heading} className="mb-12 last:mb-0">
            <h2
              className="text-3xl md:text-4xl text-gray-heading mb-5 uppercase"
              style={headingFont}
            >
              {section.heading}
            </h2>
            {section.paragraphs.map((p) => (
              <p
                key={p.slice(0, 40)}
                className="text-gray-body text-lg leading-relaxed mb-4"
              >
                {p}
              </p>
            ))}
          </div>
        ))}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-bg rounded-xl p-8 border border-gray-border">
            <h3
              className="text-xl text-gray-heading mb-5 uppercase"
              style={headingFont}
            >
              {info.includedTitle}
            </h3>
            <ul className="space-y-2.5" role="list">
              {info.included.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-gray-body">
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-bg rounded-xl p-8 border border-gray-border">
            <h3
              className="text-xl text-gray-heading mb-5 uppercase"
              style={headingFont}
            >
              {info.costTitle}
            </h3>
            <ul className="space-y-2.5" role="list">
              {info.costFactors.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-gray-body">
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
