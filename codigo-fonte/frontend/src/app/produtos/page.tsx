import { ProductList } from "@/organisms/ProductList";
import { Testimonials } from "@/organisms/Testimonials";
import { getAllEntries } from "@/api/api";
import { ProductCardProps } from "@/molecules/ProductCard";
import styles from "./styles.module.scss";
import { Suspense } from "react";
import { MoonLoader } from "react-spinners";

export default async function Products() {
  const products = await getAllEntries("product");

  return (
    <main className={styles.products}>
      <Suspense fallback={<MoonLoader />} >
        {products?.map((product: ProductCardProps) => (
          <ProductList
            productName={product.productName}
            price={product.price}
            slug={product.slug}
            image={product.image?.url || ""}
            key={product.productName}
          />
        ))}
        <Testimonials />
      </Suspense>
    </main>
  );
}
