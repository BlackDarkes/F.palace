import { Button, Info } from "@/shared/ui";
import styles from './AboutInfo.module.scss'
import { IInfo } from "@/shared/models/info.interface";

interface IAboutInfoProps {
  info: IInfo;
}

export const AboutInfo = ({ info }: IAboutInfoProps) => {
  return (
    <div className={styles.info}>
      <Info info={info} />

      <Button>Explore our story</Button>
    </div>
  );
};
