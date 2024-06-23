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
import { useSession } from "next-auth/react";
import { updateUser, UpdateUserPayload } from "@/api/backend/controllers/user";

export const ProfileForm = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const userId = user?.id!;
  const {
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.name!,
      password: ""
    }
  });

  const [editingFields, setEditingFields] = useState({ name: false, password: false });
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [name, setName] = useState(user?.name!);
  const [password, setPassword] = useState<string | undefined>();

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

  const submitUpdate = async (formData: UpdateUserPayload) => {
    try {
      const updatedUser = await updateUser(formData, user?.token!);
      console.log("user:", updatedUser);
      console.log(formData);
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <form className={styles.profile}>
      <label htmlFor="name" className={styles.profile__label}>
        Nome
      </label>
      <fieldset className={styles.profile__fieldset}>
        <NotePencil size={32} color="#9D5C63" />
        <input
          type="text"
          id="name"
          disabled={!editingFields.name}
          placeholder={user?.name!}
          className={styles.profile__input}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="button" onClick={() =>
          setEditingFields({
            name: !editingFields.name, password: editingFields.password
          })}>
          <PencilSimple size={32} color="#9D5C63" cursor="pointer" />
        </button>

      </fieldset>
      <label htmlFor="email" className={styles.profile__label}>
        Email
      </label>
      <fieldset className={styles.profile__fieldset}>
        <NotePencil size={32} color="#9D5C63" />
        <input
          type="text"
          id="email"
          placeholder={user?.email!}
          className={styles.profile__input}
          disabled={true}
        />
      </fieldset>
      <label htmlFor="password" className={styles.profile__label}>
        Senha
      </label>
      <fieldset className={styles.profile__fieldset}>
        <NotePencil size={32} color="#9D5C63" />
        <input
          disabled={!editingFields.password}
          type={showPassword ? "text" : "password"}
          id="password"
          className={styles.profile__input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={togglePasswordVisibility} >
          {showPassword ? (
            <EyeSlash size={32} color="#9D5C63" />
          ) : (
            <Eye size={32} color="#9D5C63" />
          )}
        </button>
        <button
          type="button"
          onClick={() => setEditingFields({ name: editingFields.name, password: !editingFields.password })}
        >
          <PencilSimple size={32} color="#9D5C63" cursor="pointer" />
        </button>
      </fieldset>
      {
        errors.password && (
          <span className={styles.profile__error}>
            A senha deve ter no mínimo 6 caracteres
          </span>
        )
      }
      <div className={styles.profile__buttons}>
        <Button
          label="Alterar dados"
          level="secondary"
          onClick={(e) => {
            e.preventDefault();
            submitUpdate({ name, password, userId })
          }}
        />
        <Button
          label="Excluir conta"
          level="tertiary"
          onClick={handleDeleteAccount}
        />
      </div>
      {
        isModalOpen && (
          <Modal
            content="Deseja mesmo excluir sua conta?"
            onClose={handleCloseModal}
            buttonLabel="Excluir conta"
            onButtonClick={handleConfirmDelete}
            hasTwoButtons
            secondButtonLabel="Manter conta"
          />
        )
      }
    </form >
  );
};
