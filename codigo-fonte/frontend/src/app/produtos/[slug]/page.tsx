import { ProductExpanded } from "@/organisms/ProductExpanded";
import { Testimonials } from "@/organisms/Testimonials";
import { getEntry } from "@/api/api";
import styles from "./styles.module.scss";

export default async function Product({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getEntry("product", params.slug);
  return (
    <main className={styles.product}>
      <ProductExpanded
        productName={product.productName}
        productType={product.productType}
        price={product.price}
        description={product.description}
        image={product.image ? product.image.url : ""}
        characteristics={product.characteristics}
      />
      <Testimonials />
    </main>
  );
}
