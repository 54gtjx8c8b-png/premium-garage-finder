import { Star, TrendingDown, Gauge, Sparkles, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TrustmarqBadge from '@/components/TrustmarqBadge';

interface QualityBarProps {
  label: string;
  value: number;
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

const PriceQualityChart = () => (
  <div className="p-3 rounded-xl bg-secondary/40 border border-glass-border">
    <div className="flex items-center gap-1.5 mb-2">
      <span className="label-xs text-muted-foreground">Price vs Quality</span>
    </div>
    <div className="relative h-24 w-full">
      {/* Y-axis */}
      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[8px] text-muted-foreground font-mono pr-1">
        <span>High</span>
        <span>Low</span>
      </div>
      {/* X-axis */}
      <div className="absolute bottom-0 left-6 right-0 flex justify-between text-[8px] text-muted-foreground font-mono">
        <span>Low Quality</span>
        <span>High Quality</span>
      </div>
      {/* Grid */}
      <div className="absolute left-6 top-0 right-0 bottom-4 border-l border-b border-glass-border">
        {/* Dealer dot */}
        <div className="absolute top-2 left-[30%] -translate-x-1/2 flex flex-col items-center gap-0.5">
          <div className="w-3 h-3 rounded-full bg-destructive/80 border-2 border-destructive" />
          <span className="text-[7px] text-muted-foreground whitespace-nowrap">Dealer</span>
        </div>
        {/* Independent dot */}
        <div className="absolute bottom-6 right-[15%] -translate-x-1/2 flex flex-col items-center gap-0.5">
          <div className="w-3.5 h-3.5 rounded-full bg-primary/80 border-2 border-primary gold-glow" />
          <span className="text-[7px] text-primary whitespace-nowrap">Independent</span>
        </div>
      </div>
    </div>
  </div>
);

const ReviewCards = () => {
  const garages = [
    {
      name: 'AutoPrecision Paris 16',
      specialty: 'Porsche & VW Group',
      rating: 4.9,
      reviews: 127,
      score: 96,
      keyInsight: 'Save 40% vs Dealership',
      insightIcon: TrendingDown,
      quality: { speed: 92, cleanliness: 95, transparency: 98 },
      quote: "Ultra-precise diagnostics in 20 min. Impeccable personalized follow-up.",
      badges: ['Porsche Specialist', 'OEM Parts'],
    },
    {
      name: 'ElectroDrive Bordeaux',
      specialty: 'Tesla & EV Specialist',
      rating: 4.7,
      reviews: 84,
      score: 93,
      keyInsight: '#1 for Electric Vehicles',
      insightIcon: Sparkles,
      quality: { speed: 88, cleanliness: 94, transparency: 96 },
      quote: "The only garage that truly understands Tesla. Perfect calibration.",
      badges: ['EV Certified', '24h Emergency'],
    },
  ];

  return (
    <section className="px-4 py-6 max-w-lg mx-auto space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-bold tracking-tight text-foreground">Top Specialists</h2>
        <button className="label-xs text-primary hover:text-primary/80 transition-colors">
          View all
        </button>
      </div>

      {garages.map((garage, index) => {
        const InsightIcon = garage.insightIcon;
        return (
          <div
            key={garage.name}
            className="glass-elevated rounded-2xl p-4 space-y-3 animate-fade-in relative"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Trustmarq Badge */}
            {garage.score >= 90 && (
              <div className="absolute -top-3 right-4">
                <TrustmarqBadge score={garage.score} size="sm" />
              </div>
            )}

            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-foreground leading-tight">{garage.name}</h3>
                <p className="text-muted-foreground text-[11px] mt-0.5">{garage.specialty}</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-primary text-primary" />
                  <span className="font-mono-data text-base font-bold text-foreground">{garage.rating}</span>
                </div>
                <span className="label-xs text-muted-foreground">{garage.reviews} reviews</span>
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

            {/* Price vs Quality Chart */}
            <PriceQualityChart />

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
            <div className="p-3 rounded-xl bg-secondary/60 border-l-2 border-primary/50">
              <div className="flex items-start gap-2">
                <Eye className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                <p className="text-[11px] text-foreground/70 italic leading-relaxed">
                  "{garage.quote}"
                </p>
              </div>
            </div>

            {/* Book Button */}
            <Button variant="gold" className="w-full text-xs" size="sm">
              Secure an Appointment
            </Button>
          </div>
        );
      })}
    </section>
  );
};

export default ReviewCards;
