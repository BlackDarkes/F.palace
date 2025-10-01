"use client"

import { useStore } from "@/app/store/store";
import styles from './Burger.module.scss'
import { MouseEvent } from "react";

const Burger = () => {
  const { handleOpen, isOpenBurger } = useStore();

  return (
    <div onClick={() => handleOpen()} className={`${styles.burger} ${isOpenBurger ? styles.burgerActive : ""}`}>
      <div className={styles.burgerList} onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        <button type="button" className={styles.burgerButton} tabIndex={-1}>login</button>
        <button type="button" className={styles.burgerButton} tabIndex={-1}>Register</button>
      </div>
    </div>
  );
}

export default Burger;