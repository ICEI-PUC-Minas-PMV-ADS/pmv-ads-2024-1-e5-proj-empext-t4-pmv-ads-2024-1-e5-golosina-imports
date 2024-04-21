'use client'
import { useWindowSize } from "react-use";
import { Text } from "@/atoms/Text";
import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";

export interface ArticleCardProps {
  title: string;
  subtitle: string;
  description: string;
  image?: any;
  slug: string;
}

export const ArticleCard = ({
  title,
  subtitle,
  description,
  image,
  slug,
}: ArticleCardProps) => {
  const { width } = useWindowSize();
  const imageWidth = width < 1024 ? 335 : 680;
  const imageHeight = width < 1024 ? 146 : 263;
  return (
    <Link href={`blog/${slug}/`}>
      <article className={styles.card}>
        <div className={styles.card__content}>
          <Text
            align="left"
            children={title}
            color="dark-gray"
            weight="600"
            lineHeight="3rem"
            letterSpacing="0.015rem"
          />
          <Text
            align="left"
            children={subtitle}
            color="light-blue"
            lineHeight="3rem"
            letterSpacing="0.05rem"
          />
          <Text
            align="left"
            children={description}
            color="dark-gray"
            lineHeight="3rem"
            letterSpacing="0.05rem"
          />
        </div>
        <div className={styles.card__image}>
          <Image
            src={image}
            alt={title}
            width={imageWidth}
            height={imageHeight}
            className={styles.card__image}
            priority={true}
          />
        </div>
      </article>
    </Link>
  );
};
