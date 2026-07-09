import type { Metadata } from "next";
import { Cinzel, Josefin_Sans } from "next/font/google";
import PremierExperience from "../components/PremierExperience";

// Bespoke type, loaded only on this route (kept out of the global layout).
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JM Premier | Bespoke Interiors",
  description:
    "JM Premier — a bespoke division for one-of-one interiors. Rare stone, hand-built cabinetry, and made-to-order design.",
  alternates: { canonical: "/premier" },
};

export default function PremierPage() {
  return (
    <div className={`${cinzel.variable} ${josefin.variable}`}>
      <PremierExperience />
    </div>
  );
}
