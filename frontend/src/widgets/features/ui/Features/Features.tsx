import { Container } from "@/shared/ui";
import { FeaturesTitle } from "../FeaturesTitle/FeaturesTitle";
import { FeaturesList } from "../FeaturesList/FeaturesList";
import { FEATURE_ITEMS } from "../../model/featureItems";

export const Features = () => {
  return (
    <section>
      <Container>
        <FeaturesTitle />

        <FeaturesList featureItems={FEATURE_ITEMS} />
      </Container>
    </section>
  );
}