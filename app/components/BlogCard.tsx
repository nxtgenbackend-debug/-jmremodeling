import Link from "next/link";

interface BlogCardProps {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
}

export default function BlogCard({ category, title, excerpt, date, href }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden border border-gray-border shadow-sm hover:shadow-md transition-shadow">
      {/* Placeholder image area */}
      {/* Replace with next/image pointing to /public/blog/{slug}.jpg */}
      <div className="h-48 bg-slate-200 flex items-center justify-center text-gray-400 text-sm font-medium">
        Blog Image
      </div>

      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-wide text-primary mb-2">{category}</p>
        <h3
          className="text-xl font-bold text-gray-heading mb-2 uppercase leading-tight"
        >
          <Link href={href} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </h3>
        <p className="text-gray-body text-sm mb-4 leading-relaxed">{excerpt}</p>
        <div className="flex items-center justify-between">
          <time className="text-xs text-gray-400" dateTime={date}>
            {new Date(date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <Link
            href={href}
            className="text-xs font-bold uppercase tracking-wide text-primary hover:text-primary-dark transition-colors"
            aria-label={`Read more about ${title}`}
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}
