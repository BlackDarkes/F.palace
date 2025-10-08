import { useStore } from "@/app/store/store"
import { useEffect } from "react";

export const useCloseTimer = () => {
  const { clearMessage, handleCloseToast, toastMessage } = useStore();

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        clearMessage();
        handleCloseToast();
      }, 5000);

      return () => {
        clearTimeout(timer)
      }
    }
  }, [clearMessage, handleCloseToast, toastMessage]);
}