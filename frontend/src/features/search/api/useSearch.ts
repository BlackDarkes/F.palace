import { IRecipe } from "@/features/recipe";
import { publicApi } from "@/libs/api/instance/apiInstance";
import { useQuery } from "@tanstack/react-query"

export const useSearch = (searchTerm: string ) => {
  return useQuery<IRecipe[]>({
    queryKey: ["search", searchTerm],
    queryFn: async () => {
      if (!searchTerm.trim()) {
        return [];
      }

      const response = await publicApi.get<IRecipe[]>(
        `/product/search/`,
        {
          params: {
            q: searchTerm
          }
        }
      );

      return response.data;
    },
    enabled: !!searchTerm,
    staleTime: 5 * 60 * 1000
  });
}