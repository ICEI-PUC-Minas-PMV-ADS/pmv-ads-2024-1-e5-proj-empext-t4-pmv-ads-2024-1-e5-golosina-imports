import { Heading } from "@/atoms/Heading";
import { Button } from "@/atoms/Button";
import { ArticleCard, ArticleCardProps } from "@/molecules/ArticleCard";
import { ProductCard, ProductCardProps } from "@/molecules/ProductCard";
import { BannerCTA } from "@/organisms/CTABanner";
import { Testimonials } from "@/organisms/Testimonials";
import { HeadingSearch } from "@/organisms/HeadingSearch";
import { getAllEntries } from "@/api/api";
import styles from "./homepage.module.scss";

export default async function Home() {
  const products = await getAllEntries("product", 2);
  const articles = await getAllEntries("blogPost", 3);
  return (
    <main className={styles.homepage}>
      <section className={styles.homepage__productList}>
        <HeadingSearch />
        <div className={styles.homepage__cards}>
          {products.map((product: ProductCardProps) => (
            <ProductCard
              productName={product.productName}
              price={product.price}
              slug={product.slug}
              image={product.image ? product.image.url : ""}
              key={product.productName}
            />
          ))}
        </div>
        <Button
          href="/produtos"
          isButton={false}
          label="Conhecer todas golosinas"
          level="secondary"
        />
      </section>
      <Testimonials />
      <section className={styles.homepage__articleList}>
        <Heading
          align="left"
          children="Artigos em destaque"
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
        <div className={styles.homepage__button}>
          <Button
            href="/blog"
            isButton={false}
            label="Conhecer mais artigos"
            level="secondary"
          />
        </div>
      </section>
      <div className={styles.homepage__cta}>
        <BannerCTA
          cta="Peça já a sua golosina importada"
          backgroundImage="/images/cta3.jpg"
        />
      </div>
    </main>
  );
}
