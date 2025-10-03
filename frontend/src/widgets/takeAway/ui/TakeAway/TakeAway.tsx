import { Container } from "@/shared/ui";
import { TakeAwayImage } from "../TakeAwayImage/TakeAwayImage";
import { TakeAwayInfo } from "../TakeAwayInfo/TakeAwayInfo";
import { TAKE_AWAIT } from "../../model/takeAway";
import styles from './TakeAway.module.scss'

export const TakeAway = () => {
  return (
    <section className={styles.takeAway}>
      <Container className={styles.takeAwayContainer}>
        <TakeAwayImage />

        <TakeAwayInfo takeAway={TAKE_AWAIT} />
      </Container>
    </section>
  );
}