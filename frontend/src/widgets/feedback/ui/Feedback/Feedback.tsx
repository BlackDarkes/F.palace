"use client"

import { useFeedbackAll } from "@/features/feedback";

export const Feedback = () => {
  const { isLoading, error, data: feedback } = useFeedbackAll();

  return (
    <></>
  );
}