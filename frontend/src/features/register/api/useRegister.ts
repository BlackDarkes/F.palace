"use client"

import { publicApi } from "@/libs/api/instance/apiInstance";
import { useMutation } from "@tanstack/react-query";
import { IRegister } from "../module/types/register.interface";
import { useStore } from "@/app/store/store";

export const useRegister = () => {
  const { setToastMessage, handleOpenToast } = useStore();

  return useMutation({
    mutationFn: async ({ name, email, password }: IRegister) => {
      const response = await publicApi.post(
        "auth/register",
        { name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    },
    onSuccess: (data) => {
      setToastMessage(data?.message);
      handleOpenToast();
    }
  });
};
