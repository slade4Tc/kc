'use client';

import { AnimatePresence, motion } from 'framer-motion';

interface MobileFilterSheetProps {
  open: boolean;
  categories: string[];
  active: string;
  onClose: () => void;
  onChange: (value: string) => void;
}

export function MobileFilterSheet({ open, categories, active, onClose, onChange }: MobileFilterSheetProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60"
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl border border-white/10 bg-[#191919] p-6"
          >
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-stone-400">Filter by Category</p>
            <div className="grid grid-cols-2 gap-2">
              {['All', ...categories].map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    onChange(category);
                    onClose();
                  }}
                  className={`rounded-xl px-4 py-3 text-sm ${
                    active === category ? 'bg-gold text-[#1a1408]' : 'border border-white/15 text-stone-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
