import { MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-glass-border px-6 py-12 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-primary/20 flex items-center justify-center">
            <MapPin className="w-3 h-3 text-primary" />
          </div>
          <span className="text-foreground/60 text-sm font-medium">
            Garage<span className="text-primary">Match</span>
          </span>
        </div>
        <p className="text-foreground/30 text-xs">
          © 2026 GarageMatch. Trouvez l'expertise que votre véhicule mérite.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
