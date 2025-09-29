import { burgerSlice, type IBurgerSlice } from "@/widgets/header";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type AppStateType = IBurgerSlice;

export const useStore = create<AppStateType>()(
  devtools(
    (set, get, api) => ({
      ...burgerSlice(set, get, api),
    }),
    { name: "AppStore" }
  )
)