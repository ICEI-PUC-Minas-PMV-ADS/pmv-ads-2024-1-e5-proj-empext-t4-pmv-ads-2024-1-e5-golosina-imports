import { HeadingSearch } from "@/organisms/HeadingSearch";
import { ProductCard, ProductCardProps } from "@/molecules/ProductCard";
import { Testimonials } from "@/organisms/Testimonials";
import { getAllEntries } from "@/api/contentful";
import styles from "./styles.module.scss";

export default async function Products({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const products = await getAllEntries("product");

  const query = searchParams?.query || "";
  
  const filteredProducts = products.filter((product: ProductCardProps) => {
    const productNameMatches = product.productName.toLowerCase().includes(query.toLowerCase());
    const priceMatches = parseFloat(query) && parseFloat(product.price) <= parseFloat(query);
    return productNameMatches || priceMatches;
  });
  

  const firstTwoProducts = filteredProducts.slice(0, 2);
  const moreProducts = filteredProducts.slice(2);

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
