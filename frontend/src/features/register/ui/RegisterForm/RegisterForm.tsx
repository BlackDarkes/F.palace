"use client"

import { Button } from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { useRegister } from "../../api/useRegister";
import { useStore } from "@/app/store/store";
import { IRegister } from "../../module/types/register.interface";

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
    <div>
      <h2>Registration</h2>

      <form method="post" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>
            <input type="text" { ...register("name") } />
            {errors.name && <span>{errors.name?.message}</span>}
          </p>
          <p>
            <input type="email" {...register("email")} />
            {errors.email && <span>{errors.email?.message}</span>}
          </p>
          <p>
            <input type="password" {...register("password")} />
            {errors.password && <span>{errors.password?.message}</span>}
          </p>
        </div>
        <button type="button" onClick={() => handleType("login")}>
          To login
        </button>
        <Button>Register</Button>
      </form>
    </div>
  );
};
