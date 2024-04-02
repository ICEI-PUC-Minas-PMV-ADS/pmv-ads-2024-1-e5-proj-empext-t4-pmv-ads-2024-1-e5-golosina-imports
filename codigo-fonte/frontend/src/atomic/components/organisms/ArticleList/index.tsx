"use client";
import { usePathname } from "next/navigation";
import { ArticleCard } from "@/molecules/ArticleCard";
import { Heading } from "@/atoms/Heading";
import { Button } from "@/atoms/Button";
import styles from "./styles.module.scss";

const dummyCardData = {
  title: "Lorem",
  subtitle: "Lorem ipsum, dolor",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  image: "/images/alfajor.jpg",
  slug: "this-is-an-article",
};

export const ArticleList = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const dummyCards = Array.from({ length: isHome ? 3 : 6 }, (_, index) => ({
    ...dummyCardData,
    key: index,
  }));

  return (
    <section className={styles.articleList}>
      <div>
        <Heading
          align="left"
          children={isHome ? "Artigos em destaque" : "Nossos artigos"}
          color="wenge"
          level="3"
        />
      </div>
      {dummyCards.map((card) => (
        <ArticleCard {...card} key={card.key} />
      ))}
      {isHome && (
        <div className={styles.articleList__button}>
          <Button
            href="/blog"
            isButton={false}
            label="Conhecer mais artigos"
            level="secondary"
          />
        </div>
      )}
    </section>
  );
};
