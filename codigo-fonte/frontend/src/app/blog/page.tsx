import { BannerCTA } from "@/organisms/CTABanner";
import { ArticleList } from "@/organisms/ArticleList";
import { getAllEntries } from "@/api/api";
import styles from "./styles.module.scss";
import { ArticleCardProps } from "@/molecules/ArticleCard";

export default async function Blog() {
  const articles = await getAllEntries("blogPost");

  return (
    <main className={styles.blog}>
      <div className={styles.blog__cta}>
        {articles.map((article: ArticleCardProps) => (
          <ArticleList
            title={article.title}
            subtitle={article.subtitle}
            description={article.description}
            image={article.image ? article.image.url : ""}
            slug={article.slug}
            key={article.title}
          />
        ))}
        <BannerCTA
          cta="Peça já a sua golosina importada"
          backgroundImage="/images/cta3.jpg"
        />
      </div>
    </main>
  );
}
