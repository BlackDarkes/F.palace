import { publicApi } from "@/libs/api/instance/apiInstance";
import { useMutation } from "@tanstack/react-query"

export const useLogout = () => {
  return useMutation({
    mutationFn: async () => {
      const response = await publicApi.post("auth/logout");
      return response.data;
    }
  });
}