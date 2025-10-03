import { StateCreator } from "zustand";
import { IFeedback } from "./feedback.interface";

export interface IFeedbackSlice {
  feedback: IFeedback | undefined;
  setFeedback: (feedback: IFeedback | undefined) => void;
}

export const feedbackSlice: StateCreator<IFeedbackSlice> = (set) => ({
  feedback: {
    id: null,
    message: null,
    name:null,
  },
  setFeedback: (feedback) => set(() => ({ feedback })),
});