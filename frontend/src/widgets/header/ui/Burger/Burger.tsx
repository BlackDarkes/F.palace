"use client"

import styles from './Burger.module.scss'
import { MouseEvent } from "react";

interface IBurgerProps {
  isOpenBurger: boolean;
  isAuthorize: boolean;
  openRegister: () => void;
  openLogin: () => void;
  handleOpen: () => void;
  logout: () => void
}

const Burger = ({ isOpenBurger = false, isAuthorize, openRegister, openLogin, handleOpen, logout }: IBurgerProps) => {
  return (
    <div onClick={() => handleOpen()} className={`${styles.burger} ${isOpenBurger ? styles.burgerActive : ""}`}>
      <div className={styles.burgerList} onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        { isAuthorize ? (
            <button type="button" className={styles.burgerButton} tabIndex={-1} onClick={logout}>Logout</button>
        ) : (
          <>
            <button type="button" className={styles.burgerButton} tabIndex={-1} onClick={openLogin}>login</button>
            <button type="button" className={styles.burgerButton} tabIndex={-1} onClick={openRegister}>Register</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Burger;