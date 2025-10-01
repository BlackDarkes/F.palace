import { IInfo, Info } from "@/entities/information";
import { Button } from "@/shared/ui";
import styles from './AboutInfo.module.scss'

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
