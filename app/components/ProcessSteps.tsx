import AnimateOnScroll from "./AnimateOnScroll";
import SectionHeader from "./SectionHeader";

const headingFont = { fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" };

const steps = [
  {
    num: "01",
    title: "Free Consultation",
    desc: "We visit your property, listen to your goals, and discuss your budget honestly — no pressure, no sales games.",
  },
  {
    num: "02",
    title: "Design & Fixed Quote",
    desc: "You get a detailed plan with material selections and a fixed-price proposal. Every line item is spelled out before we start.",
  },
  {
    num: "03",
    title: "Expert Build",
    desc: "Our licensed crews build on schedule. Your dedicated project manager gives weekly updates and is reachable every day.",
  },
  {
    num: "04",
    title: "Final Walk-Through",
    desc: "We walk the finished space with you, knock out any punch-list items, and hand over your 5-year workmanship warranty.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 md:py-28 px-4 bg-white" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <SectionHeader
            eyebrow="How We Work"
            heading="A Process Built on Trust"
            subheading="Twenty-five years of refining one simple promise: do what we say, when we say, for the price we quote."
          />
        </AnimateOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.num} delay={i * 0.1}>
              <div className="relative h-full bg-gray-bg rounded-xl p-7 border border-gray-border">
                <span
                  className="block text-5xl text-primary/20 mb-3"
                  style={headingFont}
                  aria-hidden="true"
                >
                  {step.num}
                </span>
                <h3 className="text-xl text-gray-heading mb-2" style={headingFont}>{step.title}</h3>
                <p className="text-gray-body text-sm leading-relaxed">{step.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
