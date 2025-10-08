import { useStore } from "@/app/store/store"
import { useEffect } from "react";

export const useCloseTimer = () => {
  const { clearMessage, handleOpenToast, toastMessage } = useStore();

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        clearMessage();
        handleOpenToast();
      }, 5000);

      return () => {
        clearTimeout(timer)
      }
    }
  }, [clearMessage, handleOpenToast, toastMessage]);
}