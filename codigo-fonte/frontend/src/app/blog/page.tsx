import { BannerCTA } from "@/organisms/CTABanner";
import styles from "./styles.module.scss";

export default function Blog() {
  return (
    <main className={styles.blog}>
      <div className={styles.blog__cta}>
        <BannerCTA
          cta="Peça já a sua golosina importada"
          backgroundImage="images/cta3.jpg"
        />
      </div>
    </main>
  );
}
