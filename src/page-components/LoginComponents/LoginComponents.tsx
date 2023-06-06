import cn from "classnames";

import styles from "./LoginComponents.module.css";
import { Card } from "@/components";
import Image from "next/image";
import { Button, Input } from "@/components/UI/index";

export const LoginComponents = () => {
  return (
    <div className={styles.login}>
      <Card className={styles.card}>
        <img src={"loginUser.png"} width={340} className={styles.img} />
        <form className={styles.form}>
          <p className={styles.title}>Авторизация</p>
          <Input placeholder="e-mail" className={styles.email} />
          <Input placeholder="password" className={styles.password} />
          <Button>Войти</Button>
        </form>
        <p className={styles.logup}>{">"} Создать аккаунт </p>
      </Card>
    </div>
  );
};
