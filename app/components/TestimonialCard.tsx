interface TestimonialCardProps {
  initials: string;
  name: string;
  city: string;
  quote: string;
  rating?: number;
}

export default function TestimonialCard({
  initials,
  name,
  city,
  quote,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <article className="bg-white rounded-lg p-6 shadow-sm border border-gray-border flex flex-col gap-4">
      {/* Stars */}
      <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={i < rating ? "#0066B3" : "#DDDDDD"}
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-body text-sm leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <footer className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0"
          aria-hidden="true"
        >
          {initials}
        </div>
        <div>
          <p className="font-bold text-gray-heading text-sm">{name}</p>
          <p className="text-gray-body text-xs">{city}</p>
        </div>
      </footer>
    </article>
  );
}
