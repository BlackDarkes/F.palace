"use client";

import { publicApi } from "@/libs/api/instance/apiInstance";
import { useMutation } from "@tanstack/react-query";
import { ILogin } from "../model/types/login.interface";
import { useStore } from "@/app/store/store";

export const useLogin = () => {
  const { setUser, handleAuthorize, setToastMessage, handleOpenToast } = useStore();

  return useMutation({
    mutationFn: async ({ email, password }: ILogin) => {
      const response = await publicApi.post(
        "auth/login",
        { email, password },
        { 
          headers: { 
            "Content-Type": "application/json" 
          } 
        }
      );
      return response.data;
    },
    onSuccess: (data) => {
      setUser(data?.user);
      handleAuthorize();
      setToastMessage(data?.message);
      handleOpenToast();
    }
  });
};
