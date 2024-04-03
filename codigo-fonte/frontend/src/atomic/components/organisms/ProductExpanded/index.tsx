"use client";
import { ProductBanner, Characteristics } from "@/molecules/ProductBanner";
import styles from "./styles.module.scss";
import { TitleShare } from "../../molecules/TitleShare";

interface ProductExpandedProps {
  product: string;
  productType: string;
  price: any;
  description: string;
  image: string;
  characteristics: Array<Characteristics>;
}

export const ProductExpanded = ({
  product,
  productType,
  price,
  description,
  image,
  characteristics,
}: ProductExpandedProps) => {
  return (
    <section className={styles.productExpanded}>
      <TitleShare
        item={product}
        secondItem={productType}
        thirdItem={`R$ ${price}`}
      />

      <div className={styles.productExpanded__banner}>
        <ProductBanner
          product={`Conheça mais sobre o ${product}`}
          description={description}
          characteristics={characteristics}
          image={image}
        />
      </div>
    </section>
  );
};
