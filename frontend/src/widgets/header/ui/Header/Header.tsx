import { Container } from "@/shared/ui";
import { NavList } from "../NavList/NavList";
import IconLogo from "../../assets/logo.svg";
import styles from "./Header.module.scss";
import { lazy, Suspense } from "react";

const BurgerLazy = lazy(() => import("../Burger/Burger"));

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <div className={styles.headerLogo} data-keep-colors>
          <IconLogo /> F.palace
        </div>

        <div className={styles.headerList}>
          <NavList />

          <Suspense>
            <BurgerLazy />
          </Suspense>
        </div>
      </Container>
    </header>
  );
};
