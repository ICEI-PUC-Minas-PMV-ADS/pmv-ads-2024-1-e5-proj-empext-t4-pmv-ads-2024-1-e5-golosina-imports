"use client"
import { Button } from "@/atoms/Button";
import { PencilSimple } from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";
import { LegacyRef, MutableRefObject, useRef } from "react";

interface NewCommentProps {
  text: string;
  placeholder: string;
}
export const NewComment = ({ text, placeholder }: NewCommentProps) => {
  const commentInput = useRef<{ value: string } | undefined >({ value: "" });
  return (
    <div className={styles.comment}>
      <label htmlFor="comment" className={styles.comment__label}>
        Deixe aqui seu comentário
      </label>
      <div className={styles.comment__container}>
        <PencilSimple size={32} color="#9D5C63" />
        <textarea
          placeholder={placeholder}
          className={styles.comment__textarea}
          id="comment"
          // @ts-ignore
          ref={commentInput}
        />
      </div>
      <div className={styles.comment__buttons}>
        <Button label="Enviar comentário" level="secondary" />
        <Button label="Cancelar" level="quaternary" onClick={() => commentInput.current!.value = ""} />
      </div>
    </div>
  );
};
