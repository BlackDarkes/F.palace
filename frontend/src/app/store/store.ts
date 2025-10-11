import { cartSlice, ICartSlice } from "@/features/cart/models/cart.slice";
import { feedbackSlice, IFeedbackSlice } from "@/features/feedback";
import { ILoginSlice, loginSlice } from "@/features/login";
import { ISearchSlice, searchSlice } from "@/features/search";
import { burgerSlice, type IBurgerSlice } from "@/widgets/header";
import {
  IModalSlice,
  modalSlice,
} from "@/widgets/modalForm";
import { ISearchModalSlice, searchModalSlice } from "@/widgets/searchModal";
import {
  IToastSlice,
  toastSlice,
} from "@/widgets/toastMessage";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type AppStateType = IBurgerSlice &
  IFeedbackSlice &
  ILoginSlice &
  IModalSlice &
  IToastSlice &
  ICartSlice &
  ISearchSlice &
  ISearchModalSlice;

export const useStore = create<AppStateType>()(
  devtools(
    (set, get, api) => ({
      ...burgerSlice(set, get, api),
      ...feedbackSlice(set, get, api),
      ...loginSlice(set, get, api),
      ...modalSlice(set, get, api),
      ...toastSlice(set, get, api),
      ...cartSlice(set, get, api),
      ...searchSlice(set, get, api),
      ...searchModalSlice(set, get, api),
    }),
    { name: "AppStore" }
  )
);
