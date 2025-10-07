import styles from './ModalButton.module.scss'

interface IModalButtonProps {
  handleOpen: () => void;
}
  
export const ModalButton = ({ handleOpen }: IModalButtonProps) => {
  return (
    <button className={styles.close} onClick={handleOpen}></button>
  );
}