import { Heading } from "@/atoms/Heading";
import { ArticlesWrapper } from "@/organisms/ArticlesWrapper";
import { BannerCTA } from "@/organisms/CTABanner";
import { getAllEntries } from "@/api/contentful";
import styles from "./styles.module.scss";

export default async function Blog() {
  const articles = await getAllEntries("blogPost");
  const totalPages = Math.ceil(articles.length / 6);

  return (
    <main className={styles.blog}>
      <section className={styles.blog__articleList}>
        <Heading
          align="left"
          children="Nossos artigos"
          color="wenge"
          level="3"
        />
        <ArticlesWrapper articles={articles} totalPages={totalPages} />
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
