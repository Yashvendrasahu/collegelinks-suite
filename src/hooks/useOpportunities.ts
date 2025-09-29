import { useQuery, useMutation } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { Opportunity } from '@/types/supabase';

export function useOpportunities() {
  return useQuery({
    queryKey: ['opportunities'],
    queryFn: async (): Promise<Opportunity[]> => {
      const { data, error } = await supabase
        .from('opportunities')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      return data || [];
    },
  });
}

export function useCreateOpportunity() {
  return useMutation({
    mutationFn: async (opportunity: Omit<Opportunity, 'id' | 'created_at' | 'updated_at'>) => {
      const { data, error } = await supabase
        .from('opportunities')
        .insert([opportunity])
        .select()
        .single();

      if (error) {
        throw error;
      }

      return data;
    },
  });
}