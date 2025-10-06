import { publicApi } from "@/libs/api/instance/apiInstance";
import { useMutation } from "@tanstack/react-query";
import { IRegister } from "../module/types/register.interface";

export const useRegister = () => {
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
  });
};
