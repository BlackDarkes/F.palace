"use client"

import styles from './Burger.module.scss'
import { MouseEvent } from "react";

interface IBurgerProps {
  openRegister: () => void;
  openLogin: () => void;
  handleOpen: () => void;
  isOpenBurger: boolean;
}

const Burger = ({ openRegister, openLogin, handleOpen, isOpenBurger}: IBurgerProps) => {

  return (
    <div onClick={() => handleOpen()} className={`${styles.burger} ${isOpenBurger ? styles.burgerActive : ""}`}>
      <div className={styles.burgerList} onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        <button type="button" className={styles.burgerButton} tabIndex={-1} onClick={openLogin}>login</button>
        <button type="button" className={styles.burgerButton} tabIndex={-1} onClick={openRegister}>Register</button>
      </div>
    </div>
  );
}

export default Burger;