// Per-service metadata for structured data (Service + FAQPage schema) and the
// visible FAQ section. Facts reflect JM Remodeling: fixed-price contracts,
// in-house journeymen, Greater Milwaukee service area, permits handled in-house.

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceInfo {
  name: string; // Service schema name
  serviceType: string;
  description: string;
  faqs: ServiceFaq[];
}

export const serviceData: Record<string, ServiceInfo> = {
  "kitchen-remodeling": {
    name: "Kitchen Remodeling",
    serviceType: "Kitchen remodeling and renovation",
    description:
      "Custom kitchen remodeling in Greater Milwaukee — cabinetry, countertops, islands, and full gut renovations with fixed-price contracts and in-house trades.",
    faqs: [
      {
        q: "How much does a kitchen remodel cost in the Milwaukee area?",
        a: "Most full kitchen remodels we complete range from roughly $25,000 to $75,000+ depending on size, cabinetry, and whether the layout changes. Cabinets typically account for about a third of the budget. We provide a fixed-price contract up front so there are no surprise change orders.",
      },
      {
        q: "How long does a kitchen remodel take?",
        a: "After design and material ordering (about 4–8 weeks), construction usually runs 6–10 weeks. Semi-custom cabinet lead times are the biggest scheduling factor. Your dedicated project manager keeps you updated throughout.",
      },
      {
        q: "Do you handle permits and every trade?",
        a: "Yes. We pull all permits and self-perform the work with in-house journeymen — carpenters, plumbers, and electricians — so you have a single point of accountability from design through final walk-through.",
      },
    ],
  },
  "bathroom-remodeling": {
    name: "Bathroom Remodeling",
    serviceType: "Bathroom remodeling and renovation",
    description:
      "Spa-quality bathroom remodeling across Greater Milwaukee — walk-in showers, tub-to-shower conversions, custom tile, and vanities, with fixed-price contracts.",
    faqs: [
      {
        q: "What does a bathroom remodel cost in the Milwaukee area?",
        a: "Most full mid-range bathroom remodels fall between roughly $15,000 and $35,000, depending on size, layout changes, and finishes. Moving plumbing fixtures is the biggest cost driver. A mid-range bathroom remodel also returns about 67% at resale.",
      },
      {
        q: "Do you do tub-to-shower conversions?",
        a: "Yes — it's one of our most requested projects, and we currently offer $2,000 off tub-to-shower conversions. We build walk-in showers with proper waterproofing and custom tile, no overlays or shortcuts.",
      },
      {
        q: "How long will my bathroom be out of service?",
        a: "A typical full bathroom remodel takes about 2–4 weeks of on-site work. We sequence the trades to keep the project moving and leave the jobsite clean each day.",
      },
    ],
  },
  "basement-finishing": {
    name: "Basement Finishing",
    serviceType: "Basement finishing and remodeling",
    description:
      "Basement finishing in Greater Milwaukee — home theaters, wet bars, guest suites, gyms, and offices, including framing, egress, and waterproofing coordination.",
    faqs: [
      {
        q: "How much does it cost to finish a basement in Wisconsin?",
        a: "Finished basements typically run from about $30,000 to $80,000+ depending on square footage and features like a wet bar, full bath, or home theater. We provide a fixed-price contract covering framing, electrical, and finishes.",
      },
      {
        q: "Do I need an egress window?",
        a: "If you're adding a bedroom or sleeping area, Wisconsin code requires an egress window for safe exit. We handle egress installation and coordinate any waterproofing as part of the project.",
      },
      {
        q: "Will a finished basement add value to my home?",
        a: "Yes — finished basements add usable living space at a lower cost per square foot than an addition, and they're attractive to buyers, especially with a bathroom or dedicated media/office space.",
      },
    ],
  },
  "commercial-buildouts": {
    name: "Commercial Buildouts",
    serviceType: "Commercial construction and tenant buildout",
    description:
      "Turn-key commercial buildouts across Greater Milwaukee — offices, retail, restaurants, roofing, and additions, built to code and on schedule.",
    faqs: [
      {
        q: "What types of commercial spaces do you build out?",
        a: "We deliver offices, retail stores, restaurants, medical and professional suites, apartment and multi-family remodels, plus commercial roofing, siding, and concrete. We work with owners, landlords, and property managers on turn-key projects.",
      },
      {
        q: "Do you understand commercial codes and ADA requirements?",
        a: "Yes. We handle commercial permitting, code compliance, and ADA upgrades, and we schedule around your operations to minimize downtime and lost revenue.",
      },
      {
        q: "Can you work on a fast-track schedule?",
        a: "We offer fast-track scheduling when a lease or opening date demands it. Because we self-perform most trades in-house, we can compress timelines without losing quality control.",
      },
    ],
  },
  "roofing-siding": {
    name: "Roofing & Siding",
    serviceType: "Roofing and siding installation and replacement",
    description:
      "Roofing and siding installation and replacement built for Wisconsin winters — asphalt shingles, metal roofing, vinyl and fiber-cement siding, gutters, and storm repair.",
    faqs: [
      {
        q: "How do I know if I need a new roof?",
        a: "Common signs include curling or missing shingles, granules in your gutters, leaks or attic daylight, and a roof over 20 years old. We offer inspections and, as NRCA members with certified installers, honest repair-vs-replace guidance.",
      },
      {
        q: "What siding materials do you install?",
        a: "We install vinyl and fiber-cement siding, along with soffit, fascia, and gutter systems. As certified installers we back the work with manufacturer and labor warranties suited to the Wisconsin climate.",
      },
      {
        q: "Do you handle storm damage and insurance work?",
        a: "Yes — we repair storm damage to roofing and siding and can document the damage to support your insurance claim.",
      },
    ],
  },
  "additions-framing": {
    name: "Additions & Framing",
    serviceType: "Home additions and structural framing",
    description:
      "Room additions, second stories, sunrooms, and structural framing across Greater Milwaukee — engineering, permits, and finish-out handled in-house.",
    faqs: [
      {
        q: "How much does a home addition cost in the Milwaukee area?",
        a: "Additions vary widely with size and complexity — most range from roughly $60,000 to $200,000+. We get the design and engineering right before breaking ground and provide a fixed-price contract with every line item.",
      },
      {
        q: "Do you handle permits and structural engineering?",
        a: "Yes. We coordinate structural engineering, produce permit drawings, manage inspections, and self-perform foundation, framing, roofing, and finish work through one project manager.",
      },
      {
        q: "How long does an addition take to build?",
        a: "Most additions take about 2–4 months from ground-breaking to final walk-through, depending on size, foundation work, and permitting. We flag complexity up front, not mid-build.",
      },
    ],
  },
};
