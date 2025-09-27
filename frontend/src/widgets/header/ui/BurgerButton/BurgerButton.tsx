import styles from './BurgerButton.module.scss'

export const BurgerButton = () => {
  return (
    <button type="button" className={styles.burger}>
      <span className={styles.burgerLine} />
    </button>
  );
}