import { MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 backdrop-blur-md bg-background/60">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <MapPin className="w-4 h-4 text-primary" />
          </div>
          <span className="text-foreground font-semibold text-lg tracking-tight">
            Garage<span className="text-primary">Match</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#compare" className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200">
            Comparer
          </a>
          <a href="#how" className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200">
            Comment ça marche
          </a>
          <a href="#about" className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200">
            À propos
          </a>
          <button className="bg-primary text-primary-foreground font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 hover:bg-primary/90 active:scale-95">
            Trouver mon garage
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-glass-border px-6 py-6 space-y-4">
          <a href="#compare" className="block text-muted-foreground text-sm hover:text-foreground transition-colors">
            Comparer
          </a>
          <a href="#how" className="block text-muted-foreground text-sm hover:text-foreground transition-colors">
            Comment ça marche
          </a>
          <a href="#about" className="block text-muted-foreground text-sm hover:text-foreground transition-colors">
            À propos
          </a>
          <button className="w-full bg-primary text-primary-foreground font-bold text-sm px-5 py-3 rounded-xl">
            Trouver mon garage
          </button>
        </div>
      )}

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />
    </nav>
  );
};

export default Navbar;
