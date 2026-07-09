// Single source of truth for the canonical site origin.
// Set NEXT_PUBLIC_SITE_URL in the deployment environment; the fallback is the
// business's production domain.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jmremodelingwi.com";
