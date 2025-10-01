import { Container } from "@/shared/ui";
import { AboutImage } from "../AboutImage/AboutImage";
import { AboutInfo } from "../AboutInfo/AboutInfo";
import { INFO } from "../../model/info";
import styles from './About.module.scss'

export const About = () => {
  return (
    <section className={styles.about}>
      <Container className={styles.aboutContainer}>
        <AboutImage />

        <AboutInfo info={INFO} />
      </Container>
    </section>
  );
}