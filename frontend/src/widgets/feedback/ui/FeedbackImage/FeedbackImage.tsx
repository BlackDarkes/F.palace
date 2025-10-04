import Image from "next/image";
import ImageMain from "../../assets/images/main.png";

export const FeedbackImage = () => {
  return (
    <div>
      <Image src={ImageMain} alt="main" width={655} loading="lazy" />
    </div>
  );
}