import { Star, TrendingDown, Gauge, Sparkles, BadgeCheck, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const QualityBar = ({ label, value }: { label: string; value: number }) => (
  <div className="space-y-1">
    <div className="flex justify-between items-center">
      <span className="text-[11px] text-muted-foreground">{label}</span>
      <span className="font-mono-data text-[11px] text-foreground font-semibold">{value}%</span>
    </div>
    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
      <div
        className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

const ReviewCards = () => {
  const garages = [
    {
      name: 'AutoPrecision Paris 16',
      specialty: 'Porsche & VW Group',
      rating: 4.9,
      score: 96,
      reviews: 127,
      keyInsight: 'Save 40% vs Dealership',
      insightIcon: TrendingDown,
      quality: { speed: 92, cleanliness: 95, transparency: 98 },
      quote: "Ultra-precise diagnostics in 20 min. Outstanding follow-up.",
      badges: ['Porsche Specialist', 'OEM Parts'],
      verified: true,
    },
    {
      name: 'ElectroDrive Bordeaux',
      specialty: 'Tesla & EV Specialist',
      rating: 4.7,
      score: 93,
      reviews: 84,
      keyInsight: '#1 for Electric Vehicles',
      insightIcon: Sparkles,
      quality: { speed: 88, cleanliness: 94, transparency: 96 },
      quote: "The only garage that truly understands Tesla. Perfect calibration.",
      badges: ['EV Certified', '24h Emergency'],
      verified: true,
    },
  ];

  return (
    <section className="px-4 py-5 max-w-lg mx-auto lg:max-w-none lg:px-0">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base md:text-lg font-bold tracking-tight text-foreground">Top Rated</h2>
        <button className="text-xs md:text-sm text-primary font-semibold hover:text-primary/80 transition-colors">
          View all
        </button>
      </div>

      <div className="space-y-3 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 lg:grid-cols-1 lg:gap-3">
        {garages.map((garage, index) => {
          const InsightIcon = garage.insightIcon;
          return (
            <motion.div
              key={garage.name}
              className="surface-card p-4 md:p-5 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: [0.2, 0, 0, 1] }}
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm md:text-base font-semibold text-foreground leading-tight">{garage.name}</h3>
                    {garage.verified && <BadgeCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary shrink-0" />}
                  </div>
                  <p className="text-muted-foreground text-[11px] md:text-xs mt-0.5">{garage.specialty}</p>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-mono-data text-base md:text-lg font-bold text-foreground">{garage.rating}</span>
                  </div>
                  <span className="text-[10px] md:text-xs text-muted-foreground">{garage.reviews} reviews</span>
                </div>
              </div>

              {/* Trustmarq Score + Badges */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] md:text-xs font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-full border border-primary/20">
                  Score: {garage.score}/100
                </span>
                {garage.badges.map(badge => (
                  <span key={badge} className="text-[10px] md:text-xs font-medium text-muted-foreground px-2.5 py-1 rounded-full border border-border">
                    {badge}
                  </span>
                ))}
              </div>

              {/* Key Insight */}
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-success/8 border border-success/15">
                <InsightIcon className="w-4 h-4 text-success shrink-0" />
                <span className="text-xs text-success font-semibold">{garage.keyInsight}</span>
              </div>

              {/* Service Quality */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5">
                  <Gauge className="w-3 h-3 text-muted-foreground" />
                  <span className="label-xs text-muted-foreground">Service Quality</span>
                </div>
                <QualityBar label="Speed" value={garage.quality.speed} />
                <QualityBar label="Cleanliness" value={garage.quality.cleanliness} />
                <QualityBar label="Transparency" value={garage.quality.transparency} />
              </div>

              {/* Quote */}
              <div className="p-2.5 rounded-xl bg-secondary/50 border-l-2 border-primary/40">
                <div className="flex items-start gap-2">
                  <Eye className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                  <p className="text-[11px] md:text-xs text-foreground/70 italic leading-relaxed">
                    "{garage.quote}"
                  </p>
                </div>
              </div>

              {/* CTA */}
              <Button className="w-full text-xs md:text-sm" size="sm">
                Comparer · Voir les dispos
              </Button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ReviewCards;
