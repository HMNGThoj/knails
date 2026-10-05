import Link from "next/link";
import { blogPosts } from "@/lib/blog/posts";
import { getLocale } from "@/lib/locale";
import { translate } from "@/lib/i18n";

function readValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  const locale = await getLocale();
  const search = readValue(query.q)?.trim().toLowerCase() ?? "";
  const category = readValue(query.category) ?? "";
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = !category || post.category === category;
    const matchesSearch = !search || `${post.title} ${post.excerpt} ${post.category} ${post.titleHm} ${post.excerptHm} ${post.categoryHm}`.toLowerCase().includes(search);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-[0.18em] text-gold-deep">{translate(locale, "Real estate notes")}</p>
      <h1 className="mt-3 font-display text-5xl text-ink">{translate(locale, "Guides for your next move.")}</h1>
      <form action="/blog" method="get" className="mt-8 grid gap-4 border-y border-line py-5 sm:grid-cols-[1fr_auto_auto]">
        <label className="sr-only" htmlFor="blog-search">{translate(locale, "Search articles")}</label>
        <input id="blog-search" name="q" type="search" defaultValue={search} placeholder={translate(locale, "Search articles")} className="min-h-12 border border-line bg-paper px-4 text-ink" />
        <label className="sr-only" htmlFor="blog-category">{translate(locale, "Category")}</label>
        <select id="blog-category" name="category" defaultValue={category} className="min-h-12 border border-line bg-paper px-4 text-ink">
          <option value="">{translate(locale, "All topics")}</option>
          {categories.map((item) => <option key={item} value={item}>{locale === "hm" ? blogPosts.find((post) => post.category === item)?.categoryHm : item}</option>)}
        </select>
        <button type="submit" className="min-h-12 bg-ink px-6 font-medium text-paper transition hover:bg-gold hover:text-ink">{translate(locale, "Search")}</button>
      </form>

      <div className="mt-8 divide-y divide-line">
        {filteredPosts.map((post) => (
          <article key={post.slug} className="grid gap-3 py-7 sm:grid-cols-[180px_1fr] sm:gap-8">
            <p className="text-sm text-gold-deep">{locale === "hm" ? post.categoryHm : post.category}</p>
            <div>
              <h2 className="font-display text-2xl text-ink"><Link href={`/blog/${post.slug}`} className="hover:text-gold-deep">{locale === "hm" ? post.titleHm : post.title}</Link></h2>
              <p className="mt-2 max-w-2xl leading-7 text-ink/70">{locale === "hm" ? post.excerptHm : post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-sm font-medium text-gold-deep">{translate(locale, "Read article")} <span aria-hidden="true">→</span></Link>
            </div>
          </article>
        ))}
        {filteredPosts.length === 0 && <p className="py-8 text-ink/70">{translate(locale, "No articles match that search.")}</p>}
      </div>
    </div>
  );
}