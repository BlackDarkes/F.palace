import { Container, Title } from "@/shared/ui";
import { FeaturesList } from "../FeaturesList/FeaturesList";
import { FEATURE_ITEMS } from "../../model/featureItems";
import styles from './Features.module.scss';

export const Features = () => {
  return (
    <section className={styles.features}>
      <Container className={styles.featuresContainer}>
        <Title category="Features" title="Our Awesome Services" />

        <FeaturesList featureItems={FEATURE_ITEMS} />
      </Container>
    </section>
  );
}