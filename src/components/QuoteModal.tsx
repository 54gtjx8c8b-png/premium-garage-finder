import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
  garageName: string;
}

const QuoteModal = ({ open, onClose, garageName }: QuoteModalProps) => {
  const [plate, setPlate] = useState('');
  const [problem, setProblem] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setPlate('');
      setProblem('');
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end md:items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            className="relative w-full max-w-md mx-4 bg-card border border-border rounded-2xl p-6 space-y-4 mb-4 md:mb-0"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-foreground">Demander un devis</h3>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors active:scale-95"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-muted-foreground">{garageName}</p>

            {submitted ? (
              <motion.div
                className="flex flex-col items-center gap-3 py-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle className="w-10 h-10 text-[hsl(var(--success))]" />
                <p className="text-sm font-semibold text-foreground">Demande envoyée !</p>
                <p className="text-xs text-muted-foreground">Le garage vous recontactera sous 24h.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="label-xs text-muted-foreground mb-1 block">Immatriculation</label>
                  <Input
                    placeholder="AB-123-CD"
                    value={plate}
                    onChange={(e) => setPlate(e.target.value)}
                    required
                    className="bg-secondary border-border"
                  />
                </div>
                <div>
                  <label className="label-xs text-muted-foreground mb-1 block">Décrivez le problème</label>
                  <Textarea
                    placeholder="Ex: Bruit au freinage, voyant moteur allumé..."
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                    required
                    rows={3}
                    className="bg-secondary border-border resize-none"
                  />
                </div>
                <Button type="submit" className="w-full" size="sm">
                  <Send className="w-3.5 h-3.5" />
                  Envoyer la demande
                </Button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
