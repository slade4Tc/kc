import Link from 'next/link';

export function CategorySection({ categories }: { categories: { name: string; count: number; slug: string }[] }) {
  return (
    <section className="py-14 sm:py-16">
      <h2 className="mb-7 text-2xl font-semibold sm:text-3xl">Category Showcase</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/collections/${cat.slug}`}
            className="shine relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-gold/30"
          >
            <p className="text-xl font-semibold">{cat.name}</p>
            <p className="mt-3 text-sm text-stone-400">{cat.count} pieces</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
