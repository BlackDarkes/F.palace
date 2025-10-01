import { FeatureItem, IFeature } from "@/entities/feature";

interface IFeaturesListProps {
  featureItems: IFeature[];
}
  
export const FeaturesList = ({ featureItems }: IFeaturesListProps) => {
  return (
    <ul>
      {featureItems.map((featureItem) => (
        <FeatureItem feature={featureItem} key={featureItem.id} />
      ))}
    </ul>
  );
}