"use client"

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useLogin } from "../../api/useLogin";
import { ILogin } from "../../model/types/login.interface";
import { useStore } from "@/app/store/store";
import { Button } from "@/shared/ui";
import styles from "./LoginForm.module.scss";

const loginSchema = z.object({
  email: z
    .email("Некорректный формат email")
    .min(1, "Email не может быть пустым"),
  password: z.string().min(6, "Пароль должен содержать минимум 6 символов"),
});

export const LoginForm = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { handleModelFormOpen, handleType } = useStore();

  const { mutate } = useLogin();

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    mutate(data);
    reset();
    handleModelFormOpen();
  };

  return (
    <div className={styles.login}>
      <h2 className={styles.loginTitle}>Login</h2>

      <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.loginInputs}>
          <p>
            <input
              type="email"
              className={styles.loginInput}
              {...register("email")}
              placeholder="email..."
            />
            {errors.email && (
              <span className={styles.loginError}>{errors.email?.message}</span>
            )}
          </p>
          <p>
            <input
              type="password"
              className={styles.loginInput}
              {...register("password")}
              placeholder="password..."
            />
            {errors.password && (
              <span className={styles.loginError}>
                {errors.password?.message}
              </span>
            )}
          </p>
        </div>

        <div className={styles.loginButtons}>
          <button type="button"  className={styles.loginLink} onClick={() => handleType("register")}>
            To register
          </button>

          <Button>Login</Button>
        </div>
      </form>
    </div>
  );
};
