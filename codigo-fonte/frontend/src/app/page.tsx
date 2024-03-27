import { BannerCTA } from "@/organisms/CTABanner";
import styles from "./homepage.module.scss";
import { ProductList } from "@/organisms/ProductList";
import { Testimonials } from "@/organisms/Testimonials";

export default function Home() {
  return (
    <main className={styles.homepage}>
      <ProductList />
      <Testimonials />
      <div className={styles.homepage__cta}>
        <BannerCTA
          cta="Peça já a sua golosina importada"
          backgroundImage="images/cta3.jpg"
        />
      </div>
    </main>
  );
}
