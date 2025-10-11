import styles from './CloseButton.module.scss'

interface ICloseButtonProps {
  className?: string;
  handleClose: () => void;
}
  
export const CloseButton = ({ handleClose, className }: ICloseButtonProps) => {
  return (
    <button className={`${styles.close} ${className ? className : ""}`} onClick={handleClose}></button>
  );
}