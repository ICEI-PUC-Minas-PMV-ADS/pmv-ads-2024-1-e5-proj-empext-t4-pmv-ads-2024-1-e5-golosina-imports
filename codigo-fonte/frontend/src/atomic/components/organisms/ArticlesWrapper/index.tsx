"use client";

import { useState } from "react";
import { Pagination } from "@/atomic/components/molecules/Pagination";
import { ArticleCard, ArticleCardProps } from "@/molecules/ArticleCard";
import styles from "./styles.module.scss";

interface ArticlesWrapperProps {
  articles: ArticleCardProps[];
  totalPages: number;
}

export const ArticlesWrapper = ({ totalPages, articles }: ArticlesWrapperProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, articles.length);
  const paginatedData = articles.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className={styles.articles}>
      <div className={styles.articles__wrapper}>
        {paginatedData.map((article: ArticleCardProps) => (
          <ArticleCard
            title={article.title}
            subtitle={article.subtitle}
            description={article.description}
            image={article.image ? article.image.url : ""}
            slug={article.slug}
            key={article.title}
            alternativeText={article.alternativeText}
          />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </section>
  );
};
