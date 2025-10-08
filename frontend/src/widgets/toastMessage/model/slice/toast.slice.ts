import { StateCreator } from "zustand";

export interface IToastSlice {
  toastMessage: string | null;
  isOpenToast: boolean;
  setToastMessage: (message: string) => void;
  clearMessage: () => void;
  handleOpenToast: () => void;
}

export const toastSlice: StateCreator<IToastSlice> = (set) => ({
  toastMessage: null,
  isOpenToast: false,
  setToastMessage: (message: string) => set(() => ({ toastMessage: message })),
  clearMessage: () => set(() => ({ toastMessage: null })),
  handleOpenToast: () => set((state) => ({ isOpenToast: !state.isOpenToast })),
})