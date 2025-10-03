import { feedbackSlice, IFeedbackSlice } from "@/features/feedback/model/feedbackSlice";
import { burgerSlice, type IBurgerSlice } from "@/widgets/header";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type AppStateType = IBurgerSlice & IFeedbackSlice;

export const useStore = create<AppStateType>()(
  devtools(
    (set, get, api) => ({
      ...burgerSlice(set, get, api),
      ...feedbackSlice(set, get, api),
    }),
    { name: "AppStore" }
  )
)