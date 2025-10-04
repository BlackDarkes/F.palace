"use client"

import { useFeedbackAll } from "@/features/feedback";
import { Container, Info } from "@/shared/ui";
import { FEEDBACK } from "../../models/feedback";
import { useState } from "react";
import { FeedbackButtons } from "../FeedbackButtons/FeedbackButtons";
import { FeedbackImage } from "../FeedbackImage/FeedbackImage";

export const Feedback = () => {
  const { isLoading, error, data: feedback} = useFeedbackAll();
  const [count, setCount] = useState<number>(0);

  if (error) {
    return <p>{error.message}</p>
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!feedback || feedback.length === 0) {
    return <p>No feedback available</p>
  }

  const nextFeedback = () => {
    if (count < feedback?.length - 1) {
      setCount(count + 1);
    }
  }

  const previewFeedback = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <section>
      <Container>
        <div>
          <Info info={{ ...FEEDBACK, body: feedback[count].message}} />
          <FeedbackButtons feedback={feedback[count]} nextFeedback={nextFeedback} previewFeedback={previewFeedback} />
        </div>

        <FeedbackImage />
      </Container>
    </section>
  );
}