'use client'

import { Button } from "@/atoms/Button";
import { Text } from "@/atoms/Text";
import { handleWhatsappClick } from "@/utils/whatsapp";
import styles from "./styles.module.scss";

export interface ProductCardProps {
  image?: any;
  productName: string;
  price: string;
  slug: string;
}

export const ProductCard = ({
  image,
  productName,
  price,
  slug,
}: ProductCardProps) => {
  return (
    <article
      className={styles.card}
      style={{ backgroundImage: `url(${image})` }}
    >
      <p className={styles.card__title}>{productName}</p>
      <div className={styles.card__cta}>
        <Text align="left" children={`R$ ${price}`} color="white" />
        <Button
          href={`/produtos/${slug}`}
          isButton={false}
          label="Abrir golosina"
          level="tertiary"
          size="small"
        />
      </div>
    </article>
  );
};
