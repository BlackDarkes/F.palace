import { Container } from "@/shared/ui";
import { FeaturesTitle } from "../FeaturesTitle/FeaturesTitle";
import { FeaturesList } from "../FeaturesList/FeaturesList";
import { FEATURE_ITEMS } from "../../model/featureItems";
import styles from './Features.module.scss'

export const Features = () => {
  return (
    <section className={styles.features}>
      <Container className={styles.featuresContainer}>
        <FeaturesTitle />

        <FeaturesList featureItems={FEATURE_ITEMS} />
      </Container>
    </section>
  );
}