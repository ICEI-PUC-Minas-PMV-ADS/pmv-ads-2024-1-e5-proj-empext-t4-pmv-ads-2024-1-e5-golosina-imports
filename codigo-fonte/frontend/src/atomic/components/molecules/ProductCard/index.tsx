import { Button } from "@/atoms/Button";
import { Text } from "@/atoms/Text";
import styles from "./styles.module.scss";

interface ProductCardProps {
  backgroundImage?: string;
  title: string;
  price: string;
  slug: string;
}

export const ProductCard = ({
  backgroundImage,
  title,
  price,
  slug,
}: ProductCardProps) => {
  return (
    <article
      className={styles.card}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <p className={styles.card__title}>{title}</p>
      <div className={styles.card__cta}>
        <Text align="left" children={`R$ ${price}`} color="white" />
        <Button
          href={slug}
          isButton={false}
          label="Comprar"
          level="tertiary"
          size="small"
        />
      </div>
    </article>
  );
};
