import { BannerCTA } from "@/organisms/CTABanner";
import styles from "./homepage.module.scss";
import { ProductCardProps } from "@/molecules/ProductCard";
import { ProductList } from "@/organisms/ProductList";
import { Testimonials } from "@/organisms/Testimonials";
import { ArticleList } from "@/organisms/ArticleList";
import { getAllEntries } from "@/api/api";
import { ArticleCardProps } from "@/molecules/ArticleCard";

export default async function Home() {
  const products = await getAllEntries("product");
  const articles = await getAllEntries("blogPost");
  return (
    <main className={styles.homepage}>
      {
        products?.map((product: ProductCardProps) => (
            <ProductList
              productName={product.productName}
              price={product.price}
              slug={product.slug}
              image={product.image ? product.image.url : ""}
              key={product.productName}
            />
          )
          )
      }
      <Testimonials />
      {
        articles?.map((article: ArticleCardProps) => (
          <ArticleList
            title={article.title}
            subtitle={article.subtitle}
            description={article.description}
            image={article.image ? article.image.url : ""}
            slug={article.slug}
            key={article.title}
          />
        ))
      }
      <div className={styles.homepage__cta}>
        <BannerCTA
          cta="Peça já a sua golosina importada"
          backgroundImage="/images/cta3.jpg"
        />
      </div>
    </main>
  );
}
