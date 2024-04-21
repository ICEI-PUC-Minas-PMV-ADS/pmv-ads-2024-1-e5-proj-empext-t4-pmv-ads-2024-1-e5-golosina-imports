"use client";
import { useWindowSize } from "react-use";
import { TitleShare } from "../../molecules/TitleShare";
import styles from "./styles.module.scss";
import Image from "next/image";

export interface ArticleExpandedProps {
  title: string;
  author: string;
  dateOfPublication: string;
  image: any;
  content: any;
}

export const ArticleExpanded = ({
  title,
  author,
  dateOfPublication,
  image,
  content,
}: ArticleExpandedProps) => {
  const { width } = useWindowSize();

  const sizeX = width < 1200 ? 335 : 1130;
  const sizeY = width < 1200 ? 170 : 366;
  return (
    <section className={styles.articleExpanded}>
      <div className={styles.articleExpanded__heading}>
        <Image
          src={image}
          alt=""
          className={styles.articleExpanded__image}
          width={sizeX}
          height={sizeY}
        />
        <TitleShare
          item={title}
          secondItem={author}
          thirdItem={dateOfPublication}
        />
      </div>

      <div className={styles.articleExpanded__richtextContainer}>
        <p className={styles.articleExpanded__richtext}>{content}</p>
      </div>
    </section>
  );
};
