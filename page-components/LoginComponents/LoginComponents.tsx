import Link from "next/link";
import { useForm } from "react-hook-form";

import { RootState, useAppDispatch } from "../../redux/store";
import { fetchLogin } from "../../redux/slice/user";

import { Card } from "../../components";
import { Button, Input } from "../../components/UI/index";

import styles from "./LoginComponents.module.css";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";

export type Inputs = {
  email: string;
  password: string;
};

export const LoginComponents = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const { user, loading } = useSelector((state: RootState) => state.user);

  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (user?.firstName) {
      router.push("/");
    }
  }, [user]);

  const onSubmit = async (data: Inputs) => {
    dispatch(fetchLogin(data));
  };

  return (
    <div className={styles.login}>
      <Card className={styles.card}>
        <img src={"loginUser.png"} width={340} className={styles.img} />
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <p className={styles.title}>Авторизация</p>
          <Input
            placeholder="e-mail"
            className={styles.email}
            value={watch("email")}
            {...register("email", {
              required: { value: true, message: "Заполните email" },
            })}
            error={errors.email}
          />
          <Input
            placeholder="password"
            className={styles.password}
            value={watch("password")}
            {...register("password", {
              required: { value: true, message: "Заполните пароль" },
            })}
            error={errors.password}
          />
          {loading === "error" && (
            <p className={styles.error}>*Неверный логин или пароль</p>
          )}
          <Button type="submit">Войти</Button>
        </form>
        <Link href={"/"} className={styles.logup}>
          <p>{">"} Создать аккаунт </p>
        </Link>
      </Card>
    </div>
  );
};
