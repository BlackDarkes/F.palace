import { StateCreator } from "zustand";

export interface ICartSlice {
  isCartOpen: boolean;
  handleCartOpen: () => void;
}

export const cartSlice: StateCreator<ICartSlice> = (set) => ({
  isCartOpen: false,
  handleCartOpen: () => set((state) => ({ isCartOpen: !state.isCartOpen }))
});