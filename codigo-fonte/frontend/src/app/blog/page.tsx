import { BannerCTA } from "@/organisms/CTABanner";
import { ArticleList } from "@/organisms/ArticleList";
import styles from "./styles.module.scss";

export default function Blog() {
  return (
    <main className={styles.blog}>
      <div className={styles.blog__cta}>
        <ArticleList />
        <BannerCTA
          cta="Peça já a sua golosina importada"
          backgroundImage="/images/cta3.jpg"
        />
      </div>
    </main>
  );
}
