interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  heading,
  subheading,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`text-sm font-bold uppercase tracking-[0.15em] mb-3 ${
            light ? "text-blue-200" : "text-primary"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-4xl md:text-5xl font-heading font-bold uppercase leading-tight mb-4 ${
          light ? "text-white" : "text-gray-heading"
        }`}
        style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-blue-100" : "text-gray-body"
          }`}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
