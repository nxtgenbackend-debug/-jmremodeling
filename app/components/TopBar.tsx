export default function TopBar() {
  return (
    <div className="bg-primary text-white text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
        <span className="text-blue-100 font-medium">
          Serving Wisconsin Since 1990 &nbsp;|&nbsp; Licensed &amp; Insured
        </span>
        <a
          href="tel:+14143542800"
          className="inline-flex items-center gap-1.5 font-bold text-white hover:text-blue-200 transition-colors"
          aria-label="Call JM Remodeling & Construction at (414) 354-2800"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
          </svg>
          (414) 354-2800
        </a>
      </div>
    </div>
  );
}
