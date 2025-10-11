"use client";

import { publicApi } from "@/libs/api/instance/apiInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useStore } from "@/app/store/store";
import { ICartItem } from "../models/cartItem.interface";
import { ICartDto } from "../models/cart.dto";
import { queryClient } from "@/libs/queryClient";

export const useCart = () => {
  const { user } = useStore();

  return useQuery({
    queryKey: ["carts", user?.id],
    queryFn: async () => {
      const response = await publicApi.get<ICartItem[]>(`cart/${user?.id}`);
      return response.data;
    },
    enabled: !!user?.id,
    retry: false
  });
};

export const useCreateCart = () => {
  const { setToastMessage, handleOpenToast } = useStore();

  return useMutation({
    mutationFn: async (cart: ICartDto) => {
      const response = await publicApi.post(
        "cart",
        cart,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    },
    onSuccess: (data) => {
      setToastMessage(data.message);
      handleOpenToast();
      queryClient.invalidateQueries({
        queryKey: ["carts"],
      });
    }
  });
};

export const useDeleteFromId = () => {
  const { setToastMessage, handleOpenToast } = useStore();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await publicApi.delete(`cart/${id}`);
      return response.data;
    },
    onSuccess: (data) => {
      setToastMessage(data.message);
      handleOpenToast();
      queryClient.invalidateQueries({
        queryKey: ["carts"]
      })
    }
  });
};

export const useDeleteAll = () => {
  const { user, setToastMessage, handleOpenToast } = useStore();

  return useMutation({
    mutationFn: async () => {
      const response = await publicApi.post(`${user?.id}/all`);
      return response.data;
    },
    onSuccess: (data) => {
      setToastMessage(data.message);
      handleOpenToast();
      queryClient.invalidateQueries({
        queryKey: ["carts"]
      })
    }
  });
};
