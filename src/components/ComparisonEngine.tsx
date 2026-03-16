import { Star, TrendingDown, Shield, Clock, Calendar } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

type ViewMode = 'side' | 'dealer' | 'specialist';

const ComparisonEngine = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('side');

  return (
    <section className="px-4 py-6 max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold tracking-tight text-foreground">Goliath vs David</h2>
          <p className="text-muted-foreground text-xs mt-0.5">Concession vs Indépendant</p>
        </div>
        {/* Toggle */}
        <div className="flex glass rounded-lg p-0.5">
          {(['side', 'dealer', 'specialist'] as ViewMode[]).map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-2.5 py-1.5 rounded-md text-[10px] font-semibold uppercase tracking-wider transition-all duration-200 ${
                viewMode === mode
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {mode === 'side' ? 'VS' : mode === 'dealer' ? 'Concess.' : 'Indép.'}
            </button>
          ))}
        </div>
      </div>

      <div className={`grid gap-3 ${viewMode === 'side' ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {/* Dealer Card */}
        {(viewMode === 'side' || viewMode === 'dealer') && (
          <div className="glass rounded-2xl p-4 card-3d transition-all duration-300 animate-fade-in">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center border border-glass-border">
                <span className="text-foreground/70 font-bold text-[10px] font-mono">AUDI</span>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3].map(i => (
                    <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                  ))}
                  <Star className="w-3 h-3 text-muted-foreground/30" />
                  <Star className="w-3 h-3 text-muted-foreground/30" />
                </div>
                <span className="font-mono-data text-sm font-bold text-foreground mt-0.5">3.2</span>
              </div>
            </div>

            <h3 className="text-sm font-semibold text-foreground leading-tight">Concession Audi</h3>
            <p className="text-muted-foreground text-[11px] mt-0.5 mb-3">Service officiel constructeur</p>

            <div className="label-xs text-muted-foreground mb-1">142 avis Google</div>

            {/* Price Index */}
            <div className="flex items-center gap-1.5 mb-3">
              <span className="label-xs text-muted-foreground">Prix</span>
              <div className="flex gap-0.5">
                <span className="w-2 h-2 rounded-full bg-destructive" />
                <span className="w-2 h-2 rounded-full bg-destructive" />
                <span className="w-2 h-2 rounded-full bg-destructive" />
              </div>
              <span className="text-[10px] text-destructive font-semibold">Élevé</span>
            </div>

            {/* Quote */}
            <div className="p-2.5 rounded-lg bg-secondary/60 border-l-2 border-muted-foreground/20">
              <p className="text-[11px] text-muted-foreground italic leading-relaxed">
                "Délais longs et tarifs élevés pour une simple révision..."
              </p>
            </div>

            <Button variant="glass" size="sm" className="w-full mt-3 text-xs">
              <Calendar className="w-3 h-3" />
              Réserver
            </Button>
          </div>
        )}

        {/* Specialist Card */}
        {(viewMode === 'side' || viewMode === 'specialist') && (
          <div className="glass-primary rounded-2xl p-4 card-3d relative transition-all duration-300 animate-fade-in">
            {/* Badge */}
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground label-xs px-3 py-1 rounded-full tracking-wider neon-glow whitespace-nowrap">
              Meilleur Choix
            </div>

            <div className="flex items-center justify-between mb-3 mt-1">
              <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center border border-primary/30">
                <span className="text-primary font-bold text-[10px] font-mono">AUDI</span>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className={`w-3 h-3 ${i <= 4 ? 'fill-gold text-gold' : 'fill-gold/50 text-gold/50'}`} />
                  ))}
                </div>
                <span className="font-mono-data text-sm font-bold text-primary mt-0.5">4.8</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-sm font-semibold text-foreground leading-tight">RS Specialist</h3>
              <span className="label-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">Certifié</span>
            </div>
            <p className="text-primary/60 text-[11px] mt-0.5 mb-3">Expertise Performance & Sport</p>

            <div className="label-xs text-primary/60 mb-1">89 avis vérifiés</div>

            {/* Price Index */}
            <div className="flex items-center gap-1.5 mb-3">
              <span className="label-xs text-muted-foreground">Prix</span>
              <div className="flex gap-0.5">
                <span className="w-2 h-2 rounded-full bg-success" />
                <span className="w-2 h-2 rounded-full bg-success" />
                <span className="w-2 h-2 rounded-full bg-muted" />
              </div>
              <span className="text-[10px] text-success font-semibold">Modéré</span>
            </div>

            {/* Key Insight */}
            <div className="flex items-center gap-2 p-2 rounded-lg bg-success/10 border border-success/20 mb-3">
              <TrendingDown className="w-3.5 h-3.5 text-success shrink-0" />
              <span className="text-[11px] text-success font-semibold">-40% vs concession</span>
            </div>

            {/* Quote */}
            <div className="p-2.5 rounded-lg bg-primary/10 border-l-2 border-primary">
              <p className="text-[11px] text-foreground/80 italic leading-relaxed">
                "Travail d'orfèvre. Connaissance pointue des moteurs RS."
              </p>
            </div>

            <Button variant="neon" size="sm" className="w-full mt-3 text-xs">
              <Calendar className="w-3 h-3" />
              Réserver
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ComparisonEngine;
