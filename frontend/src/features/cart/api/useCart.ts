import { publicApi } from "@/libs/api/instance/apiInstance";
import { useMutation } from "@tanstack/react-query";

export const useCart = () => {
  return useMutation({
    mutationFn: async (userId: string) => {
      const response = await publicApi.get(`${userId}`);
      return response.data;
    }
  });
}

export const useCreateCart = () => {
  return useMutation({
    mutationFn: async (cart) => {
      const response = await publicApi.post(
        "cart",
        { cart },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    },
  });
};

export const useDeleteFromId = () => {
  return useMutation({
    mutationFn: async (id: string) => {
      const response = await publicApi.post(`cart/${id}`);
      return response.data;
    }
  });
}

export const useDeleteAll = () => {
  return useMutation({
    mutationFn: async (userId: string) => {
      const response = await publicApi.post(`${userId}/all`);
      return response.data;
    }
  });
}