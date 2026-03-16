import { Search, MapPin, Car, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const brands = ['Audi', 'BMW', 'Mercedes', 'Porsche', 'Tesla', 'Volkswagen'];
const cities = ['Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Lille', 'Nice'];

const SearchHero = () => {
  const [brand, setBrand] = useState('');
  const [city, setCity] = useState('');
  const [showBrandSuggestions, setShowBrandSuggestions] = useState(false);
  const [showCitySuggestions, setShowCitySuggestions] = useState(false);

  const filteredBrands = brands.filter(b =>
    b.toLowerCase().includes(brand.toLowerCase())
  );
  const filteredCities = cities.filter(c =>
    c.toLowerCase().includes(city.toLowerCase())
  );

  return (
    <section className="px-4 pt-20 pb-6 max-w-lg mx-auto">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/8 rounded-full blur-[100px] pointer-events-none animate-glow-pulse" />

      <div className="relative space-y-4 text-center">
        <span className="inline-block text-primary label-xs tracking-[0.2em]">
          Expertise Certifiée
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance leading-[1.15]">
          L'élite de la
          <br />
          mécanique.
          <span className="block text-muted-foreground text-2xl sm:text-3xl mt-1 font-semibold">
            Près de chez vous.
          </span>
        </h1>

        {/* Search Card */}
        <div className="mt-6 glass-elevated rounded-2xl p-3 space-y-2">
          {/* Brand Input */}
          <div className="relative">
            <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-secondary/50 border border-glass-border focus-within:border-primary/40 transition-colors duration-200">
              <Car className="w-4 h-4 text-primary shrink-0" />
              <input
                type="text"
                placeholder="Marque du véhicule..."
                value={brand}
                onChange={(e) => { setBrand(e.target.value); setShowBrandSuggestions(true); }}
                onFocus={() => setShowBrandSuggestions(true)}
                onBlur={() => setTimeout(() => setShowBrandSuggestions(false), 200)}
                className="bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground w-full text-sm"
              />
              <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
            </div>
            {showBrandSuggestions && brand.length > 0 && filteredBrands.length > 0 && (
              <div className="absolute z-20 top-full mt-1 left-0 right-0 glass-elevated rounded-xl overflow-hidden py-1">
                {filteredBrands.map(b => (
                  <button
                    key={b}
                    onMouseDown={() => { setBrand(b); setShowBrandSuggestions(false); }}
                    className="w-full text-left px-4 py-2.5 text-sm text-foreground hover:bg-glass-hover transition-colors flex items-center gap-2"
                  >
                    <Car className="w-3.5 h-3.5 text-primary" />
                    {b}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* City Input */}
          <div className="relative">
            <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-secondary/50 border border-glass-border focus-within:border-primary/40 transition-colors duration-200">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <input
                type="text"
                placeholder="Ville ou code postal..."
                value={city}
                onChange={(e) => { setCity(e.target.value); setShowCitySuggestions(true); }}
                onFocus={() => setShowCitySuggestions(true)}
                onBlur={() => setTimeout(() => setShowCitySuggestions(false), 200)}
                className="bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground w-full text-sm"
              />
              <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
            </div>
            {showCitySuggestions && city.length > 0 && filteredCities.length > 0 && (
              <div className="absolute z-20 top-full mt-1 left-0 right-0 glass-elevated rounded-xl overflow-hidden py-1">
                {filteredCities.map(c => (
                  <button
                    key={c}
                    onMouseDown={() => { setCity(c); setShowCitySuggestions(false); }}
                    className="w-full text-left px-4 py-2.5 text-sm text-foreground hover:bg-glass-hover transition-colors flex items-center gap-2"
                  >
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    {c}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Button */}
          <button className="w-full bg-primary text-primary-foreground font-bold py-3.5 rounded-xl neon-glow-strong hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 text-sm">
            <Search className="w-4 h-4" />
            Comparer les garages
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 pt-4 text-muted-foreground text-[11px]">
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-primary" />
            2 000+ garages
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-success" />
            Avis vérifiés
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-gold" />
            100% gratuit
          </span>
        </div>
      </div>
    </section>
  );
};

export default SearchHero;
