import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icon
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

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
      <div className="relative aspect-[16/9] z-0">
        <MapContainer
          center={[coords.lat, coords.lng]}
          zoom={15}
          scrollWheelZoom={false}
          className="w-full h-full"
          style={{ background: 'hsl(217 33% 17%)' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          <Marker position={[coords.lat, coords.lng]} icon={defaultIcon}>
            <Popup>
              <span className="text-xs font-semibold">{address}</span>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="p-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="w-3.5 h-3.5 text-primary" />
          <span>{address}</span>
        </div>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${coords.lat},${coords.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-primary font-semibold hover:text-primary/80 transition-colors"
        >
          Itinéraire →
        </a>
      </div>
    </motion.div>
  );
};

export default GarageMap;
