import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Loader2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Garage } from '@/hooks/useGarages';
import { getDistanceKm } from '@/hooks/useGeolocation';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const garageIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const userIcon = L.divIcon({
  html: '<div style="width:16px;height:16px;background:hsl(217 91% 60%);border:3px solid white;border-radius:50%;box-shadow:0 0 8px rgba(59,130,246,0.6)"></div>',
  iconSize: [16, 16],
  iconAnchor: [8, 8],
  className: '',
});

function FitBounds({ garages, userPos }: { garages: Garage[]; userPos: { lat: number; lng: number } | null }) {
  const map = useMap();
  useEffect(() => {
    const points: [number, number][] = garages.map(g => [g.coords.lat, g.coords.lng]);
    if (userPos) points.push([userPos.lat, userPos.lng]);
    if (points.length > 1) {
      map.fitBounds(L.latLngBounds(points), { padding: [30, 30], maxZoom: 12 });
    } else if (points.length === 1) {
      map.setView(points[0], 12);
    }
  }, [garages, userPos, map]);
  return null;
}

interface HomeMapProps {
  garages: Garage[];
  userPosition: { lat: number; lng: number } | null;
  loading: boolean;
  error: string | null;
  onRequestLocation: () => void;
  onClearLocation: () => void;
  radius: number | null;
  onRadiusChange: (r: number | null) => void;
}

const RADIUS_OPTIONS = [5, 10, 25, 50] as const;

const HomeMap = ({ garages, userPosition, loading, error, onRequestLocation, onClearLocation, radius, onRadiusChange }: HomeMapProps) => {
  const defaultCenter: [number, number] = [46.6, 2.5];

  const visibleGarages = userPosition && radius
    ? garages.filter(g => getDistanceKm(userPosition.lat, userPosition.lng, g.coords.lat, g.coords.lng) <= radius)
    : garages;

  return (
    <motion.div
      className="surface-card overflow-hidden"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
    >
      {/* Geolocation controls */}
      <div className="p-3 flex items-center justify-between border-b border-border">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold text-foreground">Carte des garages</span>
          {userPosition && (
            <span className="text-[10px] text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
              Autour de vous
            </span>
          )}
        </div>
        <div className="flex items-center gap-1.5">
          {userPosition && (
            <Button variant="ghost" size="sm" className="h-7 text-[10px] px-2" onClick={onClearLocation}>
              <X className="w-3 h-3 mr-1" />
              Réinitialiser
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            className="h-7 text-[10px] px-2.5"
            onClick={onRequestLocation}
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="w-3 h-3 mr-1 animate-spin" />
            ) : (
              <Navigation className="w-3 h-3 mr-1" />
            )}
            {userPosition ? 'Actualiser' : 'Me localiser'}
          </Button>
        </div>
      </div>

      {error && (
        <div className="px-3 py-2 text-[11px] text-destructive bg-destructive/10 border-b border-destructive/20">
          {error}
        </div>
      )}

      {/* Map */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] z-0">
        <MapContainer
          center={defaultCenter}
          zoom={6}
          scrollWheelZoom={false}
          className="w-full h-full"
          style={{ background: 'hsl(217 33% 17%)' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          <FitBounds garages={garages} userPos={userPosition} />

          {userPosition && (
            <Marker position={[userPosition.lat, userPosition.lng]} icon={userIcon}>
              <Popup><span className="text-xs font-semibold">Votre position</span></Popup>
            </Marker>
          )}

          {garages.map((garage) => (
            <Marker key={garage.id} position={[garage.coords.lat, garage.coords.lng]} icon={garageIcon}>
              <Popup>
                <div className="min-w-[160px]">
                  <p className="text-xs font-bold">{garage.name}</p>
                  <p className="text-[10px] text-gray-500">{garage.specialty}</p>
                  {userPosition && (
                    <p className="text-[10px] text-blue-600 font-semibold mt-0.5">
                      {getDistanceKm(userPosition.lat, userPosition.lng, garage.coords.lat, garage.coords.lng)} km
                    </p>
                  )}
                  <Link to={`/garage/${garage.slug}`} className="text-[10px] text-blue-500 font-semibold mt-1 block">
                    Voir la fiche →
                  </Link>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Distance list when geolocated */}
      {userPosition && garages.length > 0 && (
        <div className="p-3 border-t border-border">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-2">
            Distance depuis votre position
          </p>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {[...garages]
              .sort((a, b) =>
                getDistanceKm(userPosition.lat, userPosition.lng, a.coords.lat, a.coords.lng) -
                getDistanceKm(userPosition.lat, userPosition.lng, b.coords.lat, b.coords.lng)
              )
              .map((g) => (
                <Link
                  key={g.id}
                  to={`/garage/${g.slug}`}
                  className="shrink-0 flex items-center gap-2 px-3 py-2 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors"
                >
                  <div>
                    <p className="text-[11px] font-semibold text-foreground whitespace-nowrap">{g.name}</p>
                    <p className="text-[10px] text-primary font-bold">
                      {getDistanceKm(userPosition.lat, userPosition.lng, g.coords.lat, g.coords.lng)} km
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default HomeMap;
