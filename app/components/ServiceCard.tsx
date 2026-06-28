import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
}

const headingFont = { fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" };

export default function ServiceCard({ title, description, href, imageSrc }: ServiceCardProps) {
  return (
    <article className="group bg-white border border-gray-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <Link href={href} className="block relative aspect-[4/3] overflow-hidden" aria-label={title}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent opacity-60" aria-hidden="true" />
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl text-gray-heading mb-2" style={headingFont}>
          {title}
        </h3>
        <p className="text-gray-body text-sm flex-1 mb-4 leading-relaxed">{description}</p>
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-primary uppercase tracking-wide hover:gap-2.5 transition-all"
          aria-label={`Learn more about ${title}`}
        >
          Learn More
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
