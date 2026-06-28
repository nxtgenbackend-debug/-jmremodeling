export default function MobileCallButton() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
      <a
        href="tel:+14145550100"
        className="flex items-center gap-2 bg-primary text-white font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
        aria-label="Call JM General Contractors at (414) 555-0100"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
        </svg>
        Call Now — (414) 555-0100
      </a>
    </div>
  );
}
