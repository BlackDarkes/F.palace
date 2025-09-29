"use client"

import { useStore } from '@/app/store/store';
import styles from './BurgerButton.module.scss'

export const BurgerButton = () => {
  const { handleOpen, isOpenBurger } = useStore();

  return (
    <button type="button" className={`${styles.burger} ${isOpenBurger ? styles.burgerActive : ""}`} onClick={() => handleOpen()}>
      <span className={`${styles.burgerLine} ${isOpenBurger ? styles.burgerLineActive : ""}`} />
    </button>
  );
}