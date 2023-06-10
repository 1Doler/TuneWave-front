import { useForm } from "react-hook-form";

import { Datepicker, Input } from "../../components/UI";
import { UploadFile } from "../../components/index";

import styles from "./HomeComponent.module.css";

export const HomeComponent = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm();

  return (
    <div>
      <UploadFile />
      <form onSubmit={handleSubmit(() => console.log(""))}>
        <Input
          placeholder="Имя"
          className={styles.firstName}
          value={watch("firstName")}
          {...register("firstName", {
            required: { value: true, message: "Заполните имя" },
          })}
          error={errors.firstName}
        />
        <Input
          placeholder="Фамилия"
          className={styles.firstName}
          value={watch("lastName")}
          {...register("lastName", {
            required: { value: true, message: "Заполните фамилию" },
          })}
          error={errors.lastName}
        />
        <Datepicker
          placeholder="Дата рождения"
          value={watch("dateofBirth")}
          change={date => setValue("dateofBirth", date)}
        />
      </form>
    </div>
  );
};
