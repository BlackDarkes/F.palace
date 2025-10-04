import styles from './Title.module.scss'

interface ITitleProps {
  category: string;
  title: string;
}
  
export const Title = ({ category, title }: ITitleProps) => {
  return (
    <div className={styles.title}>
      <span className={styles.titleCategory}>{ category }</span>
      <h2 className={styles.titleTitle}>{ title }</h2>
    </div>
  );
}