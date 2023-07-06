import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button, Datepicker, Input } from "../../components/UI";
import { UploadFile, AvatarImg, Modal } from "../../components/index";

import styles from "./ProfileComponent.module.css";
import { updateProfile } from "../../api";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { Alert } from "antd";
import { fetchUpdateUser } from "../../redux/slice/user";

export type InputsProfile = {
  firstName: string;
  lastName: string;
  dateofBirth: string;
  urlImg: string;
};

export const ProfileComponent = () => {
  const [isOpenModal, setIsOpenModal] = useState<Boolean>(false);

  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<InputsProfile>();

  const onSubmit = async (data: InputsProfile) => {
    if (user) {
      try {
        dispatch(
          fetchUpdateUser({
            id: user._id,
            avatarUrl: watch("urlImg"),
            ...data,
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  const b = (
    <div className={styles.profile}>
      <AvatarImg size="large" url={watch("urlImg") || `${user?.avatarUrl}`} />
      <UploadFile
        url={watch("urlImg")}
        change={(date: string) => setValue("urlImg", date)}
      />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Input
          placeholder="Имя"
          defaultValue={`${user?.firstName}` || ""}
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
          defaultValue={`${user?.lastName}` || ""}
          value={watch("lastName")}
          {...register("lastName", {
            required: { value: true, message: "Заполните фамилию" },
          })}
          error={errors.lastName}
        />
        <Datepicker
          placeholder="Дата рождения"
          value={watch("dateofBirth") || `${user?.dateofBirth}`}
          change={date => setValue("dateofBirth", date)}
          error={errors.dateofBirth}
        />
        <Button type="submit">Изменить</Button>
      </form>
    </div>
  );

  if (true) {
    return (
      <div className={styles.wrapper}>
        <Modal
          title="Профиль"
          open={isOpenModal}
          onClose={() => setIsOpenModal(false)}
        >
          {b}
        </Modal>
        <div className={styles.contented}>
          <AvatarImg size="large" url={user?.avatarUrl} form="circle" />
          <div>
            <p className={styles.textProfile}>Профиль</p>
            <p
              className={styles.fullNameProfile}
            >{`${user?.firstName} ${user?.lastName}`}</p>
            <div className={styles.btn}>
              <Button
                color="ghost"
                size="small"
                className={styles.editButton}
                onClick={() => setIsOpenModal(true)}
              >
                Редактировать
              </Button>
              <Button
                color="ghost"
                size="small"
                className={styles.editButton}
                onClick={() => setIsOpenModal(true)}
              >
                Загрузить музыку
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
