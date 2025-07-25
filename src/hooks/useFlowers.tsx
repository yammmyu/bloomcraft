import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

type Flower = Database['public']['Tables']['flowers']['Row'];

export interface FlowerWithParsedFields extends Omit<Flower, 'colors' | 'availability' | 'occasions'> {
  colors: string[];
  availability: string[];
  occasions: string[];
  priceRange: { min: number; max: number };
}

export const useFlowers = () => {
  const [flowers, setFlowers] = useState<FlowerWithParsedFields[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const parsePriceRange = (priceRange: string) => {
    switch (priceRange) {
      case '$':
        return { min: 5, max: 15 };
      case '$$':
        return { min: 15, max: 35 };
      case '$$$':
        return { min: 35, max: 75 };
      default:
        return { min: 5, max: 15 };
    }
  };

  const fetchFlowers = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('flowers')
        .select('*')
        .order('name');

      if (error) throw error;

      const flowersWithParsedFields: FlowerWithParsedFields[] = data.map(flower => ({
        ...flower,
        colors: flower.colors || [],
        availability: flower.availability || [],
        occasions: flower.occasions || [],
        priceRange: parsePriceRange(flower.price_range)
      }));

      setFlowers(flowersWithParsedFields);
    } catch (err) {
      console.error('Error fetching flowers:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch flowers');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlowers();
  }, []);

  return { flowers, loading, error, refetch: fetchFlowers };
};