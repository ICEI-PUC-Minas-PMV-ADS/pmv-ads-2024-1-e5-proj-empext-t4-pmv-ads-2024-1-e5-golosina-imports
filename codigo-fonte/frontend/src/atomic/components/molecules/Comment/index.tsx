import { PencilSimple, TrashSimple } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { Text } from "@/atoms/Text";
import styles from "./styles.module.scss";
import userImages from "@/data/userImages.json";
import { User } from "next-auth";

interface CommentProps {
  name: string;
  comment: string;
  user: User | undefined;
}

export const Comment = ({ name, comment, user }: CommentProps) => {
  const images = userImages.userImages;
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div className={styles.comment} tabIndex={0}>
      <div className={styles.comment__container}>
        <div className={styles.comment__user}>
          <Image
            src={randomImage}
            alt=""
            width={65}
            height={65}
            className={styles.comment__image}
          />
          <Text align="center" children={name} color="dark-gray" weight="600" />
        </div>

        <div className={styles.comment__controls}>
          <button>
            <PencilSimple
              size={32}
              color="#9D5C63"
              aria-label="Editar comentário"
              className={styles.comment__icon}
            />
          </button>
          <button>
            <TrashSimple
              size={32}
              color="#9D5C63"
              aria-label="Excluir comentário"
              className={styles.comment__icon}
            />
          </button>
        </div>
      </div>
      <p className={styles.comment__text} tabIndex={0}>
        {comment}
      </p>
    </div>
  );
};
