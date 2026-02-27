import cardsData from '@/data/cards.json';
import { Card } from '@/lib/types';

const cards = cardsData as Card[];

export function getCards() {
  return cards;
}

export function getCardById(id: string) {
  return cards.find((card) => card.id === id);
}

export function getCardBySlug(slug: string) {
  return cards.find((card) => card.slug === slug);
}

export function getFeaturedCards() {
  return cards.filter((card) => card.featured);
}

export function getNewestCards() {
  return [...cards].sort((a, b) => +new Date(b.updatedAt) - +new Date(a.updatedAt)).slice(0, 6);
}

export function getCategories() {
  const map = new Map<string, number>();
  cards.forEach((card) => {
    map.set(card.category, (map.get(card.category) ?? 0) + 1);
  });
  return [...map.entries()].map(([name, count]) => ({ name, count, slug: slugify(name) }));
}

export function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-');
}

export function getCardsByCategorySlug(categorySlug: string) {
  return cards.filter((card) => slugify(card.category) === categorySlug);
}
