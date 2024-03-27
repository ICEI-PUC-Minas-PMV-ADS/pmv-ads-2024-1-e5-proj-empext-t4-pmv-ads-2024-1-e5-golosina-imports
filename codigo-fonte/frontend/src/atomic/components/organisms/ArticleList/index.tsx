'use client'
import { ArticleCard } from "@/molecules/ArticleCard";

const dummyCardData = {
  title: "Title",
  subtitle: "Subtitle",
  description: "Description",
  image: "/images/alfajor.jpg",
  slug: "placeholder",
};

export const ArticleList = () => {
  const dummyCards = Array.from({ length: 6 }, (_, index) => ({
    ...dummyCardData,
    key: index,
  }));
  return (
    <section className="">
      {dummyCards.map((card) => (
        <ArticleCard {...card} key={card.key} />
      ))}
    </section>
  );
};
