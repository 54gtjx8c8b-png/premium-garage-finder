import { Zap, Wrench, PaintBucket, AlertTriangle, Cog } from 'lucide-react';
import { useState } from 'react';

const filters = [
  { id: 'ev', label: 'EV Specialist', icon: Zap },
  { id: 'mechanic', label: 'Mécanique', icon: Wrench },
  { id: 'body', label: 'Carrosserie', icon: PaintBucket },
  { id: 'emergency', label: 'Urgence', icon: AlertTriangle },
  { id: 'parts', label: 'Pièces OEM', icon: Cog },
];

const FilterChips = () => {
  const [active, setActive] = useState('mechanic');

  return (
    <section className="px-4 py-3 max-w-lg mx-auto">
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-4 px-4">
        {filters.map((filter) => {
          const Icon = filter.icon;
          const isActive = active === filter.id;
          return (
            <button
              key={filter.id}
              onClick={() => setActive(filter.id)}
              className={`
                flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap shrink-0
                ${isActive
                  ? 'bg-primary text-primary-foreground font-bold neon-glow'
                  : 'glass text-muted-foreground hover:text-foreground hover:border-primary/30'
                }
              `}
            >
              <Icon className="w-3 h-3" />
              {filter.label}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default FilterChips;
