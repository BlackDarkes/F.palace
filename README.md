# F.palace

## 📜 Лицензия
Этот проект распространяется под лицензией **MIT**.  
Подробнее см. [LICENSE](LICENSE).

**Описание проекта**: House — это сайт ресторана с модальными окнами, регистрацией(авторизацией) и fsd архитектурой, он написан на NextJS(TypeScript), NestJS и Scss.
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![NextJS](https://img.shields.io/badge/Next.js-15-000000?logo=next.js)](https://nextjs.org/)
[![NestJS Version](https://img.shields.io/badge/NestJS-9%2B-E0234E?logo=nestjs)](https://nestjs.com)

### Функционал

- Адаптивный дизайн
- Анимации при наведении, фокусировании и нажатии
- Анимированный header
- Регистрация
- Авторизация
- JWT
- Модальные окна
- Валидация данных
- Автоматическая прокрутка
- Бизнес логика

### Технологии
- **Frontend**: React 18, TypeScript, Zustand, React Router 6, React Query, Axios, Vite, SCSS, SVGR.
  [![NextJS](https://img.shields.io/badge/Next.js-15-000000?logo=next.js)](https://nextjs.org/) 
  [![TypeScript](https://img.shields.io/badge/TypeScript-5%2B-%233178C6?logo=typescript)](https://www.typescriptlang.org/)  
  [![Zustand](https://img.shields.io/badge/Zustand-4.4-%23000000?logo=zustand)](https://github.com/pmndrs/zustand) 
  [![React Query](https://img.shields.io/badge/React_Query-5-%23FF4154?logo=react-query)](https://tanstack.com/query/latest/)  
  [![Zod](https://img.shields.io/badge/Zod-1.0-%23007ACC?logo=zod)](https://github.com/colinhacks/zod)
  [![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.0-%2361DAFB?logo=react)](https://react-hook-form.com/)
  [![Axios](https://img.shields.io/badge/Axios-1.x-%235A29E4?logo=axios)](https://axios-http.com/)   
  [![SCSS](https://img.shields.io/badge/SCSS-1.65%2B-%23CC6699?logo=sass)](https://sass-lang.com/)  
  [![SVGR](https://img.shields.io/badge/SVGR-8-%23FF4785?logo=svg)](https://react-svgr.com/)  
  [![FSD](https://img.shields.io/badge/FSD-Architecture-%23007EC6)](https://feature-sliced.design/)
- **Backend**: Express, MySQL, TypeORM.
   [![NestJS](https://img.shields.io/badge/NestJS-10-%23E0234E?logo=nestjs)](https://nestjs.com/)  
  [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16+-%23336791?logo=postgresql)](https://www.postgresql.org/)  
  [![TypeORM](https://img.shields.io/badge/TypeORM-0.3-%23FE0909?logo=typeorm)](https://typeorm.io/)   
- **Дизайн**: Figma.
  [![Figma](https://img.shields.io/badge/Figma-Design-%23F24E1E?logo=figma)](https://figma.com/)

### Установка

1. Клонирование репозитория:

   ```bash
   https://github.com/BlackDarkes/F.palace.git

   ```

2. Запустите проект:
   
    Node.js >= 18.x
    npm >= 9.x
   ```bash
   cd api && npm install && npm start
   cd frontend && npm install && npm run dev
   ```

### Пример кода

1. React

```TypeScript
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
```
2. NestJs
```TypeScript
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsersEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
  ) {}

  async getByEmail(email: string): Promise<UsersEntity | null> {
    return this.userRepository.findOne({ where: { email } })
  }

  async getById(id: string): Promise<UsersEntity | null> {
    return this.userRepository.findOne({ where: { id } });
  }

  async create(user: Partial<UsersEntity>) {
    const newUser = this.userRepository.create(user);
    const saveUser = this.userRepository.save(newUser);

    return saveUser;
  }
}

```

### Структура проекта:
    project/  
    ├── frontend/       
    ├── api/        
    └── README.md  

## Изображения проекта:
1. **Desktop изображения:**
  ![Главная страница (десктоп)](images/desctop/main.png)
  *Рис. 1: Главная страница сайта в десктопной версии.* 

  ![Бургер меню (десктоп)](images/desctop/burger.png)
  *Рис. 2: Бургер меню в десктопной версии.* 

  ![Форма авторизации (десктоп)](images/desctop/formLogin.png)
  *Рис. 3: Форма авторизации.*

  ![Валидация формы (десктоп)](images/desctop/formValidate.png)
  *Рис. 4: Валидация формы.*

  ![Toast сообщение (десктоп)](images/desctop/toastMessage.png)
  *Рис. 5: Toast сообщение.*

  ![Корзина (десктоп)](images/desctop/cart.png)
  *Рис. 6: Корзина.*

  ![Поиск (десктоп)](images/desctop/search.png)
  *Рис. 7: Поиск.*


1. **Mobile изображения:**
   
   ![Главная страница (мобильный)](images/mobile/main.png)

   *Рис. 8: Главная страница сайта в мобильной версии.*
   
   ![Header (мобильный)](images/mobile/header.png)

   *Рис. 9: Header в мобильной версии.*
   
   ![Footer (мобильный)](images/mobile/footer.png)

   *Рис. 10: Footer в мобильной версии.*

   ![Бургер меню (мобильный)](images/mobile/burger.png)

   *Рис. 11: Бургер меню в мобильной версии.*

   ![Форма авторизации (мобильный)](images/mobile/loginForm.png)

   *Рис. 12: Форма авторизации в мобильной версии.*

   ![Форма авторизации с валидацией (мобильный)](images/mobile/formValidate.png)

   *Рис. 13: Форма авторизации с валидацией.*

   ![Toast сообщение от успешной авторизацией (мобильный)](images/mobile/toastMessage.png)

   *Рис. 14: Toast сообщение от успешной авторизацией в мобильной версии.*

   ![Cart (мобильный)](images/mobile/cart.png)

   *Рис. 15: Cart в мобильной версии.*

   ![Search (мобильный)](images/mobile/search.png)

   *Рис. 16: Search в мобильной версии.*