import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "../../components/Button";
import { posts, getPost } from "../posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "JM Remodeling & Construction, LLC",
    },
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Header */}
      <section className="bg-gray-heading py-16 px-4 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary mb-3">
          {post.category}
        </p>
        <h1 className="text-4xl md:text-5xl font-black uppercase text-white mb-4 max-w-4xl mx-auto leading-tight">
          {post.title}
        </h1>
        <time className="text-gray-400 text-sm" dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </time>
      </section>

      {/* Article body */}
      <article className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            {" / "}
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            {" / "}
            <span className="text-gray-body">{post.title}</span>
          </nav>

          <p className="text-lg text-gray-body leading-relaxed mb-10">
            {post.intro}
          </p>

          {post.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black uppercase text-gray-heading mb-4">
                {section.heading}
              </h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="text-gray-body leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              {section.list && (
                <ol className="list-decimal pl-6 space-y-2 text-gray-body leading-relaxed">
                  {section.list.map((item) => (
                    <li key={item.slice(0, 40)}>{item}</li>
                  ))}
                </ol>
              )}
            </section>
          ))}

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-black uppercase text-gray-heading mb-6">
              Frequently Asked Questions
            </h2>
            {post.faq.map((f) => (
              <div key={f.q} className="mb-6">
                <h3 className="text-lg font-bold text-gray-heading mb-2">{f.q}</h3>
                <p className="text-gray-body leading-relaxed">{f.a}</p>
              </div>
            ))}
          </section>

          {/* CTA */}
          <div className="bg-gray-bg rounded-xl p-8 text-center">
            <h2 className="text-2xl font-black uppercase text-gray-heading mb-3">
              Planning a Project?
            </h2>
            <p className="text-gray-body mb-6">
              Get a free, no-pressure estimate from Wisconsin&apos;s trusted
              remodeler since 1990.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" size="lg">
                Get a Free Estimate
              </Button>
              <Button href="/projects" variant="outline-blue" size="lg">
                See Our Work
              </Button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
