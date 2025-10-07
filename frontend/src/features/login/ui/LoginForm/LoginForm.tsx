import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useLogin } from "../../api/useLogin";
import { ILogin } from "../../model/types/login.interface";
import { useStore } from "@/app/store/store";
import { Button } from "@/shared/ui";

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
    <div>
      <h2>Login</h2>

      <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>
            <input type="email" {...register("email")} />
            {errors.email && <span>{errors.email?.message}</span>}
          </p>
          <p>
            <input type="password" {...register("password")} />
            {errors.password && <span>{errors.password?.message}</span>}
          </p>
        </div>
        <button type="button" onClick={() => handleType("register")}>
          To register
        </button>
        <Button>Login</Button>
      </form>
    </div>
  );
};
