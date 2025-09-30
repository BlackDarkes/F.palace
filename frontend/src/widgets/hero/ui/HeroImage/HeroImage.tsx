import Image from "next/image";
import ImageMain from "../../assets/images/main.png";

export const HeroImage = () => {
  return (
    <div>
      <div>
        <Image src={ImageMain} alt="image main" width={486} height={479} />
      </div>
    </div>
  );
}