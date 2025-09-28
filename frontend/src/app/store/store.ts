import { create } from "zustand";
import { devtools } from "zustand/middleware";

type AppStateType = "";

export const useStore = create<AppStateType>()(
  devtools(
    (set, get, api) => ({
      
    }),
    { name: "AppStore" }
  )
)