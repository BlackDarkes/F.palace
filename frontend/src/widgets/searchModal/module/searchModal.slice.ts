import { StateCreator } from "zustand";

export interface ISearchModalSlice {
  isOpenSearchModal: boolean;
  handleSearchModal: () => void;
}

export const searchModalSlice: StateCreator<ISearchModalSlice> = (set) => ({
  isOpenSearchModal: false,
  handleSearchModal: () => set((state) => ({ isOpenSearchModal: !state.isOpenSearchModal }))
})