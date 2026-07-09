import BlogCard from "../components/BlogCard";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { posts } from "./posts";

export const metadata = {
  title: "Remodeling Tips & News",
  description:
    "Remodeling guides, cost and ROI breakdowns, and contractor tips from JM Remodeling & Construction — Wisconsin's trusted remodeler since 1990.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gray-heading py-16 px-4 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary mb-3">
          Resources
        </p>
        <h1 className="text-5xl md:text-6xl font-black uppercase text-white mb-4">
          Remodeling Tips &amp; News
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Practical guides on remodeling costs, design trends, and hiring the
          right contractor — from 35+ years on Wisconsin jobsites.
        </p>
      </section>

      {/* Posts grid */}
      <section className="py-20 px-4 bg-gray-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-7">
          {posts.map((post, i) => (
            <AnimateOnScroll key={post.slug} delay={i * 0.1}>
              <BlogCard
                category={post.category}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                href={`/blog/${post.slug}`}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
