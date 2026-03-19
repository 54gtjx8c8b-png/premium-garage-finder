import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, BadgeCheck, Clock, MapPin, Phone, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/garage/BookingForm';
import GarageGallery from '@/components/garage/GarageGallery';
import GarageHours from '@/components/garage/GarageHours';
import GarageMap from '@/components/garage/GarageMap';
import GarageReviews from '@/components/garage/GarageReviews';

const GARAGE_DATA: Record<string, {
  name: string;
  specialty: string;
  rating: number;
  score: number;
  reviews: number;
  address: string;
  phone: string;
  website: string;
  description: string;
  badges: string[];
  images: string[];
  hours: { day: string; open: string; close: string }[];
  coords: { lat: number; lng: number };
}> = {
  'autoprecision-paris': {
    name: 'AutoPrecision Paris 16',
    specialty: 'Porsche & VW Group',
    rating: 4.9,
    score: 96,
    reviews: 127,
    address: '42 Avenue Foch, 75016 Paris',
    phone: '+33 1 45 00 12 34',
    website: 'autoprecision.fr',
    description: 'Spécialiste Porsche et VW Group depuis 2008. Diagnostics de pointe, pièces OEM et suivi personnalisé pour chaque véhicule.',
    badges: ['Porsche Specialist', 'OEM Parts', 'Warranty Safe'],
    images: [
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop',
    ],
    hours: [
      { day: 'Lundi', open: '08:00', close: '18:30' },
      { day: 'Mardi', open: '08:00', close: '18:30' },
      { day: 'Mercredi', open: '08:00', close: '18:30' },
      { day: 'Jeudi', open: '08:00', close: '18:30' },
      { day: 'Vendredi', open: '08:00', close: '17:00' },
      { day: 'Samedi', open: '09:00', close: '13:00' },
      { day: 'Dimanche', open: '', close: '' },
    ],
    coords: { lat: 48.8706, lng: 2.2862 },
  },
  'electrodrive-bordeaux': {
    name: 'ElectroDrive Bordeaux',
    specialty: 'Tesla & EV Specialist',
    rating: 4.7,
    score: 93,
    reviews: 84,
    address: '15 Quai des Chartrons, 33000 Bordeaux',
    phone: '+33 5 56 00 67 89',
    website: 'electrodrive.fr',
    description: 'Centre certifié véhicules électriques. Expertise Tesla, calibration batteries et entretien haute tension.',
    badges: ['EV Certified', '24h Emergency', 'Tesla Approved'],
    images: [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=500&fit=crop',
    ],
    hours: [
      { day: 'Lundi', open: '07:30', close: '19:00' },
      { day: 'Mardi', open: '07:30', close: '19:00' },
      { day: 'Mercredi', open: '07:30', close: '19:00' },
      { day: 'Jeudi', open: '07:30', close: '19:00' },
      { day: 'Vendredi', open: '07:30', close: '18:00' },
      { day: 'Samedi', open: '08:00', close: '14:00' },
      { day: 'Dimanche', open: '', close: '' },
    ],
    coords: { lat: 44.8551, lng: -0.5696 },
  },
};

const GarageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const garage = GARAGE_DATA[id || ''] || GARAGE_DATA['autoprecision-paris'];

  return (
    <div className="min-h-screen bg-background">
      {/* Back header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link to="/" className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Retour</span>
          </Link>
        </div>
      </header>

      <main className="pt-14 pb-24 md:pb-12">
        {/* Gallery */}
        <GarageGallery images={garage.images} name={garage.name} />

        <div className="max-w-4xl mx-auto px-4 md:px-6">
          {/* Garage header info */}
          <motion.div
            className="py-5 space-y-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-1.5">
                  <h1 className="text-xl md:text-2xl font-bold text-foreground">{garage.name}</h1>
                  <BadgeCheck className="w-5 h-5 text-primary shrink-0" />
                </div>
                <p className="text-muted-foreground text-sm mt-0.5">{garage.specialty}</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-mono-data text-xl font-bold text-foreground">{garage.rating}</span>
                </div>
                <span className="text-xs text-muted-foreground">{garage.reviews} avis</span>
              </div>
            </div>

            <p className="text-sm text-foreground/70 leading-relaxed">{garage.description}</p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
                Score: {garage.score}/100
              </span>
              {garage.badges.map(badge => (
                <span key={badge} className="text-xs font-medium text-muted-foreground px-3 py-1 rounded-full border border-border">
                  {badge}
                </span>
              ))}
            </div>

            {/* Contact info */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{garage.address}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                <span>{garage.phone}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>{garage.website}</span>
              </div>
            </div>
          </motion.div>

          {/* Content grid */}
          <div className="grid md:grid-cols-5 gap-5 pb-8">
            <div className="md:col-span-3 space-y-5">
              <GarageHours hours={garage.hours} />
              <GarageMap address={garage.address} coords={garage.coords} />
              <GarageReviews garageName={garage.name} rating={garage.rating} reviewCount={garage.reviews} />
            </div>
            <div className="md:col-span-2">
              <BookingForm garageName={garage.name} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GarageDetail;
