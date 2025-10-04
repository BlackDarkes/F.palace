import { Button } from "@/shared/ui";
import IconMeatBall from "../../assets/icons/meatballs.svg";
import IconSmile from "../../assets/icons/smile.svg";
import IconUnderSlash from "../../assets/icons/underSlash.svg";
import styles from "./HeroInfo.module.scss";

export const HeroInfo = () => {
  return (
    <div>
      <span className={styles.infoCategory}>
        <IconUnderSlash />
        Restaurant
      </span>

      <div>
        <h2 className={styles.infoSlogan}>
          Good f
          <IconMeatBall />
          <IconMeatBall />
          d
        </h2>
        <h2 className={styles.infoSlogan}>
          Good m
          <IconSmile />
          <IconSmile />
           d
        </h2>
        <p className={styles.infoText}>
          The food palace is an neighborhood restaurent serving seasonal global
          cuisine driven by the faire.
        </p>
      </div>

      <Button className={styles.infoButton}>Explore food menu</Button>
    </div>
  );
};
