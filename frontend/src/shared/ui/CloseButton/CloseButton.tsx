import styles from './CloseButton.module.scss'

interface ICloseButtonProps {
  handleClose: () => void;
}
  
export const CloseButton = ({ handleClose }: ICloseButtonProps) => {
  return (
    <button className={styles.close} onClick={handleClose}></button>
  );
}