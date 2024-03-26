import { BannerCTA } from "@/organisms/CTABanner";
import { Accordion } from "@/organisms/Accordion";
import styles from "./page.module.scss";

export default function Faq() {
  return (
    <main className={styles.faq}>
      <Accordion />
      <BannerCTA
        cta="Peça já a sua golosina importada"
        backgroundImage="images/cta.png"
      />
    </main>
  );
}
