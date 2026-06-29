import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "../components/AnimateOnScroll";
import Button from "../components/Button";

export const metadata = {
  title: "About Us | JM General Contractors",
  description:
    "Since 1990, JM Remodeling has helped homeowners throughout Southeastern Wisconsin bring their ideas to life with quality craftsmanship and honest communication.",
};

const stats = [
  { value: "35+", label: "Years in Business" },
  { value: "2,000+", label: "Projects Completed" },
  { value: "SE", label: "Wisconsin Served" },
  { value: "100%", label: "Satisfaction Focus" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative bg-gray-heading py-24 px-4 text-center overflow-hidden">
        <Image
          src="/images/about-hero.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
          aria-hidden="true"
        />
        <div className="relative z-10">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-4">
            <ol className="flex justify-center gap-2" role="list">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">
                About Us
              </li>
            </ol>
          </nav>
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary mb-3">
            Our Story
          </p>
          <h1 className="text-5xl md:text-6xl font-black uppercase text-white mb-4">
            About JM Remodeling
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Serving Southeastern Wisconsin homeowners since 1990.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-primary py-8 px-4">
        <ul className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center list-none">
          {stats.map((s) => (
            <li key={s.label}>
              <p className="text-3xl font-black text-white">{s.value}</p>
              <p className="text-sm font-bold uppercase tracking-[0.1em] text-blue-200 mt-1">
                {s.label}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Story section — people photo left, first paragraph right */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll direction="left">
            <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="/images/about-people.jpg"
                alt="JM Remodeling team with a homeowner reviewing a renovation project"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary mb-3">
              Who We Are
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase text-gray-heading leading-tight mb-6">
              Your Home Is Where Life Happens
            </h2>
            <p className="text-gray-body text-lg leading-relaxed">
              At JM Remodeling, we know that your home is more than just a place
              to live—it&apos;s where life happens. That&apos;s why we treat
              every project as if we were working on our own home. Since 1990,
              we&apos;ve been dedicated to helping homeowners throughout
              Southeastern Wisconsin bring their ideas to life with quality
              craftsmanship, honest communication, and a commitment to doing the
              job right. Whether it&apos;s a small renovation or a complete
              transformation, we take pride in creating spaces that reflect your
              style, meet your needs, and stand the test of time.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Kitchen section — second paragraph left, kitchen photo right */}
      <section className="py-20 px-4 bg-gray-bg">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll direction="left" className="order-2 md:order-1">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary mb-3">
              Our Commitment
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase text-gray-heading leading-tight mb-6">
              Building Lasting Relationships
            </h2>
            <p className="text-gray-body text-lg leading-relaxed">
              For us, remodeling is about more than construction—it&apos;s about
              building lasting relationships. We believe every client deserves to
              feel heard, respected, and confident throughout the entire process.
              From the first conversation to the final walkthrough, our team is
              here to guide you every step of the way with transparency,
              attention to detail, and genuine care. Your trust means everything
              to us, and our greatest reward is seeing you enjoy a space
              you&apos;ll love for years to come.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Get a Free Estimate
              </Button>
              <Button href="/projects" variant="outline-blue" size="lg">
                See Our Work
              </Button>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" className="order-1 md:order-2">
            <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="/images/about-kitchen.jpg"
                alt="Beautifully renovated kitchen by JM Remodeling"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
