import styles from './ToastButton.module.scss'

interface IToastButtonProps {
  onClose: () => void;
}
  
export const ToastButton = ({ onClose }: IToastButtonProps) => {
  return (
    <button type="button" onClick={onClose} className={styles.button}></button>
  );
}