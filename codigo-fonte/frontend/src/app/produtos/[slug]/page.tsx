import { ProductExpanded } from "@/atomic/components/organisms/ProductExpanded";
import { Testimonials } from "@/organisms/Testimonials";
import styles from "./styles.module.scss";

const dummyCharacteristics = [
  { information: "Lorem ipsum dolor sit amet" },
  { information: "Consectetur adipiscing elit" },
  { information: "Sed do eiusmod tempor incididunt" },
];

export default function Product({ params }: { params: { slug: string } }) {
  return (
    <main className={styles.product}>
      <ProductExpanded
        product="Alfajor Argentino"
        productType="Doce"
        price={2.5}
        description="Delicioso alfajor argentino com recheio de doce de leite."
        image="/images/alfajor.jpg"
        characteristics={dummyCharacteristics}
      />

      <Testimonials />
    </main>
  );
}
