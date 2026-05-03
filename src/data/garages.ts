import { TrendingDown, Sparkles, Wrench, ShieldCheck, Zap } from 'lucide-react';

export type GarageType = 'dealer' | 'independent';
export type PriceLevel = '€' | '€€' | '€€€';

export interface Garage {
  slug: string;
  name: string;
  type: GarageType;
  specialty: string;
  brand: string;
  rating: number;
  reviews: number;
  priceLevel: PriceLevel;
  keyInsight: string;
  insightIcon: any;
  quality: { speed: number; cleanliness: number; transparency: number };
  quote: string;
  badges: string[];
  verified: boolean;
  address: string;
  phone: string;
  website: string;
  description: string;
  images: string[];
  hours: { day: string; open: string; close: string }[];
  coords: { lat: number; lng: number };
}

/**
 * Calculates the Trustmarq Score (0–100).
 * 60% weighted on Google rating (normalized to 100), 40% on review volume (log-scaled, capped at 500).
 */
export function calculateTrustmarqScore(rating: number, reviewCount: number): number {
  const ratingScore = (rating / 5) * 100;
  const volumeScore = Math.min((Math.log10(reviewCount + 1) / Math.log10(501)) * 100, 100);
  return Math.round(ratingScore * 0.6 + volumeScore * 0.4);
}

export const GARAGES: Garage[] = [
  {
    slug: 'concession-volkswagen-d-ieteren-bruxelles',
    name: "D'Ieteren Mail - Concession Volkswagen",
    type: 'dealer',
    specialty: 'Volkswagen, Audi, SEAT, Skoda',
    brand: 'Volkswagen',
    rating: 3.8,
    reviews: 450,
    priceLevel: '€€€',
    keyInsight: 'Expertise constructeur et pièces d\'origine',
    insightIcon: ShieldCheck,
    quality: { speed: 65, cleanliness: 95, transparency: 70 },
    quote: "Service professionnel mais tarifs élevés et délais parfois longs.",
    badges: ['Concession Officielle', 'Garantie Constructeur'],
    verified: true,
    address: 'Rue du Mail 50, 1050 Ixelles, Belgique',
    phone: '+32 2 536 51 11',
    website: 'dieteren.be',
    description: 'Concessionnaire officiel du groupe Volkswagen à Bruxelles. Service après-vente complet.',
    images: [
      'https://images.unsplash.com/photo-1562141961-b5d185666060?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop',
    ],
    hours: [
      { day: 'Lundi', open: '08:00', close: '18:30' },
      { day: 'Mardi', open: '08:00', close: '18:30' },
      { day: 'Mercredi', open: '08:00', close: '18:30' },
      { day: 'Jeudi', open: '08:00', close: '18:30' },
      { day: 'Vendredi', open: '08:00', close: '18:30' },
      { day: 'Samedi', open: '09:00', close: '12:00' },
      { day: 'Dimanche', open: '', close: '' },
    ],
    coords: { lat: 50.8256, lng: 4.3589 },
  },
  {
    slug: 'garage-nicolas-bruxelles',
    name: 'Garage Nicolas',
    type: 'independent',
    specialty: 'Multi-marques',
    brand: 'Toutes marques',
    rating: 4.8,
    reviews: 125,
    priceLevel: '€',
    keyInsight: 'Économisez 40% vs concession',
    insightIcon: TrendingDown,
    quality: { speed: 92, cleanliness: 85, transparency: 98 },
    quote: "Un garagiste de confiance, travail soigné et prix très honnêtes.",
    badges: ['30 ans d\'expérience', 'Service à domicile'],
    verified: true,
    address: 'Rue Vanderlinden 150, 1030 Bruxelles, Belgique',
    phone: '+32 2 42 94 62',
    website: 'garagenicolas.be',
    description: 'Spécialiste multi-marques avec 30 ans d\'expérience. Propose le pré-contrôle technique et la mécanique générale.',
    images: [
      'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop',
    ],
    hours: [
      { day: 'Lundi', open: '08:30', close: '18:30' },
      { day: 'Mardi', open: '08:30', close: '18:30' },
      { day: 'Mercredi', open: '08:30', close: '18:30' },
      { day: 'Jeudi', open: '08:30', close: '18:30' },
      { day: 'Vendredi', open: '08:30', close: '18:30' },
      { day: 'Samedi', open: '09:00', close: '13:00' },
      { day: 'Dimanche', open: '', close: '' },
    ],
    coords: { lat: 50.8638, lng: 4.3655 },
  },
  {
    slug: 'garage-auto-allee-verte',
    name: 'Garage Auto Allée Verte',
    type: 'independent',
    specialty: '1,2,3 AutoService',
    brand: 'Multi-marques',
    rating: 4.5,
    reviews: 84,
    priceLevel: '€€',
    keyInsight: 'Réseau 1,2,3 AutoService de confiance',
    insightIcon: Sparkles,
    quality: { speed: 94, cleanliness: 94, transparency: 94 },
    quote: "Accueil agréable et prise en charge rapide. Travail bien fait.",
    badges: ['1,2,3 AutoService', 'Certifié Clim'],
    verified: true,
    address: 'Allée Verte, 1000 Bruxelles, Belgique',
    phone: '+32 2 218 55 66',
    website: 'alleeverte.be',
    description: 'Membre du réseau 1,2,3 AutoService. Expertise en mécanique et climatisation.',
    images: [
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1507136566006-bb71ef556e3f?w=800&h=500&fit=crop',
    ],
    hours: [
      { day: 'Lundi', open: '08:00', close: '18:00' },
      { day: 'Mardi', open: '08:00', close: '18:00' },
      { day: 'Mercredi', open: '08:00', close: '18:00' },
      { day: 'Jeudi', open: '08:00', close: '18:00' },
      { day: 'Vendredi', open: '08:00', close: '17:00' },
      { day: 'Samedi', open: '', close: '' },
      { day: 'Dimanche', open: '', close: '' },
    ],
    coords: { lat: 50.8612, lng: 4.3512 },
  },
  {
    slug: 'carrosserie-nicosia-uccle',
    name: 'Carrosserie Nicosia SC',
    type: 'independent',
    specialty: 'Carrosserie & Peinture',
    brand: 'Toutes marques',
    rating: 4.9,
    reviews: 156,
    priceLevel: '€€',
    keyInsight: 'Expert carrosserie hautement recommandé',
    insightIcon: Wrench,
    quality: { speed: 90, cleanliness: 98, transparency: 95 },
    quote: "Travail de carrosserie impeccable, accueil chaleureux.",
    badges: ['Expert Carrosserie', 'Peinture Premium'],
    verified: true,
    address: 'Chaussée d\'Alsemberg 638, 1180 Uccle, Belgique',
    phone: '+32 2 344 12 34',
    website: 'carrosserienicosia.be',
    description: 'Spécialiste en carrosserie et peinture automobile à Uccle. Réparations toutes marques.',
    images: [
      'https://images.unsplash.com/photo-1507136566006-bb71ef556e3f?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?w=800&h=500&fit=crop',
    ],
    hours: [
      { day: 'Lundi', open: '08:00', close: '18:00' },
      { day: 'Mardi', open: '08:00', close: '18:00' },
      { day: 'Mercredi', open: '08:00', close: '18:00' },
      { day: 'Jeudi', open: '08:00', close: '18:00' },
      { day: 'Vendredi', open: '08:00', close: '17:00' },
      { day: 'Samedi', open: '09:00', close: '12:00' },
      { day: 'Dimanche', open: '', close: '' },
    ],
    coords: { lat: 50.8034, lng: 4.3356 },
  },
  {
    slug: 'garage-mullens-halen',
    name: 'Garage Mullens',
    type: 'independent',
    specialty: 'Vente & Entretien',
    brand: 'Ford',
    rating: 5.0,
    reviews: 42,
    priceLevel: '€€',
    keyInsight: 'Excellent accueil et rapidité',
    insightIcon: Sparkles,
    quality: { speed: 95, cleanliness: 90, transparency: 95 },
    quote: "J'ai acheté une voiture d'occasion. Tout s'est déroulé parfaitement.",
    badges: ['Vente Occasion', 'Service Rapide'],
    verified: true,
    address: 'Staatsbaan 57, 3545 Halen, Belgique',
    phone: '+32 13 77 11 22',
    website: 'garagemullens.be',
    description: 'Garage familial spécialisé dans la vente de véhicules d\'occasion et l\'entretien toutes marques.',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop',
    ],
    hours: [
      { day: 'Lundi', open: '08:30', close: '18:00' },
      { day: 'Mardi', open: '08:30', close: '18:00' },
      { day: 'Mercredi', open: '08:30', close: '18:00' },
      { day: 'Jeudi', open: '08:30', close: '18:00' },
      { day: 'Vendredi', open: '08:30', close: '18:00' },
      { day: 'Samedi', open: '09:00', close: '12:00' },
      { day: 'Dimanche', open: '', close: '' },
    ],
    coords: { lat: 50.9478, lng: 5.1123 },
  }
];
