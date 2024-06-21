"use client";
import { ProductBanner, Characteristics } from "@/molecules/ProductBanner";
import styles from "./styles.module.scss";
import { TitleShare } from "@/molecules/TitleShare";

export interface ProductExpandedProps {
  productName: string;
  productType: string;
  price: any;
  description: string;
  image: any;
  characteristics: Array<Characteristics>;
  slug: string
}

export const ProductExpanded = ({
  productName,
  productType,
  price,
  description,
  image,
  characteristics,
  slug
}: ProductExpandedProps) => {

  return (
    <section className={styles.productExpanded}>
      <TitleShare
        item={productName}
        secondItem={productType}
        thirdItem={`R$ ${price}`}
        slug={slug}
      />
      <div className={styles.productExpanded__banner}>
        <ProductBanner
          productName={`Conheça mais sobre o ${productName}`}
          description={description}
          characteristics={characteristics}
          image={image}
        />
      </div>
    </section>
  );
};
