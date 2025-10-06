"use client";

import { publicApi } from "@/libs/api/instance/apiInstance";
import { useMutation } from "@tanstack/react-query";
import { ILogin } from "../model/types/login.interface";

export const useLogin = () => {
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
    onSuccess: () => {
      
    }
  });
};
