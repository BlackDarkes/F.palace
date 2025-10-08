"use client";

import { Container, Logo } from "@/shared/ui";
import { NavList } from "../NavList/NavList";
import styles from "./Header.module.scss";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { throttle } from "lodash";
import { useStore } from "@/app/store/store";
import { useLogout } from "@/features/logout/api/useLogout";
import Burger from "../Burger/Burger";

export const Header = () => {
  const [isScrolled, seIsScrolled] = useState<boolean>(false);
  const {
    handleType,
    handleOpen,
    isOpenBurger,
    handleModelFormOpen,
    isAuthorize,
    logout,
  } = useStore();
  const { scrollY } = useScroll();
  const { mutate } = useLogout();

  useMotionValueEvent(
    scrollY,
    "change",
    throttle((latest) => {
      seIsScrolled(latest > 20);
    }, 40)
  );

  const openRegister = () => {
    handleType("register");
    handleModelFormOpen();
    handleOpen();
  };

  const opeNLogin = () => {
    handleType("login");
    handleModelFormOpen();
    handleOpen();
  };

  const logoutAll = () => {
    logout();
    mutate();
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

          <Burger
            isOpenBurger={isOpenBurger}
            isAuthorize={isAuthorize}
            openLogin={opeNLogin}
            openRegister={openRegister}
            handleOpen={handleOpen}
            logout={logoutAll}
          />
        </div>
      </Container>
    </motion.header>
  );
};
