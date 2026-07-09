import { SITE_URL } from "../site";
import { serviceData } from "../services/serviceData";

const headingFont = {
  fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
};

interface ServiceExtrasProps {
  slug: string;
  /** Route path, e.g. "/services/kitchen-remodeling" */
  path: string;
}

/**
 * Renders Service + BreadcrumbList + FAQPage JSON-LD and a visible FAQ section
 * for a given service page. Data comes from services/serviceData.ts keyed by slug.
 */
export default function ServiceExtras({ slug, path }: ServiceExtrasProps) {
  const info = serviceData[slug];
  if (!info) return null;

  const url = `${SITE_URL}${path}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: info.name,
    serviceType: info.serviceType,
    description: info.description,
    url,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 43.1156,
        longitude: -87.9503,
      },
      geoRadius: 40000,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/services`,
      },
      { "@type": "ListItem", position: 3, name: info.name, item: url },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: info.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section
        className="py-16 md:py-20 px-4 bg-gray-bg border-t border-gray-border"
        aria-labelledby={`faq-${slug}`}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary mb-3 text-center">
            Common Questions
          </p>
          <h2
            id={`faq-${slug}`}
            className="text-3xl md:text-4xl text-gray-heading mb-10 text-center"
            style={headingFont}
          >
            {info.name} FAQs
          </h2>
          <div className="space-y-4">
            {info.faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-white rounded-lg border border-gray-border p-5 [&_summary]:cursor-pointer"
              >
                <summary className="flex items-center justify-between gap-4 font-bold text-gray-heading list-none">
                  {f.q}
                  <span
                    className="text-primary text-xl transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="text-gray-body leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
