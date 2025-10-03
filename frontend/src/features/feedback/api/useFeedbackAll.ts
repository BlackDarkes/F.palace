"use client"

import { useQuery } from "@tanstack/react-query"
import { IFeedback } from "../model/feedback.interface";
import { publicApi } from "@/libs/api/instance/apiInstance";
import { useEffect } from "react";
import { useStore } from "@/app/store/store";

export const useFeedbackAll = () => {
  const query = useQuery<IFeedback[]>({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const response = await publicApi.get("feedback");
      return response.data;
    }
  });

  const { setFeedback } = useStore();

  useEffect(() => {
    if (!query.isLoading && !query.isError && query.data?.[0]) {
      setFeedback(query.data[0]);
    }
  }, [query.data, query.isLoading, query.isError, setFeedback]);

  return query;
}