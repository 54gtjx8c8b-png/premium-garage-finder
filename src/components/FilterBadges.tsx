import { Zap, Wrench, PaintBucket } from 'lucide-react';
import { useState } from 'react';

const filters = [
  { id: 'electric', label: 'Électrique', icon: Zap },
  { id: 'mechanic', label: 'Mécanique', icon: Wrench },
  { id: 'body', label: 'Carrosserie', icon: PaintBucket },
];

const FilterBadges = () => {
  const [active, setActive] = useState('mechanic');

  return (
    <section className="px-6 py-8">
      <div className="flex flex-wrap justify-center gap-3">
        {filters.map((filter) => {
          const Icon = filter.icon;
          const isActive = active === filter.id;
          return (
            <button
              key={filter.id}
              onClick={() => setActive(filter.id)}
              className={`
                flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-200
                ${isActive
                  ? 'bg-primary text-primary-foreground font-bold border border-primary'
                  : 'bg-glass border border-glass-border text-foreground/60 hover:border-primary/50 hover:text-foreground'
                }
              `}
            >
              <Icon className="w-3.5 h-3.5" />
              {filter.label}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default FilterBadges;
