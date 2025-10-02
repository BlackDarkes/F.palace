import styles from './Title.module.scss'

interface ITitleProps {
  category: string;
  title: string;
}
  
export const Title = ({ category, title }: ITitleProps) => {
  return (
    <div className={styles.title}>
      <span className={styles.titleCategory}>{ category }</span>
      <h1 className={styles.titleTitle}>{ title }</h1>
    </div>
  );
}