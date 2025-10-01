
import { publicApi } from "@/libs/api/instance/apiInstance"
import { useQuery } from "@tanstack/react-query"
import { IRecipe } from "../model/recipe.interface";

export const useAllRecipe = () => {
  return useQuery<IRecipe[]>({
    queryKey: ["recipe"],
    queryFn: async () => {
      const response = await publicApi.get<IRecipe[]>("/product");
      return response.data;
    }
  })
}