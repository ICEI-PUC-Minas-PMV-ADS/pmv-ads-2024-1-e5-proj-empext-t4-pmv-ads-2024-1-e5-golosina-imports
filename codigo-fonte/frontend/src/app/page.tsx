import { BannerCTA } from "@/organisms/CTABanner";
import styles from "./homepage.module.scss";

export default function Home() {
  return (
    <main className={styles.homepage}>
      <BannerCTA
        cta="Peça já a sua golosina importada"
        backgroundImage="images/cta.png"
      />
    </main>
  );
}
