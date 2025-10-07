import { IUser } from "@/shared/models/user.interface";
import { StateCreator } from "zustand";

export interface ILoginSlice {
  user: IUser | null;
  setUser: (user: IUser) => void;
  logout: () => void;
}

export const loginSlice: StateCreator<ILoginSlice> = (set) => ({
  user: null,
  setUser: (user: IUser) => set(() => ({ user })),
  logout: () => set(() => ({ user: null, token: null })),
});