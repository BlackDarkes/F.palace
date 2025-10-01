import styles from './FeaturesTitle.module.scss'

export const FeaturesTitle = () => {
  return (
    <div className={styles.title}>
      <span className={styles.titleCategory}>Features</span>
      <h1 className={styles.titleTitle}>Our Awesome Services</h1>
    </div>
  );
}