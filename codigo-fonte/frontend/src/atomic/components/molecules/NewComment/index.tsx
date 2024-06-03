"use client";
import { User } from "next-auth";
import { Button } from "@/atoms/Button";
import { Chat } from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";
import { useRef } from "react";

interface NewCommentProps {
  user: User | undefined;
}

export const NewComment = ({ user }: NewCommentProps) => {
  const commentInput = useRef<{ value: string } | undefined>({ value: "" });
  return (
    <div className={styles.comment}>
      {user ? (
        <label htmlFor="comment" className={styles.comment__label}>
          {`${user.name}, deixe aqui seu comentário`}
        </label>
      ) : (
        <label htmlFor="comment" className={styles.comment__label}>
          Deixe aqui seu comentário
        </label>
      )}
      <div className={styles.comment__container}>
        <Chat size={32} color="#9D5C63" />
        <textarea
          placeholder=""
          className={styles.comment__textarea}
          id="comment"
          // @ts-ignore
          ref={commentInput}
        />
      </div>
      <div className={styles.comment__buttons}>
        <Button label="Enviar comentário" level="secondary" />
        <Button
          label="Cancelar"
          level="quaternary"
          onClick={() => (commentInput.current!.value = "")}
        />
      </div>
    </div>
  );
};
