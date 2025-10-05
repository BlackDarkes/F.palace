import IconLogo from "../../assets/logo.svg";
import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <IconLogo /> F.palace
    </div>
  );
};
