"use client"

import { Container, Logo } from "@/shared/ui";
import { NavList } from "../NavList/NavList";
import styles from "./Header.module.scss";
import { lazy, Suspense, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { throttle } from "lodash";

const BurgerLazy = lazy(() => import("../Burger/Burger"));

export const Header = () => {
  const [isScrolled, seIsScrolled] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(
    scrollY,
    "change",
    throttle((latest) => {
      seIsScrolled(latest > 20)
    }, 40)
  )

  return (
    <motion.header animate={{ backgroundColor: isScrolled ? "#FFFFFF" : "" }} className={styles.header}>
      <Container className={styles.headerContainer}>
        <Logo />

        <div className={styles.headerList}>
          <NavList />

          <Suspense>
            <BurgerLazy />
          </Suspense>
        </div>
      </Container>
    </motion.header>
  );
};
