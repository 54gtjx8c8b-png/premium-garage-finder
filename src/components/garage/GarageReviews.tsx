import { Star, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface GarageReviewsProps {
  garageName: string;
  rating: number;
  reviewCount: number;
}

const SAMPLE_REVIEWS = [
  {
    author: 'Marc D.',
    date: 'Il y a 2 semaines',
    rating: 5,
    text: "Diagnostic ultra-précis en 20 min. Suivi impeccable et tarifs justes. Je recommande à 100%.",
    helpful: 12,
  },
  {
    author: 'Sophie L.',
    date: 'Il y a 1 mois',
    rating: 5,
    text: "Accueil professionnel, explications claires. Ma Porsche n'a jamais été aussi bien entretenue.",
    helpful: 8,
  },
  {
    author: 'Thomas R.',
    date: 'Il y a 2 mois',
    rating: 4,
    text: "Très bon travail sur ma Golf GTI. Seul bémol : délai un peu long pour le rendez-vous.",
    helpful: 5,
  },
];

const GarageReviews = ({ garageName, rating, reviewCount }: GarageReviewsProps) => {
  return (
    <motion.div
      className="surface-card p-4 space-y-4"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.15, ease: [0.2, 0, 0, 1] }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Avis vérifiés</h3>
        <div className="flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span className="font-mono-data text-sm font-bold text-foreground">{rating}</span>
          <span className="text-xs text-muted-foreground">({reviewCount})</span>
        </div>
      </div>

      <div className="space-y-3">
        {SAMPLE_REVIEWS.map((review, index) => (
          <motion.div
            key={review.author}
            className="p-3 rounded-xl bg-secondary/40 border border-border space-y-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-primary">{review.author.charAt(0)}</span>
                </div>
                <div>
                  <span className="text-xs font-semibold text-foreground">{review.author}</span>
                  <p className="text-[10px] text-muted-foreground">{review.date}</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${i <= review.rating ? 'fill-amber-400 text-amber-400' : 'text-border'}`}
                  />
                ))}
              </div>
            </div>
            <p className="text-xs text-foreground/70 leading-relaxed">{review.text}</p>
            <button className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-foreground transition-colors">
              <ThumbsUp className="w-3 h-3" />
              Utile ({review.helpful})
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default GarageReviews;
