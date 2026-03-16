import { Star, Shield, Clock, Wrench } from 'lucide-react';

const ComparisonSection = () => {
  return (
    <section id="compare" className="px-6 py-16 max-w-5xl mx-auto">
      <div className="text-center mb-12 space-y-3">
        <span className="text-primary label-text tracking-[0.2em]">Comparaison en direct</span>
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tighter text-foreground text-balance">
          Concession vs Spécialiste
        </h2>
        <p className="text-muted-foreground text-sm max-w-lg mx-auto">
          Voyez la différence. Choisissez en connaissance de cause.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {/* Card 1: Dealership */}
        <div className="group relative p-6 md:p-8 glass-card glass-card-hover">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-background rounded-xl border border-glass-border">
              <span className="text-foreground/80 font-bold text-sm">AUDI</span>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-yellow-500 font-mono text-lg">
                <Star className="w-4 h-4 fill-current" />
                <span>3.2</span>
              </div>
              <span className="label-text text-foreground/40">142 avis Google</span>
            </div>
          </div>

          <h3 className="text-xl font-medium text-foreground mb-1">Concession Audi Officielle</h3>
          <p className="text-foreground/40 text-sm mb-6">Service standard constructeur</p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="p-3 rounded-lg bg-background/60 text-center">
              <Clock className="w-4 h-4 text-muted-foreground mx-auto mb-1" />
              <span className="font-mono text-sm text-foreground">5-7j</span>
              <p className="label-text text-foreground/30 mt-1">Délai</p>
            </div>
            <div className="p-3 rounded-lg bg-background/60 text-center">
              <Shield className="w-4 h-4 text-muted-foreground mx-auto mb-1" />
              <span className="font-mono text-sm text-foreground">€€€</span>
              <p className="label-text text-foreground/30 mt-1">Tarif</p>
            </div>
            <div className="p-3 rounded-lg bg-background/60 text-center">
              <Wrench className="w-4 h-4 text-muted-foreground mx-auto mb-1" />
              <span className="font-mono text-sm text-foreground">Std</span>
              <p className="label-text text-foreground/30 mt-1">Expertise</p>
            </div>
          </div>

          {/* Review quote */}
          <div className="p-4 bg-background/40 rounded-lg italic text-sm text-foreground/60 border-l-2 border-foreground/20">
            "Délais longs et tarifs élevés pour une simple révision. Pas de suivi personnalisé."
          </div>
        </div>

        {/* Card 2: Specialist (The Match) */}
        <div className="group relative p-6 md:p-8 glass-card-primary glass-card-hover">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground label-text px-4 py-1.5 rounded-full tracking-wider">
            Meilleur Choix
          </div>

          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-background rounded-xl border border-primary/20">
              <span className="text-primary font-bold text-sm">AUDI</span>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-primary font-mono text-lg">
                <Star className="w-4 h-4 fill-current" />
                <span>4.8</span>
              </div>
              <span className="label-text text-primary/60 font-bold">89 avis vérifiés</span>
            </div>
          </div>

          <h3 className="text-xl font-medium text-foreground mb-1">RS Specialist Indépendant</h3>
          <p className="text-primary/60 text-sm mb-6">Expertise Performance & Sport</p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="p-3 rounded-lg bg-primary/10 text-center">
              <Clock className="w-4 h-4 text-primary mx-auto mb-1" />
              <span className="font-mono text-sm text-foreground">1-2j</span>
              <p className="label-text text-primary/40 mt-1">Délai</p>
            </div>
            <div className="p-3 rounded-lg bg-primary/10 text-center">
              <Shield className="w-4 h-4 text-primary mx-auto mb-1" />
              <span className="font-mono text-sm text-foreground">€€</span>
              <p className="label-text text-primary/40 mt-1">Tarif</p>
            </div>
            <div className="p-3 rounded-lg bg-primary/10 text-center">
              <Wrench className="w-4 h-4 text-primary mx-auto mb-1" />
              <span className="font-mono text-sm text-foreground">Pro</span>
              <p className="label-text text-primary/40 mt-1">Expertise</p>
            </div>
          </div>

          {/* Review quote */}
          <div className="p-4 bg-primary/10 rounded-lg italic text-sm text-foreground/80 border-l-2 border-primary">
            "Une connaissance pointue des moteurs RS. Travail d'orfèvre. Je ne retournerai jamais en concession."
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
