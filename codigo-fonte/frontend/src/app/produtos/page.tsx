'use client';

import { HeadingSearch } from "@/organisms/HeadingSearch";
import { ProductCard, ProductCardProps } from "@/molecules/ProductCard";
import { Testimonials } from "@/organisms/Testimonials";
import { getAllEntries } from "@/api/contentful";
import styles from "./styles.module.scss";
import { getSession } from "next-auth/react";

export default async function Products() {
  const products = await getAllEntries("product");
  // let sla = await getSession();
  // console.log("session", sla)

  const firstTwoProducts = products.slice(0, 2);
  const moreProducts = products.slice(2);

  return (
    <main className={styles.products}>
      <section className={styles.products__productList}>
        <HeadingSearch />
        <div className={styles.products__cards}>
          {firstTwoProducts.map((product: ProductCardProps) => (
            <ProductCard
              productName={product.productName}
              price={product.price}
              slug={product.slug}
              image={product.image ? product.image.url : ""}
              key={product.productName}
            />
          ))}
        </div>
      </section>
        <div className={styles.products__moreCards}>
          {moreProducts.map((product: ProductCardProps) => (
            <ProductCard
              productName={product.productName}
              price={product.price}
              slug={product.slug}
              image={product.image ? product.image.url : ""}
              key={product.productName}
            />
          ))}
        </div>
      <Testimonials />
    </main>
  );
}
