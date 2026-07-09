import type { MetadataRoute } from "next";
import { posts } from "./blog/posts";
import { SITE_URL } from "./site";

const staticRoutes = [
  "/",
  "/about",
  "/blog",
  "/commercial",
  "/contact",
  "/premier",
  "/privacy",
  "/projects",
  "/services",
  "/services/additions-framing",
  "/services/basement-finishing",
  "/services/bathroom-remodeling",
  "/services/commercial-buildouts",
  "/services/kitchen-remodeling",
  "/services/roofing-siding",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route === "/" ? "" : route}`,
      lastModified: new Date(),
    })),
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
    })),
  ];
}
