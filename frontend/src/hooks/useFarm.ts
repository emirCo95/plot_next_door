import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchFarmDetails, type Farm } from '@/api/farm';

export const useFarm = () => {
  const queryClient = useQueryClient();

  // This query runs on page load and on refresh
  const { data: farm, isLoading } = useQuery<Farm | null>({
    queryKey: ['fetchFarm'],
    queryFn: async () => {
      try {
        return await fetchFarmDetails();
      } catch {
        return null;
      }
    },
    retry: false, // don't retry if not authenticated
    staleTime: 1000 * 60 * 5, // optional: cache for 5 mins
  });

  return {
    farm,
    loading: isLoading,
    refetchFarm: () =>
      queryClient.invalidateQueries({ queryKey: ['fetchFarm'] }),
  };
};
