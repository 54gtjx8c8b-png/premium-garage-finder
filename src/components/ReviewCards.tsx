import { Star, TrendingDown, Gauge, Sparkles, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface QualityBarProps {
  label: string;
  value: number;
  color?: string;
}

const QualityBar = ({ label, value }: QualityBarProps) => (
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
      specialty: 'Porsche & Groupe VW',
      rating: 4.9,
      reviews: 127,
      keyInsight: 'Économisez 40% vs Concession',
      insightIcon: TrendingDown,
      quality: { speed: 92, cleanliness: 95, transparency: 98 },
      quote: "Diagnostic ultra-précis en 20 min. Suivi personnalisé impeccable.",
      badges: ['Porsche Specialist', 'Pièces OEM'],
    },
    {
      name: 'ElectroDrive Bordeaux',
      specialty: 'Tesla & EV Spécialiste',
      rating: 4.7,
      reviews: 84,
      keyInsight: 'N°1 pour les véhicules électriques',
      insightIcon: Sparkles,
      quality: { speed: 88, cleanliness: 94, transparency: 96 },
      quote: "Le seul garage qui comprend vraiment les Tesla. Calibrage parfait.",
      badges: ['EV Certified', 'Urgence 24h'],
    },
  ];

  return (
    <section className="px-4 py-6 max-w-lg mx-auto space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold tracking-tight text-foreground">Top Spécialistes</h2>
        <button className="label-xs text-primary hover:text-primary/80 transition-colors">
          Voir tout
        </button>
      </div>

      {garages.map((garage, index) => {
        const InsightIcon = garage.insightIcon;
        return (
          <div
            key={garage.name}
            className="glass-elevated rounded-2xl p-4 space-y-3 animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-foreground leading-tight">{garage.name}</h3>
                <p className="text-muted-foreground text-[11px] mt-0.5">{garage.specialty}</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                  <span className="font-mono-data text-base font-bold text-foreground">{garage.rating}</span>
                </div>
                <span className="label-xs text-muted-foreground">{garage.reviews} avis</span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex gap-1.5 flex-wrap">
              {garage.badges.map(badge => (
                <span key={badge} className="label-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full border border-primary/20">
                  {badge}
                </span>
              ))}
            </div>

            {/* Key Insight */}
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-success/10 border border-success/20">
              <InsightIcon className="w-4 h-4 text-success shrink-0" />
              <span className="text-xs text-success font-semibold">{garage.keyInsight}</span>
            </div>

            {/* Service Quality */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5">
                <Gauge className="w-3 h-3 text-muted-foreground" />
                <span className="label-xs text-muted-foreground">Qualité de Service</span>
              </div>
              <QualityBar label="Rapidité" value={garage.quality.speed} />
              <QualityBar label="Propreté" value={garage.quality.cleanliness} />
              <QualityBar label="Transparence" value={garage.quality.transparency} />
            </div>

            {/* Quote */}
            <div className="p-3 rounded-xl bg-secondary/60 border-l-2 border-primary/50">
              <div className="flex items-start gap-2">
                <Eye className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                <p className="text-[11px] text-foreground/70 italic leading-relaxed">
                  "{garage.quote}"
                </p>
              </div>
            </div>

            {/* Book Button */}
            <Button variant="neon" className="w-full text-xs" size="sm">
              Réserver maintenant
            </Button>
          </div>
        );
      })}
    </section>
  );
};

export default ReviewCards;
