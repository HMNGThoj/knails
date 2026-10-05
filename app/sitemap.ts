import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return [
    ...["", "/homes", "/my-listings", "/book", "/sell", "/testimonials", "/blog", "/about", "/contact"].map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
    })),
    ...blogPosts.map(({ slug }) => ({ url: `${baseUrl}/blog/${slug}`, lastModified: new Date() })),
  ];
}
