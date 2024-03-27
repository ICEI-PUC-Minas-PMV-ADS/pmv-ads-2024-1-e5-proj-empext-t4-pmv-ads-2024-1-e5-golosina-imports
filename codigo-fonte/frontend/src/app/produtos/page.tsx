import { ProductList } from "@/organisms/ProductList";
import { Testimonials } from "@/organisms/Testimonials";
import styles from "./styles.module.scss";

export default function Products() {
  return (
    <main className={styles.products}>
      <ProductList />
      <Testimonials />
    </main>
  );
}
