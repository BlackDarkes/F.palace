import { Button } from "@/shared/ui";
import IconMeatBall from "../../assets/icons/meatballs.png";
import IconMeatBallSecond from "../../assets/icons/meatballs2.png";
import IconSmile from "../../assets/icons/smile.png";
import IconUnderSlash from "../../assets/icons/underSlash.svg";
import Image from "next/image";

export const HeroInfo = () => {
  return (
    <div>
      <span>
        <IconUnderSlash />
        Restaurant
      </span>

      <div>
        <h1>
          Good f
          <Image src={IconMeatBall} alt="meatballs" width={62} height={61} />
          <Image
            src={IconMeatBallSecond}
            alt="meatballs"
            width={62}
            height={61}
          />
          d<br /> Good m
          <Image src={IconSmile} alt="smile" width={52} height={52} />
          <Image src={IconSmile} alt="smile" width={52} height={52} />d
        </h1>
        <p>
          The food palace is an neighborhood restaurent serving seasonal global
          cuisine driven by the faire.
        </p>
      </div>

      <Button>Explore food menu</Button>
    </div>
  );
};
