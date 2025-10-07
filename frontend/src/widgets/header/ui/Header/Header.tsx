"use client";

import { Container, Logo } from "@/shared/ui";
import { NavList } from "../NavList/NavList";
import styles from "./Header.module.scss";
import { lazy, Suspense, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { throttle } from "lodash";
import { useStore } from "@/app/store/store";

const BurgerLazy = lazy(() => import("../Burger/Burger"));

export const Header = () => {
  const [isScrolled, seIsScrolled] = useState<boolean>(false);
  const { handleType, handleOpen, isOpenBurger } = useStore();
  const { scrollY } = useScroll();

  useMotionValueEvent(
    scrollY,
    "change",
    throttle((latest) => {
      seIsScrolled(latest > 20);
    }, 40)
  );

  const openRegister = () => {
    handleType("register");
    handleOpen();
  };

  const opeNLogin = () => {
    handleType("login");
    handleOpen();
  };

  return (
    <motion.header
      animate={{ backgroundColor: isScrolled ? "#FFFFFF" : "rgba(0, 0, 0, 0)" }}
      className={styles.header}
    >
      <Container className={styles.headerContainer}>
        <Logo />

        <div className={styles.headerList}>
          <NavList />

          <Suspense>
            <BurgerLazy
              openLogin={opeNLogin}
              openRegister={openRegister}
              handleOpen={handleOpen}
              isOpenBurger={isOpenBurger}
            />
          </Suspense>
        </div>
      </Container>
    </motion.header>
  );
};
