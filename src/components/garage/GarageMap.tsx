import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface GarageMapProps {
  address: string;
  coords: { lat: number; lng: number };
}

const GarageMap = ({ address, coords }: GarageMapProps) => {
  return (
    <motion.div
      className="surface-card overflow-hidden"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1, ease: [0.2, 0, 0, 1] }}
    >
      {/* Map placeholder */}
      <div className="relative aspect-[16/9] bg-secondary flex items-center justify-center">
        <div className="text-center space-y-2">
          <MapPin className="w-8 h-8 text-primary mx-auto" />
          <p className="text-xs text-muted-foreground">{address}</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${coords.lat},${coords.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            Ouvrir dans Google Maps →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default GarageMap;
