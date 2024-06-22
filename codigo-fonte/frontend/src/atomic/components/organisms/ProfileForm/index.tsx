"use client";

import {
  Eye,
  EyeSlash,
  NotePencil,
  PencilSimple,
} from "@phosphor-icons/react/dist/ssr";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/atoms/Button";
import { Modal } from "@/molecules/Modal";
import styles from "./styles.module.scss";

export const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isEditing, setIsEditing] = useState({ name: false, password: false });
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = (field: string) => {
    setIsEditing((prev) => ({ ...prev, [field]: true }));
  };

  const handleSaveClick = (field: string) => {
    setIsEditing((prev) => ({ ...prev, [field]: false }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleDeleteAccount = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmDelete = () => {
    console.log("Conta excluída com sucesso!");
    setIsModalOpen(false);
  };

  const onSubmit = (data: any) => {
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
        <button type="button" onClick={() => handleEditClick("name")}>
          <PencilSimple size={32} color="#9D5C63" />
        </button>
        {isEditing.name && (
          <button type="button" onClick={() => handleSaveClick("name")} className={styles.profile__editButton}>
            Salvar alterações
          </button>
        )}
      </fieldset>
      {errors.email && (
        <span className={styles.profile__error}>Email inválido</span>
      )}
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
          disabled={true}
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
      </fieldset>
      {errors.email && (
        <span className={styles.profile__error}>Email inválido</span>
      )}

      <label htmlFor="password" className={styles.profile__label}>
        Senha
      </label>
      <fieldset className={styles.profile__fieldset}>
        <NotePencil size={32} color="#9D5C63" />
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          className={styles.profile__input}
          {...register("password", { required: true, minLength: 6 })}
        />
        <button type="button" onClick={togglePasswordVisibility}>
          {showPassword ? (
            <EyeSlash size={32} color="#9D5C63" />
          ) : (
            <Eye size={32} color="#9D5C63" />
          )}
        </button>
        <button type="button" onClick={() => handleEditClick("password")}>
          <PencilSimple size={32} color="#9D5C63" />
        </button>
        {isEditing.password && (
          <button type="button" onClick={() => handleSaveClick("password")} className={styles.profile__editButton}>
            Salvar alterações
          </button>
        )}
      </fieldset>
      {errors.password && (
        <span className={styles.profile__error}>
          A senha deve ter no mínimo 6 caracteres
        </span>
      )}
      <div className={styles.profile__buttons}>
        <Button label="Alterar dados" level="secondary" />
        <Button
          label="Excluir conta"
          level="tertiary"
          onClick={handleDeleteAccount}
        />
      </div>
      {isModalOpen && (
        <Modal
          content="Deseja mesmo excluir sua conta?"
          onClose={handleCloseModal}
          buttonLabel="Excluir conta"
          onButtonClick={handleConfirmDelete}
          hasTwoButtons
          secondButtonLabel="Manter conta"
        />
      )}
    </form>
  );
};
