export default function TopBar() {
  return (
    <div className="bg-primary text-white text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
        <span className="text-blue-100 font-medium">
          Serving Wisconsin Since 1998 &nbsp;|&nbsp; Licensed &amp; Insured
        </span>
        <a
          href="tel:+14145550100"
          className="font-bold text-white hover:text-blue-200 transition-colors"
          aria-label="Call JM General Contractors at (414) 555-0100"
        >
          📞 (414) 555-0100
        </a>
      </div>
    </div>
  );
}
