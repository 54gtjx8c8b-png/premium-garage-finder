import { Check, X, CheckCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useUpdateQuoteStatus, type QuoteStatus } from '@/hooks/useQuoteRequests';
import { toast } from 'sonner';

interface Props {
  quoteId: string;
  status: string;
}

const QuoteStatusActions = ({ quoteId, status }: Props) => {
  const update = useUpdateQuoteStatus();

  const handle = async (newStatus: QuoteStatus) => {
    try {
      await update.mutateAsync({ id: quoteId, status: newStatus });
      toast.success('Statut mis à jour');
    } catch {
      toast.error('Erreur lors de la mise à jour');
    }
  };

  if (status === 'pending') {
    return (
      <div className="flex gap-1.5 mt-1">
        <Button
          size="sm"
          variant="outline"
          onClick={() => handle('accepted')}
          disabled={update.isPending}
          className="text-[10px] h-6 flex-1"
        >
          <Check className="w-3 h-3" /> Accepter
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => handle('rejected')}
          disabled={update.isPending}
          className="text-[10px] h-6 flex-1"
        >
          <X className="w-3 h-3" /> Refuser
        </Button>
      </div>
    );
  }

  if (status === 'accepted') {
    return (
      <Button
        size="sm"
        variant="outline"
        onClick={() => handle('completed')}
        disabled={update.isPending}
        className="text-[10px] h-6 mt-1"
      >
        <CheckCheck className="w-3 h-3" /> Marquer terminé
      </Button>
    );
  }

  return null;
};

export default QuoteStatusActions;
