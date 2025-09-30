import Image from "next/image";
import ImageMain from "../../assets/images/main.png";

export const HeroImage = () => {
  return (
    <div>
      <div>
        <Image src={ImageMain} alt="image main" width={547} height={535} />
      </div>
    </div>
  );
}