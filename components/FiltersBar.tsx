'use client';

interface FiltersBarProps {
  categories: string[];
  active: string;
  onChange: (value: string) => void;
  onOpenMobile: () => void;
}

export function FiltersBar({ categories, active, onChange, onOpenMobile }: FiltersBarProps) {
  return (
    <div className="mb-8 flex items-center justify-between gap-4">
      <div className="hidden flex-wrap gap-2 md:flex">
        {['All', ...categories].map((category) => (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              active === category ? 'bg-gold text-[#1c1810]' : 'border border-white/15 text-stone-300 hover:bg-white/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <button onClick={onOpenMobile} className="rounded-full border border-white/20 px-4 py-2 text-sm md:hidden">
        Filters
      </button>
    </div>
  );
}
