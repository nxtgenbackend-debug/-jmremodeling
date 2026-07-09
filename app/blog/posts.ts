// Shared blog post data — single source of truth for the homepage teasers,
// the /blog index, and the /blog/[slug] article pages.
// Topics mirror the live jmremodelingwi.com blog; copy is original.

export interface PostSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface PostFaq {
  q: string;
  a: string;
}

export interface Post {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  description: string; // meta description
  intro: string;
  sections: PostSection[];
  faq: PostFaq[];
}

export const posts: Post[] = [
  {
    slug: "premier-collection-remodeling",
    category: "Premier by JM",
    title: "Why Homeowners Are Choosing The Premier Collection for Their Remodeling Projects",
    excerpt:
      "Successful remodeling starts with clear planning, thoughtful design, and an organized process. Here's what sets the Premier Collection apart.",
    date: "2026-06-11",
    description:
      "The Premier Collection by JM Remodeling brings a design-led, single-point-of-accountability process to high-end Milwaukee and Florida remodels.",
    intro:
      "A remodel succeeds or fails long before the first wall comes down — in the planning, the design, and the process behind it. That is the idea behind Premier by JM: a design-build approach for homeowners who want a distinctive, one-of-one result and a team that manages every detail. Here is why more homeowners are choosing the Premier Collection for their most important projects.",
    sections: [
      {
        heading: "Design-led from the first conversation",
        paragraphs: [
          "Premier projects begin with design, not demolition. Our team listens closely to how you live, then develops a plan that balances the look you want with how the space actually functions day to day. Because JM is a full design-build company, the people who design your project are the same people accountable for building it — nothing gets lost in a handoff between an architect and an unfamiliar crew.",
        ],
      },
      {
        heading: "Every trade under one roof",
        paragraphs: [
          "The Premier Collection draws on JM's in-house journeymen — carpenters, plumbers, electricians, roofers, and sheet-metal workers — plus custom carpentry and finish specialists. Keeping the trades in-house is what makes a genuinely custom result possible: rare stone, hand-built cabinetry, and made-to-order details, all coordinated by one project manager who is reachable throughout the build.",
        ],
      },
      {
        heading: "An organized, predictable process",
        paragraphs: [
          "Premier clients get a detailed, fixed scope with clear milestones and timelines, so a complex high-end project stays organized from start to final walk-through. That structure is what lets us take on ambitious work — from art-deco interiors to full luxury residences — without the chaos that gives remodeling a bad name.",
        ],
      },
    ],
    faq: [
      {
        q: "What is the Premier Collection by JM Remodeling?",
        a: "It is JM's design-build division for high-end, fully custom interiors and residences — combining in-house craftsmanship, bespoke materials, and a single point of accountability from design through completion.",
      },
      {
        q: "Is Premier only for whole-home projects?",
        a: "No. While Premier suits luxury whole-home builds, the same design-led process applies to standout kitchens, primary suites, and one-of-one feature spaces.",
      },
    ],
  },
  {
    slug: "time-to-replace-your-roof",
    category: "Roofing",
    title: "How to Know It's Time to Replace Your Roof",
    excerpt:
      "Your roof protects your home and its energy efficiency. Here are the warning signs that it's time to replace rather than repair.",
    date: "2026-05-12",
    description:
      "The clearest signs a Wisconsin roof needs replacing — age, curling or missing shingles, granule loss, leaks, and rising energy bills — from JM Remodeling.",
    intro:
      "Your roof is your home's first line of defense against Wisconsin's freeze-thaw winters and summer storms — and its condition quietly affects your energy bills, too. Most roofs give clear warnings before they fail. Knowing what to look for helps you replace on your terms instead of scrambling after a leak. Here are the signs it's time to plan a replacement.",
    sections: [
      {
        heading: "Age: the first thing to check",
        paragraphs: [
          "A typical asphalt-shingle roof lasts 20 to 25 years in our climate. If your roof is approaching that range — or you don't know its age because it came with the house — that alone is reason for an inspection. Roofs near the end of their service life often look acceptable from the ground while failing where it matters.",
        ],
      },
      {
        heading: "Shingle and granule warning signs",
        paragraphs: [
          "Walk your property after a storm and look up. Any of these means it's time for a professional evaluation:",
        ],
        list: [
          "Curling, cupping, or buckling shingles",
          "Missing shingles or exposed underlayment",
          "Bald spots where protective granules have worn away",
          "Granules collecting in gutters and downspouts",
          "Cracked, brittle, or moss-covered areas",
        ],
      },
      {
        heading: "Leaks, daylight, and energy bills",
        paragraphs: [
          "Water stains on ceilings, damp attic insulation, or daylight visible through the roof boards are urgent signs — the damage is already spreading to framing and drywall. A sudden rise in heating or cooling costs can also point to a roof and attic that are no longer sealing and venting properly. When repairs start stacking up, replacement is usually the more economical choice over time.",
        ],
      },
    ],
    faq: [
      {
        q: "How long does a roof last in Wisconsin?",
        a: "Most asphalt-shingle roofs last about 20–25 years here. Freeze-thaw cycles, ice dams, and storms can shorten that, which is why regular inspections matter as a roof ages.",
      },
      {
        q: "Should I repair or replace my roof?",
        a: "Isolated damage on a newer roof is usually repairable. Widespread wear, recurring leaks, or an aging roof generally make full replacement the safer, more cost-effective option.",
      },
    ],
  },
  {
    slug: "reasons-to-build-a-deck",
    category: "Porches & Decks",
    title: "Enhancing Your Home: 3 Reasons to Build a Deck in Your Backyard",
    excerpt:
      "A deck expands your living space, boosts backyard functionality, and adds lasting value. Here are three reasons to build one.",
    date: "2026-04-14",
    description:
      "Three reasons to add a deck in Milwaukee: more living space, better outdoor functionality, and strong resale value — custom-built by JM Remodeling.",
    intro:
      "Wisconsin summers are short and worth savoring, and few upgrades make the season more livable than a well-built deck. Beyond the enjoyment, a deck is one of the more practical improvements you can make — it expands your usable space, organizes your backyard, and holds its value at resale. Here are three reasons homeowners across Greater Milwaukee choose to build one.",
    sections: [
      {
        heading: "1. More living space — outdoors",
        paragraphs: [
          "A deck effectively adds a room to your home without the cost of an enclosed addition. It becomes the place you eat dinner in July, host friends, or unwind at the end of the day. Thoughtful design — built-in seating, defined dining and lounge zones, the right railings — turns a plain slab of yard into a space you'll actually use all season.",
        ],
      },
      {
        heading: "2. Better backyard functionality",
        paragraphs: [
          "A deck brings order to an awkward or sloped yard, creating a level, purposeful surface that connects your home to the outdoors. It makes entertaining easier, keeps foot traffic off the lawn, and can be designed around existing trees, grades, and sightlines so the whole yard works better together.",
        ],
      },
      {
        heading: "3. Lasting value and curb appeal",
        paragraphs: [
          "Outdoor living space is high on buyers' lists, and a professionally built deck consistently returns a strong share of its cost at resale while making the home more appealing in the meantime. Built to code with quality materials and proper footings for our frost depth, a deck is an investment that keeps paying back season after season.",
        ],
      },
    ],
    faq: [
      {
        q: "How long does it take to build a deck?",
        a: "Most residential decks take one to three weeks depending on size, materials, and permitting. Custom features like built-in seating or multi-level designs add time.",
      },
      {
        q: "Do I need a permit for a deck in the Milwaukee area?",
        a: "Usually yes — most municipalities require a permit for attached or elevated decks. JM handles permit drawings and inspections as part of the project.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
