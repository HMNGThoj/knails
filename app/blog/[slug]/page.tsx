import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog/posts";
import { getLocale } from "@/lib/locale";
import { translate } from "@/lib/i18n";

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale = await getLocale();
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/blog" className="text-sm font-medium text-gold-deep hover:text-ink">{translate(locale, "← All articles")}</Link>
      <p className="mt-10 text-xs uppercase tracking-[0.18em] text-gold-deep">{locale === "hm" ? post.categoryHm : post.category}</p>
      <h1 className="mt-3 font-display text-5xl leading-tight text-ink">{locale === "hm" ? post.titleHm : post.title}</h1>
      <p className="mt-5 text-lg leading-8 text-ink/70">{locale === "hm" ? post.excerptHm : post.excerpt}</p>
      <div className="mt-10 space-y-8">
        {post.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-2xl text-ink">{locale === "hm" ? section.headingHm : section.heading}</h2>
            <p className="mt-3 leading-8 text-ink/75">{locale === "hm" ? section.bodyHm : section.body}</p>
          </section>
        ))}
      </div>
      <Link href="/book" className="mt-12 inline-flex min-h-12 items-center bg-ink px-6 font-medium text-paper transition hover:bg-gold hover:text-ink">{translate(locale, "Talk with Kaying")}</Link>
    </article>
  );
}