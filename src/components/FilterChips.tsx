import { Zap, Wrench, PaintBucket, AlertTriangle, Cog } from 'lucide-react';

export const FILTER_OPTIONS = [
  { id: 'all', label: 'Tous', icon: null, keywords: [] as string[] },
  { id: 'ev', label: 'EV Specialist', icon: Zap, keywords: ['ev', 'électrique', 'hybride', 'electric'] },
  { id: 'mechanic', label: 'Mécanique', icon: Wrench, keywords: ['mécanique', 'mechanic', 'entretien', 'réparation', 'vidange'] },
  { id: 'body', label: 'Carrosserie', icon: PaintBucket, keywords: ['carrosserie', 'bodywork', 'peinture'] },
  { id: 'emergency', label: 'Urgence', icon: AlertTriangle, keywords: ['urgence', 'emergency', 'dépannage', 'remorquage'] },
  { id: 'parts', label: 'Pièces OEM', icon: Cog, keywords: ['oem', 'officiel', 'pièces', 'parts', 'concession'] },
];

interface FilterChipsProps {
  activeFilter: string;
  onFilterChange: (id: string) => void;
}

const FilterChips = ({ activeFilter, onFilterChange }: FilterChipsProps) => {
  return (
    <section className="px-4 md:px-6 py-3 max-w-6xl mx-auto">
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap">
        {FILTER_OPTIONS.map((filter) => {
          const Icon = filter.icon;
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`
                flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium transition-all duration-150 whitespace-nowrap shrink-0 border
                ${isActive
                  ? 'bg-primary text-primary-foreground border-primary font-semibold'
                  : 'bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-foreground/20'
                }
              `}
            >
              {Icon && <Icon className="w-3 h-3" />}
              {filter.label}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default FilterChips;
