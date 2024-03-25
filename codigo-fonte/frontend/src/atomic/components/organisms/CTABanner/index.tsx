import { Button } from "@/atoms/Button";
import styles from "./styles.module.scss";

interface BannerCTAProps {
  cta: string;
  backgroundImage: string;
}

export const BannerCTA = ({ cta, backgroundImage }: BannerCTAProps) => {
  return (
    <section
      className={styles.cta}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <p className={styles.cta__title}>{cta}</p>
      <div className={styles.cta__buttons}>
        <Button
          href="/produtos"
          isButton={false}
          label="Comprar"
          level="primary"
        />
        <Button
          href="/contato"
          isButton={false}
          label="Fale conosco"
          level="quinary"
        />
      </div>
    </section>
  );
};
