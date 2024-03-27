import { BannerCTA } from "@/organisms/CTABanner";
import { Accordion } from "@/organisms/Accordion";
import styles from "./page.module.scss";
import { AboutUs } from "@/atomic/components/organisms/AboutUs";

export default function Faq() {
  return (
    <main className={styles.faq}>
      <Accordion />
      <AboutUs />
      <div className={styles.faq__cta}>
        <BannerCTA
          cta="Peça já a sua golosina importada"
          backgroundImage="images/cta3.jpg"
        />
      </div>
    </main>
  );
}
