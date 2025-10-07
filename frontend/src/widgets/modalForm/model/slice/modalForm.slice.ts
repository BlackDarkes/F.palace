import { StateCreator } from "zustand";

export interface IModalSlice {
  isModelFormOpen: boolean;
  type: "login" | "register" | null;
  handleModelFormOpen: () => void;
  handleType: (type: "login" | "register" | null) => void;
}

export const modalSlice: StateCreator<IModalSlice> = (set) => ({
  isModelFormOpen: false,
  type: null,
  handleModelFormOpen: () => set((state) => ({ isModelFormOpen: !state.isModelFormOpen })),
  handleType: (type: "login" | "register" | null) => set(() => ({ type }))
})