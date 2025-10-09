"use client"

import { publicApi } from "@/libs/api/instance/apiInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ICart } from "../models/cart.interface";
import { useStore } from "@/app/store/store";
import { ICartItem } from "../models/cartItem.interface";

export const useCart = () => {
  const { user } = useStore();

  return useQuery({
    queryKey: ["carts", user?.id],
    queryFn: async () => {
      const response  = await publicApi.get<ICartItem[]>(`cart/${user?.id}`);
      return response.data;
    }
  });
}

export const useCreateCart = () => {
  return useMutation({
    mutationFn: async (cart: ICart) => {
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
  const { user } = useStore();

  return useMutation({
    mutationFn: async () => {
      const response = await publicApi.post(`${user?.id}/all`);
      return response.data;
    }
  });
}