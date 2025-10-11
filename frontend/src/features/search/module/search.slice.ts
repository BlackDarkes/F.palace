import { IRecipe } from "@/features/recipe";
import { StateCreator } from "zustand";

export interface ISearchSlice {
  searchResult: IRecipe[] | undefined;
  setSearchResult: (result: IRecipe[] | undefined) => void;
}

export const searchSlice: StateCreator<ISearchSlice> = (set) => ({
  searchResult: [],
  setSearchResult: (result: IRecipe[] | undefined) => set(() => ({ searchResult: result })) 
})