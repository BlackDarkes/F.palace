import Image from "next/image";
import MainImage from "../../assets/images/Image.png";
import IconPlay from "../../assets/icons/playButton.svg";
import styles from './AboutImage.module.scss'

export const AboutImage = () => {
  return (
    <div className={styles.image}>
      <Image src={MainImage} alt="dish" width={633} loading="lazy" />

      <div className={styles.imageIcon}>
        <IconPlay />
      </div>
    </div>
  );
}