import { Bell, User } from 'lucide-react';

const StickyHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 glass">
      <div className="max-w-lg mx-auto h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-7 h-7 rounded-lg bg-primary/15 flex items-center justify-center gold-glow">
            <span className="text-primary font-bold text-[9px] font-mono">TM</span>
          </div>
          <span className="text-foreground font-display text-sm tracking-[0.06em]">
            Trust<span className="text-primary">marq</span>
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button className="relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-glass-hover transition-colors duration-200">
            <Bell className="w-[18px] h-[18px] text-muted-foreground" />
            <span className="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-primary gold-glow" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-glass-hover transition-colors duration-200">
            <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center border border-glass-border">
              <User className="w-3.5 h-3.5 text-muted-foreground" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;
