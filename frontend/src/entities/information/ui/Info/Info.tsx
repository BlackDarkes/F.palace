import type { IInfo } from "../../models/info.interface";
import styles from './Info.module.scss'

interface IInfoProps {
  info: IInfo;
}
  
export const Info = ({ info }: IInfoProps) => {
  return (
    <div className={styles.info}>
      <span className={styles.infoCategory}>{info.category}</span>

      <div className={styles.infoBlock}>
        <h2 className={styles.infoTitle}>{info.title}</h2>
        <p className={styles.infoBody}>{info.body}</p>
      </div>
    </div>
  );
}