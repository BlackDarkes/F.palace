import { IUser } from "@/shared/models/user.interface";
import { StateCreator } from "zustand";

export interface ILoginSlice {
  user: IUser | null;
  isAuthorize: boolean;
  setUser: (user: IUser) => void;
  handleAuthorize: () => void;
  logout: () => void;
}

export const loginSlice: StateCreator<ILoginSlice> = (set) => ({
  user: null,
  isAuthorize: false,
  setUser: (user: IUser) => set(() => ({ user })),
  handleAuthorize: () => set((state) => ({ isAuthorize: !state.isAuthorize })),
  logout: () => set(() => ({ user: null, isAuthorize: false })),
});