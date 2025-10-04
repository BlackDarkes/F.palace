import { IFeedback } from "@/features/feedback";
import IconArrow from "../../assets/icons/arrow.svg";

interface IFeedbackButtonsProps {
  feedback: IFeedback;
  nextFeedback: () => void;
  previewFeedback: () => void;
}
  
export const FeedbackButtons = ({ feedback, nextFeedback, previewFeedback }: IFeedbackButtonsProps) => {
  return (
    <div>
      <div>
        <h3>{feedback.name}</h3>
        <p>Product Designer @ Kitty</p>
      </div>
      
      <div>
        <button type="button" onClick={previewFeedback}><IconArrow /></button>
        <button type="button" onClick={nextFeedback}><IconArrow /></button>
      </div>
    </div>
  );
}