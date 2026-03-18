import { BadgeCheck, Shield, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const SearchHero = () => {
  return (
    <section className="px-4 md:px-6 pt-28 md:pt-24 pb-4 md:pb-8 max-w-6xl mx-auto">
      <motion.div
        className="space-y-4 text-center md:text-left md:flex md:items-center md:justify-between md:gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
      >
        <div className="md:flex-1">
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance leading-snug"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
          >
            Find the best garage.
            <br />
            <span className="text-primary">Verified by real reviews.</span>
          </motion.h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-[420px] mx-auto md:mx-0 mt-3 leading-relaxed">
            Compare dealerships and independents side-by-side. Save money, get better service.
          </p>
        </div>

        {/* Trust indicators */}
        <div className="flex justify-center md:justify-end gap-5 md:gap-6 pt-2 md:pt-0">
          {[
            { icon: BadgeCheck, label: 'Verified reviews' },
            { icon: Shield, label: 'Transparent pricing' },
            { icon: TrendingUp, label: 'Save up to 40%' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <span className="text-[10px] md:text-xs text-muted-foreground font-medium">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SearchHero;
