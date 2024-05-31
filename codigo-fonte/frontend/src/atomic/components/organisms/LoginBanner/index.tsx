"use client";

import { At, Password } from "@phosphor-icons/react/dist/ssr";
import { useWindowSize } from "react-use";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Button } from "@/atoms/Button";
import { Text } from "@/atoms/Text";
import styles from "./styles.module.scss";
import { LoginUserPayload } from "@/api/backend/types";
import { authenticate } from "@/actions";
import { useState } from "react";
import { loginUser } from "@/api/backend/controllers/user";

export const LoginBanner = () => {
  const { width } = useWindowSize();
  const [authError, setAuthError] = useState<false | string>(false);

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
      await loginUser(formData);
      /**
       * If the previously call to `loginUser` is not successful, the flow is passed to the
       * catch block, therefore we only call the authenticate action if the response is 200,
       * because next-auth is basically broken.
       * https://github.com/nextauthjs/next-auth/issues/9900
       */
      await authenticate(formData)
    } catch (e) {
      setAuthError("Email ou senha incorretos. Tente novamente.")
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
        {errors.email && <span className={styles.loginBanner__error}>Email inválido</span>}

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
          <span className={styles.loginBanner__error}>A senha deve ter no mínimo 6 caracteres</span>
        )}
        {
          authError && <p color="red">{authError}</p>
        }

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
