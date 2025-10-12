import { publicApi } from "@/libs/api/instance/apiInstance";
import { IUser } from "@/shared/models/user.interface";
import { StateCreator } from "zustand";

export interface ILoginSlice {
  user: IUser | null;
  isAuthorize: boolean;
  accessToken: string | null;
  setUser: (user: IUser) => void;
  handleAuthorize: () => void;
  refreshToken: () => Promise<string>;
  fetchProfile: () => Promise<void>;
  logout: () => void;
}

export const loginSlice: StateCreator<ILoginSlice> = (set, get) => ({
  user: null,
  isAuthorize: false,
  accessToken: null,

  setUser: (user: IUser) => set(() => ({ user })),

  handleAuthorize: () => set((state) => ({ isAuthorize: !state.isAuthorize })),

  refreshToken: async (): Promise<string> => {
    try {
      const response = await publicApi.post("/auth/refresh");
      const { token } = response.data;

      set({ accessToken: token, isAuthorize: true });
      return token;
    } catch (error) {
      get().logout();
      throw error;
    }
  },

  fetchProfile: async () => {
    try {
      const token = get().accessToken;
      const { data } = await publicApi.get("/auth/@me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({ user: data });
    } catch (error) {
      console.error("Failed to fetch profile:", error);
    }
  },

  logout: () => set(() => ({ user: null, isAuthorize: false })),
});
