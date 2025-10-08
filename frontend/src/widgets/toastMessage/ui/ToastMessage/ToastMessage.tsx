"use client"

import { useStore } from "@/app/store/store";
import { ToastButton } from "../ToastButton/ToastButton";
import { useCloseTimer } from "../../hooks/useCloseTimer";
import styles from './ToastMessage.module.scss'

const ToastMessage = () => {
  const { isOpenToast, handleOpenToast, toastMessage } = useStore();

  useCloseTimer();

  return (
    <section className={`${styles.toast} ${isOpenToast ? styles.toastActive : ""}`}>
      <div className={styles.toastContainer}>
        <ToastButton onClose={handleOpenToast} />

        <p className={styles.toastMessage}>{ toastMessage }</p>
      </div>
    </section>
  );
}

export default ToastMessage;