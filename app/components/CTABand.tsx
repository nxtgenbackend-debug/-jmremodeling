import Button from "./Button";

interface CTABandProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  dark?: boolean;
}

export default function CTABand({
  eyebrow,
  heading,
  subheading,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  dark = false,
}: CTABandProps) {
  return (
    <section
      className={`py-20 px-4 ${
        dark
          ? "bg-black text-white"
          : "bg-gradient-to-r from-primary to-primary-dark text-white"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        {eyebrow && (
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-300 mb-3">
            {eyebrow}
          </p>
        )}
        <h2
          className="text-4xl md:text-5xl font-bold uppercase text-white mb-4"
          style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
        >
          {heading}
        </h2>
        {subheading && (
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">{subheading}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={primaryHref} variant="outline-white" size="lg">
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button href={secondaryHref} variant="secondary" size="lg">
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
