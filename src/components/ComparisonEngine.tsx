import { Star, TrendingDown, BadgeCheck, Calendar } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

type ViewMode = 'side' | 'dealer' | 'specialist';

const ComparisonEngine = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('side');

  return (
    <section className="px-4 py-5 max-w-lg mx-auto lg:max-w-none lg:px-0">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-base md:text-lg font-bold tracking-tight text-foreground">Dealer vs Independent</h2>
          <p className="text-muted-foreground text-xs md:text-sm mt-0.5">Based on verified Google reviews</p>
        </div>
        <div className="flex bg-card rounded-full p-0.5 border border-border">
          {(['side', 'dealer', 'specialist'] as ViewMode[]).map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-150 ${
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

      <AnimatePresence mode="wait">
        <motion.div
          key={viewMode}
          className={`grid gap-3 ${viewMode === 'side' ? 'grid-cols-2' : 'grid-cols-1'}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
        >
        {/* Dealer Card */}
        {(viewMode === 'side' || viewMode === 'dealer') && (
          <motion.div
            className="surface-card p-4 transition-all duration-200"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-muted-foreground font-bold text-[9px]">AUDI</span>
              </div>
              <div className="flex items-center gap-0.5">
                {[1, 2, 3].map(i => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
                {[4, 5].map(i => (
                  <Star key={i} className="w-3 h-3 text-border" />
                ))}
              </div>
            </div>

            <h3 className="text-sm font-semibold text-foreground leading-tight">Audi Dealership</h3>
            <p className="text-muted-foreground text-[11px] mt-0.5 mb-2">Official service center</p>

            <div className="space-y-1.5 mb-3">
              <div className="flex justify-between text-[11px]">
                <span className="text-muted-foreground">Google Rating</span>
                <span className="text-foreground font-semibold">3.2 / 5</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-muted-foreground">Trustmarq Score</span>
                <span className="text-foreground font-semibold">62 / 100</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-muted-foreground">Price Level</span>
                <span className="text-destructive font-semibold">$$$</span>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-secondary/60 mb-3">
              <p className="text-[11px] text-muted-foreground italic leading-relaxed">
                "Long wait times and steep prices for basic maintenance..."
              </p>
            </div>

            <Button variant="outline" size="sm" className="w-full text-xs">
              <Calendar className="w-3 h-3" />
              View availability
            </Button>
          </div>
        )}

        {/* Independent Card */}
        {(viewMode === 'side' || viewMode === 'specialist') && (
          <div className="surface-card p-4 relative transition-all duration-200 animate-fade-in border-primary/30">
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 whitespace-nowrap">
              <BadgeCheck className="w-3 h-3" />
              Verified
            </div>

            <div className="flex items-center justify-between mb-3 mt-1">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-[9px]">AUDI</span>
              </div>
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className={`w-3 h-3 ${i <= 4 ? 'fill-amber-400 text-amber-400' : 'fill-amber-400/40 text-amber-400/40'}`} />
                ))}
              </div>
            </div>

            <h3 className="text-sm font-semibold text-foreground leading-tight">RS Specialist</h3>
            <p className="text-muted-foreground text-[11px] mt-0.5 mb-2">Performance & Sport Expert</p>

            <div className="space-y-1.5 mb-3">
              <div className="flex justify-between text-[11px]">
                <span className="text-muted-foreground">Google Rating</span>
                <span className="text-foreground font-semibold">4.8 / 5</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-muted-foreground">Trustmarq Score</span>
                <span className="text-primary font-bold">96 / 100</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-muted-foreground">Price Level</span>
                <span className="text-success font-semibold">$$</span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-lg bg-success/10 border border-success/20 mb-3">
              <TrendingDown className="w-3.5 h-3.5 text-success shrink-0" />
              <span className="text-[11px] text-success font-semibold">Save 40% vs dealer</span>
            </div>

            <div className="p-2 rounded-lg bg-primary/5 mb-3">
              <p className="text-[11px] text-foreground/70 italic leading-relaxed">
                "Masterful work. Deep RS engine expertise."
              </p>
            </div>

            <Button size="sm" className="w-full text-xs">
              <Calendar className="w-3 h-3" />
              Voir les dispos
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ComparisonEngine;
