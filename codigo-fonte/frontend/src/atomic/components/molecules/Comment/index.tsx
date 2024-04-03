import Image from "next/image";
import { Text } from "@/atoms/Text";
import styles from "./styles.module.scss";
import userImages from '@/data/userImages.json'

interface CommentProps {
  name: string;
  comment: string;
}

export const Comment = ({ name, comment }: CommentProps) => {
  const images = userImages.userImages;
  const randomImage =
  images[Math.floor(Math.random() * images.length)];
  
  return (
    <div className={styles.comment} tabIndex={0}>
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
      <p className={styles.comment__text} tabIndex={0}>
        {comment}
      </p>
    </div>
  );
};
