import HomePage from './HomePage';
import { getCategoryCounts, getFeaturedCards, getNewestCards } from '@/lib/cards';

export default async function Page() {
  const [featuredCards, categories, newest] = await Promise.all([
    getFeaturedCards(),
    getCategoryCounts(),
    getNewestCards()
  ]);

  return <HomePage featuredCards={featuredCards} categories={categories} newest={newest} />;
}
