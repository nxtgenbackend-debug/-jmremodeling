import Link from "next/link";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <article className="group bg-white border border-gray-border rounded-lg p-6 shadow-sm hover:shadow-md hover:border-primary transition-all duration-200 hover:-translate-y-1 flex flex-col">
      <div className="w-12 h-12 text-primary mb-4 flex-shrink-0" aria-hidden="true">
        {icon}
      </div>
      <h3
        className="text-xl font-bold text-gray-heading mb-2 uppercase"
        style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
      >
        {title}
      </h3>
      <p className="text-gray-body text-sm flex-1 mb-4">{description}</p>
      <Link
        href={href}
        className="text-sm font-bold text-primary uppercase tracking-wide hover:text-primary-dark transition-colors group-hover:underline"
        aria-label={`Learn more about ${title}`}
      >
        Learn More →
      </Link>
    </article>
  );
}
