import { FeatureItem, IFeature } from "@/entities/feature";
import styles from './FeaturesList.module.scss'

interface IFeaturesListProps {
  featureItems: IFeature[];
}
  
export const FeaturesList = ({ featureItems }: IFeaturesListProps) => {
  return (
    <ul className={styles.list}>
      {featureItems.map((featureItem) => (
        <FeatureItem feature={featureItem} key={featureItem.id} />
      ))}
    </ul>
  );
}