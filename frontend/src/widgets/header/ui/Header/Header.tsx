import { Container } from "@/shared/ui";
import { NavList } from "../NavList/NavList";
import IconLogo from "../../assets/logo.svg";
import styles from './Header.module.scss'
import { Burger } from "../Burger/Burger";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <IconLogo /> F.palace
        </div>

        <div className={styles.headerList}>
          <NavList />

          <Burger />
        </div>
      </Container>
    </header>
  );
};
