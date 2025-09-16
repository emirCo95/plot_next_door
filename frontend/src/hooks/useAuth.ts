import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { verify, login, logout, register, type User } from '../api/auth';

export const useAuth = () => {
  const queryClient = useQueryClient();

  // This query runs on page load and on refresh
  const { data: user, isLoading } = useQuery<User | null>({
    queryKey: ['authUser'],
    queryFn: async () => {
      try {
        return await verify();
      } catch {
        return null;
      }
    },
    retry: false, // don't retry if not authenticated
    staleTime: 1000 * 60 * 5, // optional: cache for 5 mins
  });

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (newUser) => {
      queryClient.setQueryData(['authUser'], newUser); // update cache instantly
    },
  });

  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.setQueryData(['authUser'], null);
    },
  });

  // Register mutation
  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: (newUser) => {
      queryClient.setQueryData(['authUser'], newUser);
    },
  });

  return {
    user,
    loading: isLoading,
    loginUser: loginMutation.mutateAsync,
    logoutUser: logoutMutation.mutateAsync,
    registerUser: registerMutation.mutateAsync,
    refetchUser: () =>
      queryClient.invalidateQueries({ queryKey: ['authUser'] }),
  };
};
