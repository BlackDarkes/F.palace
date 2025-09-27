import SearchIcon from "../../assets/search.svg";
import CartIcon from "../../assets/cart.svg";
import styles from './NavList.module.scss'

interface INavListProps {
  className?: string;
}
  
export const NavList = ({ className }: INavListProps) => {
  return (
    <ul className={`${className ? className : ""} ${styles.navList}`}>
      <li className={styles.navListLi}>
        <button className={styles.navListButton}><SearchIcon /></button>
      </li>
      <li className={styles.navListLi}>
        <button className={styles.navListButton}><CartIcon /></button>
      </li>
    </ul>
  );
}