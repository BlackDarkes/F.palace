import { Container, Logo } from "@/shared/ui";
import { NavList } from "../NavList/NavList";
import styles from "./Header.module.scss";
import { lazy, Suspense } from "react";

const BurgerLazy = lazy(() => import("../Burger/Burger"));

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <Logo />

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
