import { Button } from "@/atoms/Button";
import { PencilSimple } from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";

interface CommentProps {
  text: string;
  placeholder: string;
}

export const Comment = ({ text, placeholder }: CommentProps) => {
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
/>
      </div>
      <div className={styles.comment__buttons}>
        <Button label="Enviar comentário" level="secondary" />
        <Button label="Cancelar" level="quaternary" />
      </div>
    </div>
  );
};
