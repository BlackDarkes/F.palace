import { IFeature } from "../../module/feature.interface";
import styles from './FeatureItem.module.scss'

interface IFeatureItemProps {
  feature: IFeature;
}
  
export const FeatureItem = ({ feature: { icon: Icon, title, body } }: IFeatureItemProps) => {
  return (
    <li className={styles.item}>
      <Icon />

      <div>
        <h2 className={styles.itemTitle}>{ title }</h2>
        <p className={styles.itemBody}>{ body }</p>
      </div>
    </li>
  );
}