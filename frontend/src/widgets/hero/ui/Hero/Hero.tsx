import { Container } from "@/shared/ui";
import { HeroInfo } from "../HeroInfo/HeroInfo";
import { HeroImage } from "../HeroImage/HeroImage";
import { HeroSocial } from "../HeroSocial/HeroSocial";
import { social } from "../../model/constants/social";
import styles from './Hero.module.scss'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.heroContainer}>
        <div className={styles.heroInfo}>
          <HeroInfo />
          <HeroSocial social={social} />
        </div>

        <HeroImage />
      </Container>
    </section>
  );
};
