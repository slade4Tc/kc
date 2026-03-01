'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { FeaturedSection } from '@/components/FeaturedSection';
import { FeaturedGrailsHero } from '@/components/FeaturedGrailsHero';
import { CategorySection } from '@/components/CategorySection';
import { fadeUp } from '@/lib/motion';
import { getCategoryCounts, getFeaturedCards, getNewestCards } from '@/lib/cards';

function useIsDesktop(breakpointPx = 768) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${breakpointPx}px)`);
    const onChange = () => setIsDesktop(mql.matches);

    onChange();
    mql.addEventListener?.('change', onChange);

    return () => mql.removeEventListener?.('change', onChange);
  }, [breakpointPx]);

  return isDesktop;
}

export default function Home() {
  const reduceMotion = useReducedMotion();
  const isDesktop = useIsDesktop();

  const featured = useMemo(() => getFeaturedCards(), []);
  const newest = useMemo(() => getNewestCards(6), []);
  const counts = useMemo(() => getCategoryCounts(), []);

  const section = fadeUp(reduceMotion);

  return (
    <main className="relative">
      <Hero />

      {/* Featured grails hero */}
      <section className="relative px-4 pt-10 md:pt-14">
        <div className="mx-auto w-full max-w-6xl">
          <FeaturedGrailsHero />
        </div>
      </section>

      {/* Featured section */}
      <section className="relative px-4 pt-10 md:pt-14">
        <div className="mx-auto w-full max-w-6xl">
          <FeaturedSection
            title="New Additions"
            subtitle="Fresh arrivals from across our collection."
            cards={newest}
          />
        </div>
      </section>

      {/* Categories */}
      <section className="relative px-4 pt-10 md:pt-14">
        <div className="mx-auto w-full max-w-6xl">
          <CategorySection counts={counts} />
        </div>
      </section>

      {/* Authenticity & Care */}
      <section className="relative px-4 pb-16 pt-10 md:pb-24 md:pt-14">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            variants={section.container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-4 md:grid-cols-3 md:gap-6 overflow-hidden md:overflow-visible"
          >
            <motion.div
              variants={isDesktop ? section.item : section.item}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transform-gpu"
            >
              <h3 className="text-base font-semibold tracking-wide text-white">Authenticity</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Carefully sourced and presented with full transparency.
              </p>
            </motion.div>

            <motion.div
              variants={isDesktop ? section.item : section.item}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transform-gpu"
            >
              <h3 className="text-base font-semibold tracking-wide text-white">Care</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Stored and handled with collector-level attention.
              </p>
            </motion.div>

            <motion.div
              variants={isDesktop ? section.item : section.item}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transform-gpu"
            >
              <h3 className="text-base font-semibold tracking-wide text-white">Premium Experience</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                A boutique browsing experience built for collectors.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
