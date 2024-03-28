import { Heading } from "@/atoms/Heading";
import { Text } from "@/atoms/Text";
import { ProductBanner, Characteristics } from "@/molecules/ProductBanner";
import { Share, SocialMediaType } from "@/molecules/Share";
import styles from "./styles.module.scss";

interface ProductExpandedProps {
  product: string;
  productType: string;
  price: number;
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
  const socialMediaOptions = [
    { platform: "whatsapp" as SocialMediaType },
    { platform: "telegram" as SocialMediaType },
    { platform: "instagram" as SocialMediaType },
  ];

  socialMediaOptions.map((option, index) => (
    <Share socialMedia={option.platform} />
  ));

  return (
    <section className={styles.productExpanded}>
      <div className={styles.productExpanded__container}>
        <div className={styles.productExpanded__heading}>
          <Heading
            align="left"
            children={`Conheça mais sobre o ${product}`}
            color="dark-gray"
            level="2"
          />
          <div className={styles.productExpanded__text}>
            <Text
              align="left"
              children={productType}
              color="wenge"
              weight="600"
            />
            <Text align="left" children={`R$ ${price}`} color="wenge" />
          </div>
        </div>
        <div className={styles.productExpanded__share}>
          {socialMediaOptions.map((option, index) => (
            <Share socialMedia={option.platform} key={index} />
          ))}
          ;
        </div>
      </div>

      <div className={styles.productExpanded__banner}>
        <ProductBanner
          product={product}
          description={description}
          characteristics={characteristics}
          image={image}
        />
      </div>
    </section>
  );
};
