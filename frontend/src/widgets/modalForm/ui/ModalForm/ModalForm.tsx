"use client"

import { useStore } from "@/app/store/store";
import { LoginForm } from "@/features/login";
import { RegisterForm } from "@/features/register";
import { ModalButton } from "../ModalButton/ModalButton";

export const ModalForm = () => {
  const { type } = useStore();

  return (
    <section>
      <div>
        <ModalButton />
        { type === "login" ? <LoginForm /> : type === "register" ? <RegisterForm /> : "" }
      </div>
    </section>
  );
}