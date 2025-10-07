"use client";

import { Button } from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { useRegister } from "../../api/useRegister";
import { useStore } from "@/app/store/store";
import { IRegister } from "../../module/types/register.interface";
import styles from "./RegisterForm.module.scss";

const registerSchema = z.object({
  name: z.string().min(1, "Name не может быть пустым"),
  email: z.email().min(1, "Email не может быть пустым"),
  password: z.string().min(6, "Пароль должен содержать минимум 6 символов"),
});

export const RegisterForm = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const { handleModelFormOpen, handleType } = useStore();

  const { mutate } = useRegister();

  const onSubmit: SubmitHandler<IRegister> = (data) => {
    mutate(data);
    reset();
    handleModelFormOpen();
  };

  return (
    <div className={styles.register}>
      <h2 className={styles.registerTitle}>Registration</h2>

      <form method="post" onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.registerInputs}>
          <p>
            <input
              type="text"
              className={styles.registerInput}
              {...register("name")}
              placeholder="name..."
            />
            {errors.name && (
              <span className={styles.registerError}>
                {errors.name?.message}
              </span>
            )}
          </p>
          <p>
            <input
              type="email"
              className={styles.registerInput}
              {...register("email")}
              placeholder="email..."
            />
            {errors.email && (
              <span className={styles.registerError}>
                {errors.email?.message}
              </span>
            )}
          </p>
          <p>
            <input
              type="password"
              className={styles.registerInput}
              {...register("password")}
              placeholder="password..."
            />
            {errors.password && (
              <span className={styles.registerError}>
                {errors.password?.message}
              </span>
            )}
          </p>
        </div>

        <div className={styles.registerButtons}>
          <button type="button" className={styles.registerLink} onClick={() => handleType("login")}>
            To login
          </button>
          
          <Button>Register</Button>
        </div>
      </form>
    </div>
  );
};
