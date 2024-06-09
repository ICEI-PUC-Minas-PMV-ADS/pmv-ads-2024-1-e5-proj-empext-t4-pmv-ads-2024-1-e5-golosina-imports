"use client";
import { User } from "next-auth";
import { Button } from "@/atoms/Button";
import { Chat } from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";
import { useRef, useState } from "react";
import { createComment as createCommentApi } from "@/api/backend/controllers/comment";
import { useSession } from "next-auth/react";
import { getToken } from "next-auth/jwt"
import { createComment } from "@/actions";

interface NewCommentProps {
  user: User | undefined;
  postId: string;
}

export const NewComment = ({ user, postId }: NewCommentProps) => {
  const { data: session } = useSession();
  const [commentText, setCommentText] = useState<string>("");
  console.log(session);

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
          onChange={(e) => {
            let value = e.target.value;
            setCommentText(value);
          }}
          // @ts-ignore
          ref={commentInput}
        />
      </div>
      <div className={styles.comment__buttons}>
        <Button label="Enviar comentário" level="secondary"
          onClick={() => {
            createComment({
              content: commentText,
              userId: user?.id as string
            },
              postId, session?.user.token as string)
          }} />
        <Button
          label="Cancelar"
          level="quaternary"
          onClick={() => (commentInput.current!.value = "")}
        />
      </div>
    </div>
  );
};
