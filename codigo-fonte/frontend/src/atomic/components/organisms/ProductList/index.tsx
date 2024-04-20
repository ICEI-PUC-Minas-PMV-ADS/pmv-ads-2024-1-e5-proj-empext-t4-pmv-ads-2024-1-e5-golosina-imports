"use client";

import { usePathname } from "next/navigation";
import { ProductCard, ProductCardProps } from "@/molecules/ProductCard";
import { Heading } from "@/atoms/Heading";
import { Text } from "@/atoms/Text";
import { Search } from "@/molecules/Search";
import styles from "./styles.module.scss";
import { Button } from "@/atoms/Button";

export const ProductList = ({
  image,
  productName,
  price,
  slug,
}: ProductCardProps) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <section className={styles.productList}>
      <div className={styles.productList__container}>
        <div className={styles.productList__heading}>
          <Heading align="left" children="Golosinas" color="wenge" level="2" />
          <Text
            align="left"
            children="Explore uma variedade deliciosa de alfajores artesanais e irresistíveis. Sabores únicos e textura macia em cada mordida."
            color="wenge"
            lineHeight="3.8rem"
          />
          <Search />
        </div>
        <div className={styles.productList__cards}>
          <ProductCard
            productName={productName}
            price={price}
            slug={slug}
            image={image}
          />
        </div>
      </div>
      {isHome && (
        <Button
          href="/produtos"
          isButton={false}
          label="Conhecer todas golosinas"
          level="secondary"
        />
      )}
    </section>
  );
};
