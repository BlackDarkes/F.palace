import { IFeedback } from "@/features/feedback";
import IconArrow from "../../assets/icons/arrow.svg";
import styles from "./FeedbackButtons.module.scss";

interface IFeedbackButtonsProps {
  count: number;
  feedback: IFeedback;
  feedbackLength: number;
  nextFeedback: () => void;
  previewFeedback: () => void;
}

export const FeedbackButtons = ({
  count,
  feedback,
  feedbackLength,
  nextFeedback,
  previewFeedback,
}: IFeedbackButtonsProps) => {
  return (
    <div className={styles.block}>
      <div>
        <h3 className={styles.blockName}>{feedback.name}</h3>
        <p className={styles.blockTag}>Product Designer @ Kitty</p>
      </div>

      <div className={styles.blockArrows}>
        <button
          type="button"
          onClick={previewFeedback}
          className={`${styles.blockArrow} ${styles.blockArrowFirst} ${count === 0 ? styles.blockArrowDisable : ""}`}
          disabled={count === 0 ? true : false}
        >
          <IconArrow />
        </button>
        <button
          type="button"
          onClick={nextFeedback}
          className={`${styles.blockArrow} ${count === feedbackLength - 1 ? styles.blockArrowDisable : ""}`}
        >
          <IconArrow />
        </button>
      </div>
    </div>
  );
};
