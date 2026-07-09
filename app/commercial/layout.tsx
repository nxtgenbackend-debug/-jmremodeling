// Metadata lives in this segment layout because page.tsx is a client
// component ("use client") and cannot export metadata itself.
export const metadata = {
  title: "Commercial Construction Milwaukee, WI",
  description:
    "Commercial construction and remodeling for offices, retail, and restaurants across Greater Milwaukee — turn-key buildouts since 1990.",
  alternates: { canonical: "/commercial" },
};

export default function CommercialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
