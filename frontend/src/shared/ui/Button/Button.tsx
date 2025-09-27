import { ReactNode } from "react";
import styles from './Button.module.scss'

interface IButtonProps {
  children: ReactNode; 
}
  
export const Button = ({ children }: IButtonProps) => {
  return (
    <button className={styles.button}>
      {children}
    </button>
  );
}