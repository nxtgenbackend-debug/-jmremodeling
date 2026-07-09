// Metadata lives in this segment layout because page.tsx is a client
// component ("use client") and cannot export metadata itself.
export const metadata = {
  title: "Remodeling Project Gallery",
  description:
    "Browse completed kitchen, bathroom, basement, and commercial remodeling projects by JM Remodeling & Construction across Greater Milwaukee.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
