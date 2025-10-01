import SearchIcon from "../../assets/search.svg";
import CartIcon from "../../assets/cart.svg";
import styles from './NavList.module.scss'
import { BurgerButton } from "../BurgerButton/BurgerButton";

export const NavList = () => {
  return (
    <ul className={styles.navList}>
      <li className={styles.navListLi}>
        <button className={styles.navListButton}><SearchIcon /></button>
      </li>
      <li className={styles.navListLiCart}>
        <button className={styles.navListButton}><CartIcon /></button>
      </li>
      <li>
        <BurgerButton />
      </li>
    </ul>
  );
}