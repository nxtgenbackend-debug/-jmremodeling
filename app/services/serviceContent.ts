// Long-form, per-trade content rendered by ServiceContent.tsx. Written to give
// each service page genuine depth (materials, scope, cost drivers) without the
// templated duplication the SEO audit flagged. Keep each trade distinct.

export interface ContentSection {
  heading: string;
  paragraphs: string[];
}

export interface ServiceContentInfo {
  sections: ContentSection[];
  includedTitle: string;
  included: string[];
  costTitle: string;
  costFactors: string[];
}

export const serviceContent: Record<string, ServiceContentInfo> = {
  "kitchen-remodeling": {
    sections: [
      {
        heading: "Kitchens designed around how you actually cook",
        paragraphs: [
          "A great kitchen remodel starts with the work triangle — the flow between sink, range, and refrigerator — and radiates out from there. Before we talk finishes, our designers map how your household moves through the space: where the coffee gets made, where the kids do homework, where two cooks can pass without colliding. That planning is what separates a kitchen that merely looks new from one that genuinely works better every day.",
          "Because JM is a design-build company with in-house carpenters, plumbers, and electricians, we can move walls, relocate plumbing, add an island circuit, or vault a ceiling without handing the job off to outside subs. One team owns the plan from the first sketch to the final adjustment of a cabinet door.",
        ],
      },
      {
        heading: "Cabinetry, countertops, and the details that last",
        paragraphs: [
          "Cabinetry is the backbone of the room and typically the largest line in the budget. We offer everything from quality semi-custom lines to fully custom builds, with soft-close hardware, drawer organization, and storage solutions sized to your kitchen — deep pan drawers, pull-out pantries, and appliance garages that keep counters clear.",
          "For countertops we work in quartz, granite, quartzite, marble, and solid surface, and we'll walk you through the trade-offs in durability, maintenance, and cost so the choice fits your life, not just a showroom photo. Tile backsplashes, undercabinet lighting, and updated electrical tie the room together and are handled by our own crews.",
        ],
      },
    ],
    includedTitle: "What's included in a JM kitchen remodel",
    included: [
      "In-home design consultation and detailed layout",
      "Semi-custom or fully custom cabinetry",
      "Countertop fabrication and installation",
      "Tile backsplash and flooring",
      "Plumbing and electrical updates by in-house trades",
      "Lighting design, including undercabinet and island circuits",
      "Fixed-price contract and dedicated project manager",
    ],
    costTitle: "What drives the cost of a kitchen remodel",
    costFactors: [
      "Cabinetry level (stock vs. semi-custom vs. custom)",
      "Countertop material and square footage",
      "Whether the layout or plumbing changes",
      "Appliance package and electrical upgrades",
      "Flooring, lighting, and finish selections",
    ],
  },
  "bathroom-remodeling": {
    sections: [
      {
        heading: "Waterproofing first, beauty second — and both done right",
        paragraphs: [
          "Bathrooms are the least forgiving room in the house. Behind the tile, proper waterproofing, sloped substrates, and correctly installed vapor barriers are what keep a beautiful shower from becoming a mold problem in five years. Our crews build showers to last — no overlays, no shortcuts — because the parts you can't see are the parts that fail first when they're done wrong.",
          "From there we focus on the experience: a curbless walk-in shower with a frameless glass enclosure, heated tile floors for Wisconsin winters, a freestanding soaking tub, or a double vanity that finally ends the morning traffic jam. Every fixture is installed by our own licensed plumbers.",
        ],
      },
      {
        heading: "Tub-to-shower conversions and full master baths",
        paragraphs: [
          "Tub-to-shower conversions are one of our most requested projects — especially for homeowners planning to age in place — and we currently offer $2,000 off. For homes that still need a tub elsewhere, converting a secondary bath to a spacious walk-in shower is one of the highest-satisfaction upgrades you can make.",
          "On full master bath renovations we coordinate tile, lighting, ventilation, and storage into one cohesive design, then build it on a fixed-price contract so the budget you approve is the budget you pay.",
        ],
      },
    ],
    includedTitle: "What's included in a JM bathroom remodel",
    included: [
      "Design consultation and material selection",
      "Professional waterproofing and substrate prep",
      "Custom tile showers and flooring",
      "Vanity, countertop, and fixture installation",
      "Walk-in showers and tub-to-shower conversions",
      "Ventilation and moisture control",
      "Licensed in-house plumbing and electrical",
    ],
    costTitle: "What drives the cost of a bathroom remodel",
    costFactors: [
      "Size of the bathroom and scope of demolition",
      "Whether plumbing fixtures are relocated",
      "Tile selection and shower complexity",
      "Fixtures, glass, and vanity quality",
      "Add-ons like heated floors or freestanding tubs",
    ],
  },
  "basement-finishing": {
    sections: [
      {
        heading: "Turn wasted square footage into your favorite room",
        paragraphs: [
          "A finished basement is the most cost-effective square footage you can add to a home — you already own the space and the foundation. The difference between a basement that feels like a basement and one that feels like a true living space comes down to getting moisture control, insulation, lighting, and ceiling height right from the start.",
          "We start by assessing moisture and drainage, then frame, insulate, and finish to code with the layout you want: a home theater, a wet bar, a guest suite, a home gym, a playroom, or a dedicated office. Because we self-perform the framing, electrical, and finish work, the whole project moves on one schedule.",
        ],
      },
      {
        heading: "Egress, moisture, and code — handled",
        paragraphs: [
          "If your plan includes a bedroom or sleeping area, Wisconsin code requires an egress window for safe exit, and we handle the window, the well, and the excavation. We also coordinate any waterproofing needed so your finishes are protected for the long haul, and we manage permits and inspections from start to finish.",
          "The result is a lower level that's warm, dry, well-lit, and genuinely comfortable — space your family will actually use year-round.",
        ],
      },
    ],
    includedTitle: "What's included in a finished basement",
    included: [
      "Moisture and drainage assessment",
      "Framing, insulation, and drywall",
      "Egress window installation where required",
      "Electrical, lighting, and low-voltage wiring",
      "Wet bars, media rooms, and bathrooms",
      "Flooring and finish carpentry",
      "Permits, inspections, and fixed-price contract",
    ],
    costTitle: "What drives the cost of finishing a basement",
    costFactors: [
      "Total square footage being finished",
      "Adding a bathroom or wet bar (plumbing)",
      "Egress window and any waterproofing needs",
      "Ceiling treatment and lighting design",
      "Flooring and finish level",
    ],
  },
  "commercial-buildouts": {
    sections: [
      {
        heading: "Turn-key commercial spaces, built around your schedule",
        paragraphs: [
          "Commercial work runs on different rules than residential — code compliance, ADA accessibility, inspections, and above all, schedule. A delayed opening or an extended closure costs real revenue, so we plan commercial buildouts backward from your deadline and keep the trades sequenced tightly to hit it.",
          "We partner with business owners, landlords, and property managers to deliver offices, retail stores, restaurants, medical and professional suites, and multi-family and apartment remodels. Because our journeymen handle carpentry, electrical, roofing, and concrete in-house, we keep quality control and scheduling under one roof.",
        ],
      },
      {
        heading: "Code, ADA, and fast-track delivery",
        paragraphs: [
          "We manage commercial permitting and build to code, including the ADA upgrades that tenant improvements frequently trigger. When a lease date or opening can't move, we offer fast-track scheduling and phase the work to keep as much of your operation running as possible.",
          "From a single-suite office refresh to a full restaurant buildout with commercial kitchen requirements, you get one accountable team and a fixed scope that respects your bottom line.",
        ],
      },
    ],
    includedTitle: "Commercial services we deliver",
    included: [
      "Office and retail tenant improvements",
      "Restaurant and commercial kitchen buildouts",
      "Medical and professional suites",
      "Apartment and multi-family remodels",
      "Commercial roofing, siding, and concrete",
      "ADA compliance upgrades",
      "Fast-track scheduling and phased work",
    ],
    costTitle: "What drives the cost of a commercial buildout",
    costFactors: [
      "Square footage and existing conditions",
      "Mechanical, electrical, and plumbing scope",
      "Code and ADA compliance requirements",
      "Finish level and specialty systems",
      "Schedule (fast-track vs. standard)",
    ],
  },
  "roofing-siding": {
    sections: [
      {
        heading: "Systems built for Wisconsin's freeze-thaw climate",
        paragraphs: [
          "Your roof and siding are a system, not just a surface. In our climate, ice dams, freeze-thaw cycles, and summer storms punish weak details — poor ventilation, thin underlayment, or sloppy flashing — long before the shingles themselves wear out. As NRCA members with certified installers, we build the whole assembly to last: proper attic ventilation, ice-and-water shield, quality underlayment, and correctly integrated flashing.",
          "We install and replace asphalt shingles and metal roofing, along with vinyl and fiber-cement siding, soffit, fascia, and gutter systems. Every job starts with a thorough inspection so you get an honest repair-versus-replace recommendation, not an automatic upsell.",
        ],
      },
      {
        heading: "Storm damage, warranties, and honest inspections",
        paragraphs: [
          "When a storm hits, we repair roofing and siding damage and document it clearly to support your insurance claim. Our work is backed by manufacturer and labor warranties, and as certified installers we can offer enhanced coverage that off-brand contractors can't.",
          "Whether you need a single repair or a full tear-off and replacement, we protect your landscaping, keep the site clean, and leave the assembly ready for the next Wisconsin winter.",
        ],
      },
    ],
    includedTitle: "Roofing & siding services",
    included: [
      "Asphalt shingle roof replacement",
      "Metal roofing installation",
      "Vinyl and fiber-cement siding",
      "Soffit, fascia, and gutter systems",
      "Attic ventilation and ice-dam prevention",
      "Storm-damage repair and insurance documentation",
      "Manufacturer and labor warranties",
    ],
    costTitle: "What drives the cost of roofing & siding",
    costFactors: [
      "Roof size, pitch, and number of layers to remove",
      "Material choice (asphalt, metal, fiber-cement)",
      "Ventilation, flashing, and deck repairs",
      "Siding square footage and trim details",
      "Gutter, soffit, and fascia scope",
    ],
  },
  "additions-framing": {
    sections: [
      {
        heading: "Get the space you need without the cost of moving",
        paragraphs: [
          "When your home no longer fits your life — a growing family, a home office, an aging parent moving in — a well-built addition is often smarter than selling. You keep your neighborhood, your lot, and your equity, and you get exactly the space you designed. The key is getting the structure and engineering right before anyone breaks ground.",
          "JM handles the entire process in-house: structural engineering coordination, permit drawings, foundation work, framing, roofing, insulation, and complete interior finish-out. Because our own crews do the framing and finish work, the addition matches your existing home instead of looking bolted on.",
        ],
      },
      {
        heading: "Engineered, permitted, and built to Wisconsin code",
        paragraphs: [
          "Room additions, second-story additions, sunrooms, three-season porches, and garage conversions each carry their own structural and code considerations. We flag complexity up front — foundation depth for our frost line, load paths, egress, energy code — rather than discovering it mid-build.",
          "You get a fixed-price contract with every line item, full permit management, and a dedicated project manager who is reachable every day the job is active, all the way through the final walk-through and your workmanship warranty.",
        ],
      },
    ],
    includedTitle: "Additions & framing we build",
    included: [
      "First-floor and second-story additions",
      "Master-suite and in-law additions",
      "Sunrooms and three-season porches",
      "Garage conversions and ADUs",
      "Structural framing and engineering coordination",
      "Foundation, roofing, and insulation",
      "Full permit management and finish-out",
    ],
    costTitle: "What drives the cost of an addition",
    costFactors: [
      "Square footage and number of stories",
      "Foundation and structural requirements",
      "Roofline integration with the existing home",
      "Mechanical, electrical, and plumbing extensions",
      "Interior finish level",
    ],
  },
};
