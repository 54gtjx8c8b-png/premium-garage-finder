import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';

export type Review = Tables<'reviews'>;

export function useGarageReviews(garageId: string | undefined) {
  return useQuery({
    queryKey: ['reviews', garageId],
    enabled: !!garageId,
    queryFn: async (): Promise<Review[]> => {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('garage_id', garageId!)
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data || [];
    },
  });
}

export function useCreateReview() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (review: { garage_id: string; user_id: string; author_name: string; rating: number; text: string }) => {
      const { data, error } = await supabase.from('reviews').insert(review).select().single();
      if (error) throw error;
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['reviews', data.garage_id] });
    },
  });
}
