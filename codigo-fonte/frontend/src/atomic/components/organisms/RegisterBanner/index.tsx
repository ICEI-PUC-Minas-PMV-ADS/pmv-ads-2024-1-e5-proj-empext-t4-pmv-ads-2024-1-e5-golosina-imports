"use client";
import {
  At,
  Eye,
  EyeSlash,
  Password,
  Pencil,
} from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { useWindowSize } from "react-use";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { RegisterUserPayload } from "@/api/backend/types";
import { registerUser } from "@/api/backend/controllers/user";
import { authenticate } from "@/actions";
import { useRouter } from "next/navigation";
import { Button } from "@/atoms/Button";
import { Text } from "@/atoms/Text";
import styles from "./styles.module.scss";

export const RegisterBanner = () => {
  const { width } = useWindowSize();
  const router = useRouter();

  const picture = width < 1200 ? "/images/banner.png" : "/images/banner-g.png";
  const sizeX = width < 1200 ? 267.15 : 490.59;
  const sizeY = width < 1200 ? 257.9 : 401.65;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const [registerError, setRegisterError] = useState<false | string>(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (formData: RegisterUserPayload) => {
    try {
      await registerUser(formData);
      /**
       * If the previously call to `registerUser` is not successful, the flow is passed to the
       * catch block, therefore we only call the authenticate action if the response is 200,
       * because next-auth is basically broken.
       * https://github.com/nextauthjs/next-auth/issues/9900
       */
      await authenticate(formData);
      router.push("/");
    } catch (e) {
      setRegisterError(
        "Houve um erro no cadastro. Verifique os dados enviados."
      );
    }
  };
  return (
    <section className={styles.registerBanner}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.registerBanner__form}
      >
        <Text
          align="left"
          children="Crie uma conta para ter uma experiência ainda mais personalizada"
          color="wenge"
          weight="500"
          lineHeight="3rem"
          letterSpacing="0.015rem"
        />

        <label htmlFor="name" className={styles.registerBanner__label}>
          Nome
        </label>
        <fieldset className={styles.registerBanner__fieldset}>
          <Pencil size={32} color="#9D5C63" />
          <input
            type="text"
            id="name"
            placeholder="Daisy Jones"
            className={styles.registerBanner__input}
            {...register("name", { required: true })}
          />
        </fieldset>
        {errors.email && (
          <span className={styles.registerBanner__error}>Email inválido</span>
        )}
        <label htmlFor="email" className={styles.registerBanner__label}>
          Email
        </label>
        <fieldset className={styles.registerBanner__fieldset}>
          <At size={32} color="#9D5C63" />
          <input
            type="text"
            id="email"
            placeholder="daisy.jones@mail.com"
            className={styles.registerBanner__input}
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
        </fieldset>
        {errors.email && (
          <span className={styles.registerBanner__error}>Email inválido</span>
        )}

        <label htmlFor="password" className={styles.registerBanner__label}>
          Senha
        </label>
        <fieldset className={styles.registerBanner__fieldset}>
          <Password size={32} color="#9D5C63" />
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className={styles.registerBanner__input}
            {...register("password", { required: true, minLength: 6 })}
          />
          <button type="button" onClick={togglePasswordVisibility}>
            {showPassword ? (
              <EyeSlash size={32} color="#9D5C63" />
            ) : (
              <Eye size={32} color="#9D5C63" />
            )}
          </button>
        </fieldset>
        {errors.password && (
          <span className={styles.registerBanner__error}>
            A senha deve ter no mínimo 6 caracteres
          </span>
        )}
        <div className={styles.registerBanner__buttons}>
          <Button
            label="Concluir cadastro"
            level="primary"
            isButton={false}
            onClick={handleSubmit(onSubmit)}
          />
          <Button
            label="Já tenho conta"
            level="quaternary"
            isButton={false}
            href="/login"
          />
        </div>
      </form>

      <div className={styles.registerBanner__content}>
        <p className={styles.registerBanner__cta}>Desbloqueie o sabor</p>
        <Image
          src={picture}
          alt=""
          width={sizeX}
          height={sizeY}
          className={styles.registerBanner__image}
        />
      </div>
    </section>
  );
};
