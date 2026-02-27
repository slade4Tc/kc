'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Card } from '@/lib/types';
import { hoverLift } from '@/lib/motion';
import { ImageWithFallback } from '@/components/ImageWithFallback';

const badgeClass: Record<Card['status'], string> = {
  Available: 'bg-emerald-400/20 text-emerald-300 border-emerald-300/20',
  Showcase: 'bg-gold/20 text-gold border-gold/20',
  Sold: 'bg-stone-400/20 text-stone-300 border-stone-300/20'
};

export function CardTile({ card }: { card: Card }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial="rest"
      whileHover={reduce ? 'rest' : 'hover'}
      variants={hoverLift}
      className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
    >
      <Link href={`/cards/${card.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-stone-900">
          <ImageWithFallback src={card.frontImage} alt={card.name} className="h-full w-full object-cover" />
          <span className={`absolute left-3 top-3 rounded-full border px-3 py-1 text-xs ${badgeClass[card.status]}`}>
            {card.status}
          </span>
        </div>
        <div className="space-y-2 p-4">
          <p className="text-xs tracking-[0.18em] text-stone-400">{card.id}</p>
          <h3 className="text-lg font-semibold text-stone-100">{card.name}</h3>
          <p className="text-sm text-stone-400">{card.subtitle}</p>
          <p className="text-sm text-gold">{card.price}</p>
        </div>
      </Link>
    </motion.article>
  );
}
