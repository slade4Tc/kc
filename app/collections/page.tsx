'use client';

import { useMemo, useState } from 'react';
import { CardGrid } from '@/components/CardGrid';
import { FiltersBar } from '@/components/FiltersBar';
import { MobileFilterSheet } from '@/components/MobileFilterSheet';
import cards from '@/data/cards.json';
import { Card } from '@/lib/types';

export default function CollectionsPage() {
  const allCards = cards as Card[];
  const categories = [...new Set(allCards.map((card) => card.category))];
  const [active, setActive] = useState('All');
  const [open, setOpen] = useState(false);

  const filtered = useMemo(
    () => (active === 'All' ? allCards : allCards.filter((card) => card.category === active)),
    [active, allCards]
  );

  return (
    <section className="py-8 sm:py-12">
      <h1 className="mb-2 text-4xl font-semibold">Collections</h1>
      <p className="mb-8 text-stone-400">Browse all inventory by category, grade, and status.</p>
      <FiltersBar categories={categories} active={active} onChange={setActive} onOpenMobile={() => setOpen(true)} />
      <CardGrid cards={filtered} />
      <MobileFilterSheet open={open} categories={categories} active={active} onClose={() => setOpen(false)} onChange={setActive} />
    </section>
  );
}
