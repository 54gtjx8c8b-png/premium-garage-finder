import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, BadgeCheck, MapPin, Phone, Globe, ShieldCheck, FileText } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/garage/BookingForm';
import GarageGallery from '@/components/garage/GarageGallery';
import GarageHours from '@/components/garage/GarageHours';
import GarageMap from '@/components/garage/GarageMap';
import GarageReviews from '@/components/garage/GarageReviews';
import QuoteModal from '@/components/QuoteModal';
import { GARAGES, calculateTrustmarqScore } from '@/data/garages';

const GarageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quoteOpen, setQuoteOpen] = useState(false);
  
  const garage = GARAGES.find(g => g.slug === id) || GARAGES[0];
  const score = calculateTrustmarqScore(garage.rating, garage.reviews);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link to="/" className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Retour</span>
          </Link>
        </div>
      </header>

      <main className="pt-14 pb-24 md:pb-12">
        <GarageGallery images={garage.images} name={garage.name} />

        <div className="max-w-4xl mx-auto px-4 md:px-6">
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
                  {garage.verified && <BadgeCheck className="w-5 h-5 text-primary shrink-0" />}
                </div>
                <p className="text-muted-foreground text-sm mt-0.5">{garage.specialty} · {garage.priceLevel}</p>
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
              <span className="inline-flex items-center gap-1 text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                Score: {score}/100
              </span>
              <span className={`text-xs font-medium px-3 py-1 rounded-full border ${
                garage.type === 'dealer'
                  ? 'text-[hsl(var(--warning))] border-[hsl(var(--warning))]/20 bg-[hsl(var(--warning))]/10'
                  : 'text-muted-foreground border-border'
              }`}>
                {garage.type === 'dealer' ? 'Concession' : 'Indépendant'}
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

            {/* CTA buttons */}
            <div className="flex gap-3 pt-1">
              <a href={`tel:${garage.phone}`} className="flex-1">
                <Button variant="outline" className="w-full">
                  <Phone className="w-4 h-4" />
                  Appeler
                </Button>
              </a>
              <Button className="flex-1" onClick={() => setQuoteOpen(true)}>
                <FileText className="w-4 h-4" />
                Demander un devis
              </Button>
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

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} garageName={garage.name} />
    </div>
  );
};

export default GarageDetail;
