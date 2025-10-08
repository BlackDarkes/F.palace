"use client"

import { useStore } from "@/app/store/store";
import { publicApi } from "@/libs/api/instance/apiInstance";
import { useMutation } from "@tanstack/react-query"

export const useLogout = () => {
  const { setToastMessage, handleOpenToast, handleOpen } = useStore();

  return useMutation({
    mutationFn: async () => {
      const response = await publicApi.post("auth/logout");
      return response.data;
    },
    onSuccess: (data) => {
      setToastMessage(data?.message);
      handleOpenToast();
      handleOpen();
    }
  });
}