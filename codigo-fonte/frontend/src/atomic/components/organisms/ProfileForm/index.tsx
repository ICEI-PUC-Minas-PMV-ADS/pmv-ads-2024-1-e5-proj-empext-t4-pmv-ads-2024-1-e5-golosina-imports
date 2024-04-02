"use client";

import { NotePencil } from "@phosphor-icons/react/dist/ssr";
import { useForm } from "react-hook-form";
import { Button } from "@/atoms/Button";
import styles from "./styles.module.scss";
export const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.profile}>
      <label htmlFor="name" className={styles.profile__label}>
        Nome
      </label>
      <fieldset className={styles.profile__fieldset}>
        <NotePencil size={32} color="#9D5C63" />
        <input
          type="text"
          id="name"
          placeholder="Daisy Jones"
          className={styles.profile__input}
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
      </fieldset>
      {errors.email && <span>Email inválido</span>}
      <label htmlFor="email" className={styles.profile__label}>
        Email
      </label>
      <fieldset className={styles.profile__fieldset}>
        <NotePencil size={32} color="#9D5C63" />
        <input
          type="text"
          id="email"
          placeholder="daisy.jones@mail.com"
          className={styles.profile__input}
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
      </fieldset>
      {errors.email && <span>Email inválido</span>}

      <label htmlFor="password" className={styles.profile__label}>
        Senha
      </label>
      <fieldset className={styles.profile__fieldset}>
        <NotePencil size={32} color="#9D5C63" />
        <input
          type="password"
          id="password"
          className={styles.profile__input}
          {...register("password", { required: true, minLength: 6 })}
        />
      </fieldset>
      {errors.password && <span>A senha deve ter no mínimo 6 caracteres</span>}
      <div className={styles.profile__buttons}>
        <Button label="Alterar dados" level="secondary" />
      </div>
    </form>
  );
};
