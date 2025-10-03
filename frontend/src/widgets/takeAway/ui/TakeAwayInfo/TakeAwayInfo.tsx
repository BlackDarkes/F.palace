import { IInfo, Info } from "@/entities/information";
import ImageAppStore from "../../assets/appStore.png";
import ImageGooglePlay from "../../assets/googlePlay.png";
import Image from "next/image";

interface ITakeAwayInfoProps {
  takeAway: IInfo;
}
  
export const TakeAwayInfo = ({ takeAway }: ITakeAwayInfoProps) => {
  return (
    <div>
      <Info
        info={takeAway}
      />

      <div>
        <button type="button">
          <Image src={ImageAppStore} alt="apStore" width={170} loading="lazy" />
        </button>
        <button type="button">
          <Image src={ImageGooglePlay} alt="googlePlay" width={170} loading="lazy" />
        </button>
      </div>
    </div>
  );
}