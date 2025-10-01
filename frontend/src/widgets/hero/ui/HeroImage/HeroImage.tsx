import Image from "next/image";
import ImageMain from "../../assets/images/main.png";
import styles from './HeroImage.module.scss'

export const HeroImage = () => {
  return (
    <div className={styles.container}>
      <Image src={ImageMain} alt="image main" width={547} height={535} />
    </div>
  );
}