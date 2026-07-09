import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How JM Remodeling & Construction, LLC collects, uses, and protects the information you share through our website and estimate forms.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gray-heading py-16 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-black uppercase text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-400 text-lg">Last updated: July 4, 2026</p>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-8 text-gray-body leading-relaxed">
          <div>
            <h2 className="text-2xl font-black uppercase text-gray-heading mb-3">
              Who We Are
            </h2>
            <p>
              JM Remodeling &amp; Construction, LLC (&quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;) operates this website from our
              office at 7701 N. Teutonia Ave., Milwaukee, WI 53209. This policy
              describes how we handle information you share with us through the
              site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black uppercase text-gray-heading mb-3">
              Information We Collect
            </h2>
            <p>
              When you request an estimate or contact us through a form on this
              site, we collect the information you provide: your name, phone
              number, email address, and details about your project. We do not
              collect payment information through this website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black uppercase text-gray-heading mb-3">
              How We Use Your Information
            </h2>
            <p>
              We use the information you submit solely to respond to your
              inquiry, schedule consultations, prepare estimates, and
              communicate with you about your project. We do not sell, rent, or
              trade your personal information to third parties for marketing
              purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black uppercase text-gray-heading mb-3">
              Cookies &amp; Analytics
            </h2>
            <p>
              This site may use standard analytics tools to understand how
              visitors use our pages (such as which pages are visited and for
              how long). This data is aggregated and does not personally
              identify you.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black uppercase text-gray-heading mb-3">
              Data Retention &amp; Your Rights
            </h2>
            <p>
              We keep inquiry information only as long as needed to serve your
              project and meet our legal obligations. You may request a copy of
              the information we hold about you, or ask us to delete it, by
              contacting us at{" "}
              <a
                href="mailto:customerservice@jmremodelingwi.com"
                className="text-primary hover:underline"
              >
                customerservice@jmremodelingwi.com
              </a>{" "}
              or calling{" "}
              <a href="tel:+14143542800" className="text-primary hover:underline">
                (414) 354-2800
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black uppercase text-gray-heading mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this policy from time to time. The latest version
              will always be available on this page with the date of the most
              recent revision. Questions? Reach out any time through our{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
