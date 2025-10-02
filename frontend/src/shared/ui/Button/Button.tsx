import { ReactNode } from "react";
import styles from './Button.module.scss'

interface IButtonProps {
  children: ReactNode;
  className?: string; 
  onClick?: () => void;
}
  
export const Button = ({ children, className, onClick }: IButtonProps) => {
  return (
    <button className={`${styles.button} ${className ? className : ""}`} onClick={onClick}>
      {children}
    </button>
  );
}