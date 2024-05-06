"use client";

import { useWindowSize } from "react-use";
import Image from "next/image";
import { RichText } from "@/atoms/RichText";
import { TitleShare } from "@/molecules/TitleShare";
import styles from "./styles.module.scss";

export interface ArticleExpandedProps {
  title: string;
  author: string;
  dateOfPublication: string;
  image: any;
  content: any;
  slug: string;
  alternativeText: string;
}

export const ArticleExpanded = ({
  title,
  author,
  dateOfPublication,
  image,
  content,
  slug,
  alternativeText
}: ArticleExpandedProps) => {
  const { width } = useWindowSize();

  const sizeX = width < 1200 ? 335 : 1130;
  const sizeY = width < 1200 ? 170 : 366;
  return (
    <section className={styles.articleExpanded}>
      <div className={styles.articleExpanded__heading}>
        <Image
          src={image}
          alt={alternativeText}
          className={styles.articleExpanded__image}
          width={sizeX}
          height={sizeY}
        />
        <TitleShare
          item={title}
          secondItem={author}
          thirdItem={dateOfPublication}
          slug={slug}
        />
      </div>

      <div className={styles.articleExpanded__richtextContainer}>
        <div className={styles.articleExpanded__richtext}>
          <RichText content={content} />
        </div>
      </div>
    </section>
  );
};
