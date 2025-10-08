"use client";

import { useStore } from "@/app/store/store";
import { LoginForm } from "@/features/login";
import { RegisterForm } from "@/features/register";
import { ModalButton } from "../ModalButton/ModalButton";
import styles from "./ModalForm.module.scss";
import { MouseEvent } from "react";
import { useBlockingScroll } from "@/shared/hooks/useBlockingScroll";

const ModalForm = () => {
  const { type, handleModelFormOpen, isModelFormOpen } = useStore();

  useBlockingScroll(isModelFormOpen);

  const handleInnerClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <section className={`${styles.modal} ${isModelFormOpen ? styles.modalActive : ""}`} onClick={handleModelFormOpen}>
      <div onClick={handleInnerClick} className={styles.modalForm}>
        <ModalButton handleOpen={handleModelFormOpen} />

        {type === "login" ? (
          <LoginForm />
        ) : type === "register" ? (
          <RegisterForm />
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default ModalForm;