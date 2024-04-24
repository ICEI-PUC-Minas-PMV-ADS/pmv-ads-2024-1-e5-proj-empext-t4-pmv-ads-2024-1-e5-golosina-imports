"use client";

import { At, Password } from "@phosphor-icons/react/dist/ssr";
import { useWindowSize } from "react-use";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Button } from "@/atoms/Button";
import { Text } from "@/atoms/Text";
import styles from "./styles.module.scss";
import { LoginUserPayload } from "@/api/backend/types";
import { loginUser } from "@/api/backend/controllers/user";
import { signIn } from "@/auth";
import { authenticate } from "@/actions";

const formLoginUser = async (payload: LoginUserPayload) => {
  try {
    await loginUser(payload)
  } catch (error) {
    console.log(error)
  }
}

export const LoginBanner = () => {
  const { width } = useWindowSize();

  const picture = width < 1200 ? "/images/banner.png" : "/images/banner-g.png";
  const sizeX = width < 1200 ? 267.15 : 490.59;
  const sizeY = width < 1200 ? 257.9 : 401.65;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (formData: LoginUserPayload) => {
    try {
      // const data = await loginUser(formData)
      // console.log(data)
      console.log("batatinhaaaaaa");
      authenticate(formData)
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <section className={styles.loginBanner}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.loginBanner__form}
      >
        <Text
          align="left"
          children="Boas-vindas de novo!"
          color="wenge"
          weight="500"
          lineHeight="3rem"
          letterSpacing="0.015rem"
        />
        <label htmlFor="email" className={styles.loginBanner__label}>
          Email
        </label>
        <fieldset className={styles.loginBanner__fieldset}>
          <At size={32} color="#9D5C63" />
          <input
            type="text"
            id="email"
            placeholder="daisy.jones@mail.com"
            className={styles.loginBanner__input}
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
        </fieldset>
        {errors.email && <span>Email inválido</span>}

        <label htmlFor="password" className={styles.loginBanner__label}>
          Senha
        </label>
        <fieldset className={styles.loginBanner__fieldset}>
          <Password size={32} color="#9D5C63" />
          <input
            type="password"
            id="password"
            className={styles.loginBanner__input}
            {...register("password", { required: true, minLength: 6 })}
          />
        </fieldset>
        {errors.password && (
          <span>A senha deve ter no mínimo 6 caracteres</span>
        )}
        <div className={styles.loginBanner__buttons}>
          <Button label="Entrar" level="primary" isButton={true} onClick={handleSubmit(onSubmit)} />
          <Button label="Esqueci a senha" level="quaternary" isButton={false} />
        </div>
        <Text
          align="center"
          children="Não possui cadastro?"
          color="wenge"
          weight="500"
          lineHeight="3rem"
          letterSpacing="0.015rem"
        />
        <Button
          label="Criar conta"
          level="secondary"
          isButton={false}
          href="/cadastro"
        />
      </form>

      <div className={styles.loginBanner__content}>
        <p className={styles.loginBanner__cta}>Desbloqueie o sabor</p>
        <Image
          src={picture}
          alt=""
          width={sizeX}
          height={sizeY}
          className={styles.loginBanner__image}
        />
      </div>
    </section>
  );
};
