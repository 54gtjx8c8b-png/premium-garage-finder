import { BadgeCheck, Shield, TrendingUp } from 'lucide-react';

const SearchHero = () => {
  return (
    <section className="px-4 pt-28 pb-4 max-w-lg mx-auto">
      <div className="space-y-3 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground text-balance leading-snug">
          Find the best garage.
          <br />
          <span className="text-primary">Verified by real reviews.</span>
        </h1>
        <p className="text-muted-foreground text-sm max-w-[300px] mx-auto leading-relaxed">
          Compare dealerships and independents side-by-side. Save money, get better service.
        </p>

        {/* Trust indicators */}
        <div className="flex justify-center gap-4 pt-2">
          {[
            { icon: BadgeCheck, label: 'Verified reviews' },
            { icon: Shield, label: 'Transparent pricing' },
            { icon: TrendingUp, label: 'Save up to 40%' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-[10px] text-muted-foreground font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchHero;
