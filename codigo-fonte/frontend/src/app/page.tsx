import { Heading } from "@/atoms/Heading";
import { Button } from "@/atoms/Button";
import { ArticleCard, ArticleCardProps } from "@/molecules/ArticleCard";
import { ProductCardProps, ProductCard } from "@/molecules/ProductCard";
import { BannerCTA } from "@/organisms/CTABanner";
import { Testimonials } from "@/organisms/Testimonials";
import { HeadingSearch } from "@/organisms/HeadingSearch";
import { getAllEntries } from "@/api/contentful";
import styles from "./homepage.module.scss";
import { SessionProvider, useSession } from "next-auth/react";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const products = await getAllEntries("product", 2);
  const articles = await getAllEntries("blogPost", 3);

  const query = searchParams?.query || "";

  const filteredProducts = products.filter((product: ProductCardProps) =>
    product.productName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className={styles.homepage}>
      <section className={styles.homepage__productList}>
        <HeadingSearch />
        <div className={styles.homepage__cards}>
          {filteredProducts.map((product: ProductCardProps) => (
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
            alternativeText={article.alternativeText}
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
