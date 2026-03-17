import { Search, BadgeCheck } from 'lucide-react';
import { useState } from 'react';

const StickyHeader = () => {
  const [query, setQuery] = useState('');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-lg mx-auto px-4">
        {/* Top row */}
        <div className="h-12 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-foreground font-bold text-[15px] tracking-tight">
              TRUSTMARQ
            </span>
            <BadgeCheck className="w-4 h-4 text-primary" />
          </div>
          <button className="text-xs text-primary font-semibold hover:text-primary/80 transition-colors">
            Sign in
          </button>
        </div>
        {/* Search row */}
        <div className="pb-3">
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-card border border-border focus-within:border-primary/50 transition-colors">
            <Search className="w-4 h-4 text-muted-foreground shrink-0" />
            <input
              type="text"
              placeholder="Search city or car brand..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground w-full text-sm"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;
