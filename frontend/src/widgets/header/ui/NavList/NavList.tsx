import SearchIcon from "../../assets/search.svg";
import CartIcon from "../../assets/cart.svg";
import styles from './NavList.module.scss'
import { BurgerButton } from "../BurgerButton/BurgerButton";

interface INavListProps {
  cartOpen: () => void;
}
  
export const NavList = ({ cartOpen }: INavListProps) => {
  return (
    <ul className={styles.navList}>
      <li className={styles.navListLi}>
        <button className={styles.navListButton}><SearchIcon /></button>
      </li>
      <li className={styles.navListLiCart}>
        <button className={styles.navListButton} onClick={cartOpen}><CartIcon /></button>
      </li>
      <li>
        <BurgerButton />
      </li>
    </ul>
  );
}