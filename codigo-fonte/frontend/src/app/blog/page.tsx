import { BannerCTA } from "@/organisms/CTABanner";
import { ArticleCard, ArticleCardProps } from "@/molecules/ArticleCard";
import { getAllEntries } from "@/api/contentful";
import styles from "./styles.module.scss";
import { Heading } from "@/atoms/Heading";

export default async function Blog() {
  const articles = await getAllEntries("blogPost");

  return (
    <main className={styles.blog}>
      <section className={styles.blog__articleList}>
        <Heading
          align="left"
          children="Nossos artigos"
          color="wenge"
          level="3"
        />
        {articles.map((article: ArticleCardProps) => (
          <ArticleCard
            title={article.title}
            subtitle={article.subtitle}
            description={article.description}
            image={article.image ? article.image.url : ""}
            slug={article.slug}
            key={article.title}
          />
        ))}
      </section>
      <div className={styles.blog__cta}>
        <BannerCTA
          cta="Peça já a sua golosina importada"
          backgroundImage="/images/cta3.jpg"
        />
      </div>
    </main>
  );
}
