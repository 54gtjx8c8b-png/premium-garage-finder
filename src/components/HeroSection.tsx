import { MapPin, Car, Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 px-6 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-glow-pulse" />

      <div className="relative space-y-6 text-center">
        <span className="inline-block text-primary label-text tracking-[0.2em]">
          Expertise Certifiée
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tighter text-foreground text-balance leading-[1.1]">
          L'élite de la mécanique.
          <br />
          <span className="text-foreground/40">Près de chez vous.</span>
        </h1>

        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto text-balance">
          Comparez les meilleurs garages spécialisés pour votre véhicule premium. Transparence, avis vérifiés, expertise garantie.
        </p>

        {/* Search Bar */}
        <div className="mt-12 max-w-2xl mx-auto flex flex-col sm:flex-row p-2 glass-card gap-2 sm:gap-0">
          <div className="flex-1 flex items-center px-4 gap-3 sm:border-r border-glass-border">
            <MapPin className="w-5 h-5 text-primary shrink-0" />
            <input
              type="text"
              placeholder="Ville ou Code Postal"
              className="bg-transparent border-none outline-none focus:ring-0 text-foreground placeholder:text-foreground/30 w-full py-3 sm:py-0 text-sm"
            />
          </div>
          <div className="flex-1 flex items-center px-4 gap-3">
            <Car className="w-5 h-5 text-primary shrink-0" />
            <input
              type="text"
              placeholder="Marque (ex: Audi)"
              className="bg-transparent border-none outline-none focus:ring-0 text-foreground placeholder:text-foreground/30 w-full py-3 sm:py-0 text-sm"
            />
          </div>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 rounded-2xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-2">
            <Search className="w-4 h-4" />
            <span>Comparer</span>
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 pt-8 text-muted-foreground text-xs">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            +2 000 garages référencés
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Avis Google vérifiés
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            100% gratuit
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
