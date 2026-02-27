import { CardGrid } from '@/components/CardGrid';
import { getCardsByCategorySlug, getCategories } from '@/lib/cards';

export function generateStaticParams() {
  return getCategories().map((c) => ({ slug: c.slug }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const cards = getCardsByCategorySlug(params.slug);

  return (
    <section className="py-8 sm:py-12">
      <h1 className="mb-8 text-4xl font-semibold capitalize">{params.slug.replace(/-/g, ' ')}</h1>
      <CardGrid cards={cards} />
    </section>
  );
}
