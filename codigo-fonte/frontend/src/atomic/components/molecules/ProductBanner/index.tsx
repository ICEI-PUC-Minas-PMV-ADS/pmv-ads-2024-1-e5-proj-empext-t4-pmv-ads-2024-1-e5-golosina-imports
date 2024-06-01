import { useState } from "react";
import { useWindowSize } from "react-use";
import { handleWhatsappClick } from "@/utils/whatsapp";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { Text } from "@/atoms/Text";
import { Button } from "@/atoms/Button";
import styles from "./styles.module.scss";

export type Characteristics = {
  information: string;
};

interface ProductBannerProps {
  productName: string;
  description: string;
  characteristics: Array<Characteristics>;
  image: string;
}

export const ProductBanner = ({
  productName,
  description,
  characteristics,
  image,
}: ProductBannerProps) => {
  const [currentInfoIndex, setCurrentInfoIndex] = useState(0);
  const { width } = useWindowSize();

  const handleNextInfo = () => {
    setCurrentInfoIndex((prevIndex) =>
      prevIndex === characteristics.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevInfo = () => {
    setCurrentInfoIndex((prevIndex) =>
      prevIndex === 0 ? characteristics.length - 1 : prevIndex - 1
    );
  };

  return (
    <article className={styles.product}>
      <div className={styles.product__heading}>
        <Text align="left" children={productName} color="wenge" weight="600" />
        <Text align="left" children={description} color="dark-gray" />
        <Button
          onClick={() => handleWhatsappClick(productName)}
          label="Comprar"
          level="quaternary"
          size="small"
        />
      </div>
      <div className={styles.product__imageContainer}>
        <Image
          src={image}
          alt=""
          width={width < 1200 ? 335 : 500}
          height={width < 1200 ? 335 : 500}
          className={styles.product__image}
        />
      </div>
      <div className={styles.product__information}>
        <Text
          align="center"
          children={characteristics[currentInfoIndex]?.information}
          color="dark-gray"
        />
      </div>
      <div className={styles.product__controls}>
        <ArrowLeft size={32} onClick={handlePrevInfo} color="#9D5C63" />
        <ArrowRight size={32} onClick={handleNextInfo} color="#9D5C63" />
      </div>
    </article>
  );
};
