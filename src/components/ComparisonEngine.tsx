import { Star, TrendingDown, Shield, Calendar, Award } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import TrustmarqBadge from '@/components/TrustmarqBadge';

type ViewMode = 'side' | 'dealer' | 'specialist';

const ComparisonEngine = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('side');

  return (
    <section className="px-4 py-6 max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="font-display text-lg font-bold tracking-tight text-foreground">Dealer vs Independent</h2>
          <p className="text-muted-foreground text-xs mt-0.5">Side-by-side comparison</p>
        </div>
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
              {mode === 'side' ? 'VS' : mode === 'dealer' ? 'Dealer' : 'Indep.'}
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
                    <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                  <Star className="w-3 h-3 text-muted-foreground/30" />
                  <Star className="w-3 h-3 text-muted-foreground/30" />
                </div>
                <span className="font-mono-data text-sm font-bold text-foreground mt-0.5">3.2</span>
              </div>
            </div>

            <h3 className="text-sm font-semibold text-foreground leading-tight">Audi Dealership</h3>
            <p className="text-muted-foreground text-[11px] mt-0.5 mb-3">Official manufacturer service</p>

            <div className="label-xs text-muted-foreground mb-1">142 Google reviews</div>

            <div className="flex items-center gap-1.5 mb-3">
              <span className="label-xs text-muted-foreground">Price</span>
              <div className="flex gap-0.5">
                <span className="w-2 h-2 rounded-full bg-destructive" />
                <span className="w-2 h-2 rounded-full bg-destructive" />
                <span className="w-2 h-2 rounded-full bg-destructive" />
              </div>
              <span className="text-[10px] text-destructive font-semibold">High</span>
            </div>

            <div className="p-2.5 rounded-lg bg-secondary/60 border-l-2 border-muted-foreground/20">
              <p className="text-[11px] text-muted-foreground italic leading-relaxed">
                "Long delays and high prices for a simple service..."
              </p>
            </div>

            <Button variant="glass" size="sm" className="w-full mt-3 text-xs">
              <Calendar className="w-3 h-3" />
              Book
            </Button>
          </div>
        )}

        {/* Specialist Card */}
        {(viewMode === 'side' || viewMode === 'specialist') && (
          <div className="glass-gold rounded-2xl p-4 card-3d relative transition-all duration-300 animate-fade-in">
            {/* Trustmarq Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <TrustmarqBadge score={96} size="sm" />
            </div>

            <div className="flex items-center justify-between mb-3 mt-2">
              <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center border border-primary/30">
                <span className="text-primary font-bold text-[10px] font-mono">AUDI</span>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className={`w-3 h-3 ${i <= 4 ? 'fill-primary text-primary' : 'fill-primary/50 text-primary/50'}`} />
                  ))}
                </div>
                <span className="font-mono-data text-sm font-bold text-primary mt-0.5">4.8</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-sm font-semibold text-foreground leading-tight">RS Specialist</h3>
              <span className="label-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">Certified</span>
            </div>
            <p className="text-primary/60 text-[11px] mt-0.5 mb-3">Performance & Sport Expertise</p>

            <div className="label-xs text-primary/60 mb-1">89 verified reviews</div>

            <div className="flex items-center gap-1.5 mb-3">
              <span className="label-xs text-muted-foreground">Price</span>
              <div className="flex gap-0.5">
                <span className="w-2 h-2 rounded-full bg-success" />
                <span className="w-2 h-2 rounded-full bg-success" />
                <span className="w-2 h-2 rounded-full bg-muted" />
              </div>
              <span className="text-[10px] text-success font-semibold">Moderate</span>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-lg bg-success/10 border border-success/20 mb-3">
              <TrendingDown className="w-3.5 h-3.5 text-success shrink-0" />
              <span className="text-[11px] text-success font-semibold">-40% vs dealership</span>
            </div>

            <div className="p-2.5 rounded-lg bg-primary/10 border-l-2 border-primary">
              <p className="text-[11px] text-foreground/80 italic leading-relaxed">
                "Masterful work. Deep knowledge of RS engines."
              </p>
            </div>

            <Button variant="gold" size="sm" className="w-full mt-3 text-xs">
              <Calendar className="w-3 h-3" />
              Secure an Appointment
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ComparisonEngine;
