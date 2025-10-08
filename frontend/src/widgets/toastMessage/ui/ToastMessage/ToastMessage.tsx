"use client"

import { useStore } from "@/app/store/store";
import { useCloseTimer } from "../../hooks/useCloseTimer";
import styles from './ToastMessage.module.scss'
import { CloseButton } from "@/shared/ui";

const ToastMessage = () => {
  const { isOpenToast, handleOpenToast, toastMessage } = useStore();

  useCloseTimer();

  return (
    <section className={`${styles.toast} ${isOpenToast ? styles.toastActive : ""}`}>
      <div className={styles.toastContainer}>
        <CloseButton handleClose={handleOpenToast} />

        <p className={styles.toastMessage}>{ toastMessage }</p>
      </div>
    </section>
  );
}

export default ToastMessage;