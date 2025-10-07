import { feedbackSlice, IFeedbackSlice } from "@/features/feedback";
import { ILoginSlice, loginSlice } from "@/features/login";
import { burgerSlice, type IBurgerSlice } from "@/widgets/header";
import { IModalSlice, modalSlice } from "@/widgets/modalForm/model/slice/modalForm.slice";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type AppStateType = IBurgerSlice & IFeedbackSlice & ILoginSlice & IModalSlice;

export const useStore = create<AppStateType>()(
  devtools(
    (set, get, api) => ({
      ...burgerSlice(set, get, api),
      ...feedbackSlice(set, get, api),
      ...loginSlice(set, get, api),
      ...modalSlice(set, get, api),
    }),
    { name: "AppStore" }
  )
)