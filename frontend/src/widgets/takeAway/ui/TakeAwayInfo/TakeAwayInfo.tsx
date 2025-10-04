import ImageAppStore from "../../assets/appStore.png";
import ImageGooglePlay from "../../assets/googlePlay.png";
import Image from "next/image";
import { IInfo } from "@/shared/models/info.interface";
import { Info } from "@/shared/ui";
import styles from './TakeAwayInfo.module.scss'

interface ITakeAwayInfoProps {
  takeAway: IInfo;
}
  
export const TakeAwayInfo = ({ takeAway }: ITakeAwayInfoProps) => {
  return (
    <div className={styles.info}>
      <Info
        info={takeAway}
      />

      <div className={styles.infoButtons}>
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