"use client";
import { useMemo } from 'react';
import { Text } from "@/atoms/Text";
import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";

const limitText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
};
export interface ArticleCardProps {
  title: string;
  subtitle: string;
  description: string;
  image?: any;
  slug: string;
  alternativeText: string;
}

export const ArticleCard = ({
  title,
  subtitle,
  description,
  image,
  slug,
  alternativeText,
}: ArticleCardProps) => {

  const limitedTitle = useMemo(() => limitText(title, 120), [title]);
  const limitedSubtitle = useMemo(() => limitText(subtitle, 120), [subtitle]);
  const limitedDescription = useMemo(() => limitText(description, 120), [description]);

  return (
    <Link href={`blog/${slug}/`}>
      <article className={styles.card}>
        <div className={styles.card__content}>
          <Text
            align="left"
            children={limitedTitle}
            color="dark-gray"
            weight="600"
            lineHeight="3rem"
            letterSpacing="0.015rem"
          />
          <Text
            align="left"
            children={limitedSubtitle}
            color="light-blue"
            lineHeight="3rem"
            letterSpacing="0.05rem"
          />
          <Text
            align="left"
            children={limitedDescription}
            color="dark-gray"
            lineHeight="3rem"
            letterSpacing="0.05rem"
          />
        </div>
        <div className={styles.card__image}>
          <Image
            src={image}
            alt={alternativeText}
            width={680}
            height={263}
            className={styles.card__image}
            priority={true}
          />
        </div>
      </article>
    </Link>
  );
};
