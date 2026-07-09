"use client";

import { usePathname } from "next/navigation";

// Hides global chrome (header/footer) on the immersive /premier experience.
// Server components are passed through as children, so nothing else needs to
// become a client component.
const BARE_ROUTES = ["/premier"];

export default function ChromeGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (BARE_ROUTES.includes(pathname)) return null;
  return <>{children}</>;
}
