import { ProductList } from "@/organisms/ProductList";
import { Testimonials } from "@/organisms/Testimonials";
import { getAllEntries } from "@/api/api";
import { ProductCardProps } from "@/molecules/ProductCard";
import styles from "./styles.module.scss";

export default async function Products() {
  const products = await getAllEntries("product");

  return (
    <main className={styles.products}>
      {products?.map((product: ProductCardProps) => (
        <ProductList
          productName={product.productName}
          price={product.price}
          slug={product.slug}
          image={product.image ? product.image.url : ""}
          key={product.productName}
        />
      ))}
      <Testimonials />
    </main>
  );
}
