'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Card } from '@/lib/types';
import { badgeHover, hoverImageZoom, hoverLift } from '@/lib/motion';
import { ImageWithFallback } from '@/components/ImageWithFallback';

const badgeClass: Record<Card['status'], string> = {
  available: 'bg-emerald-400/20 text-emerald-300 border-emerald-300/20',
  showcase: 'bg-gold/20 text-gold border-gold/20',
  sold: 'bg-stone-400/20 text-stone-300 border-stone-300/20'
};

const badgeText: Record<Card['status'], string> = {
  available: 'Available',
  showcase: 'Showcase',
  sold: 'Sold'
};

function CardPreviewTile({ card, index }: { card: Card; index: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial="rest"
      animate="rest"
      whileHover={reduce ? 'rest' : 'hover'}
      variants={hoverLift}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#171717]/70 backdrop-blur ${index % 2 === 0 ? 'md:mt-0' : 'md:mt-6'}`}
    >
      <Link href={`/cards/${card.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-stone-900">
          <motion.div variants={hoverImageZoom} className="h-full w-full">
            <ImageWithFallback src={card.frontImage} alt={card.name} className="h-full w-full object-cover" />
          </motion.div>
          <motion.span variants={badgeHover} className={`absolute left-2 top-2 rounded-full border px-2.5 py-1 text-[11px] ${badgeClass[card.status]}`}>
            {badgeText[card.status]}
          </motion.span>
        </div>
        <div className="space-y-1.5 p-3">
          <p className="truncate text-sm font-medium text-stone-100">{card.name}</p>
          <p className="text-xs tracking-[0.16em] text-stone-400">{card.id}</p>
        </div>
      </Link>
    </motion.article>
  );
}

export function FeaturedGrailsHero({ cards }: { cards: Card[] }) {
  return (
    <section className="py-14 sm:py-16">
      <div className="overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-[#2b2418]/80 via-[#181818]/90 to-[#131313]/90 p-6 shadow-glow backdrop-blur-xl sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.24em] text-gold">Curated Highlights</p>
            <h2 className="text-3xl font-semibold text-stone-100 sm:text-4xl">Featured Grails</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-300 sm:text-base">
              Collector-selected grails highlighted for rarity, condition, and timeless visual presence from the Kroba Cards vault.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/collections" className="rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-[#1c1810]">
                Explore Collection
              </Link>
              <Link href="/contact" className="rounded-full border border-white/20 px-5 py-2.5 text-sm text-stone-100">
                Inquire
              </Link>
            </div>
          </div>

          <div>
            <div className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-1 md:hidden">
              {cards.map((card, index) => (
                <div key={card.id} className="min-w-[158px] flex-1">
                  <CardPreviewTile card={card} index={index} />
                </div>
              ))}
            </div>
            <div className="hidden grid-cols-2 gap-4 md:grid">
              {cards.map((card, index) => (
                <CardPreviewTile key={card.id} card={card} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-start">
        <Link href="/collections" className="text-sm text-gold underline-offset-4 hover:underline">
          View all featured
        </Link>
      </div>
    </section>
  );
}
