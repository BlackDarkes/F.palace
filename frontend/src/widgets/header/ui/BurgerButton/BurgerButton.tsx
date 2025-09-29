"use client"

import { useStore } from '@/app/store/store';
import styles from './BurgerButton.module.scss'
import { useBlockingScroll } from '@/shared/hooks/useBlockingScroll';

export const BurgerButton = () => {
  const { handleOpen, isOpenBurger } = useStore();

  useBlockingScroll(isOpenBurger)

  return (
    <button type="button" className={`${styles.burger} ${isOpenBurger ? styles.burgerActive : ""}`} onClick={() => handleOpen()}>
      <span className={`${styles.burgerLine} ${isOpenBurger ? styles.burgerLineActive : ""}`} />
    </button>
  );
}