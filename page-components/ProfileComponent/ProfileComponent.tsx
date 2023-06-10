import { useForm } from "react-hook-form";

import { Button, Datepicker, Input } from "../../components/UI";
import { UploadFile, AvatarImg } from "../../components/index";

import styles from "./ProfileComponent.module.css";
import { updateProfile } from "../../api";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export type InputsProfile = {
  firstName: string;
  lastName: string;
  dateofBirth: string;
  urlImg: string;
};

export const ProfileComponent = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<InputsProfile>();

  const { user } = useSelector((state: RootState) => state.user);

  const onSubmit = async (data: InputsProfile) => {
    const res = await updateProfile({
      id: user._id,
      avatarUrl: watch("urlImg"),
      ...data,
    });
  };

  return (
    <div className={styles.profile}>
      <AvatarImg size="large" url={watch("urlImg")} />
      <UploadFile
        url={watch("urlImg")}
        change={(date: string) => setValue("urlImg", date)}
      />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
          className={styles.lastName}
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
          error={errors.dateofBirth}
        />
        <Button type="submit">Изменить</Button>
      </form>
    </div>
  );
};
