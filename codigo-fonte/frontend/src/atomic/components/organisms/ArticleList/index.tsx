"use client";
import { usePathname } from "next/navigation";
import { ArticleCard, ArticleCardProps } from "@/molecules/ArticleCard";
import { Heading } from "@/atoms/Heading";
import { Button } from "@/atoms/Button";
import styles from "./styles.module.scss";

export const ArticleList = ({
  title,
  subtitle,
  description,
  image,
  slug,
}: ArticleCardProps) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

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
      <ArticleCard
        title={title}
        subtitle={subtitle}
        description={description}
        image={image}
        slug={slug}
      />
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
