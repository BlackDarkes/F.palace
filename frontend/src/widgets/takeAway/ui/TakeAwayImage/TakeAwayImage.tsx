import Image from "next/image";
import ImageMain from "../../assets/main.png";

export const TakeAwayImage = () => {
  return (
    <div>
      <Image src={ImageMain} alt="mainImage" width={612} loading="lazy" />
    </div>
  );
}