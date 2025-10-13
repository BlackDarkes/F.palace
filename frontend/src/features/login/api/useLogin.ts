/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { publicApi } from "@/libs/api/instance/apiInstance";
import { useMutation } from "@tanstack/react-query";
import { ILogin } from "../model/types/login.interface";
import { useStore } from "@/app/store/store";
import { AxiosError } from "axios";

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
    },
    onError: (data: AxiosError) => {
      const responseData = data.response?.data as any;
      const errorMessage = responseData?.message 
        || data.message 
        || "Произошла ошибка при входе";

      setToastMessage(errorMessage);
      handleOpenToast();
    }
  });
};
