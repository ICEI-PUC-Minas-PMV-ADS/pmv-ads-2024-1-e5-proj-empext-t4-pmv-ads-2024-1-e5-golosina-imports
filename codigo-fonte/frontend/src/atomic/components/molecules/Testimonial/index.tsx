import Image from "next/image";
import { Text } from "@/atoms/Text";
import styles from "./styles.module.scss";

interface TestimonialProps {
  name: string;
  location: string;
  rate: number;
  feedback: string;
  image: string;
}

export const Testimonial = ({
  name,
  location,
  rate,
  feedback,
  image,
}: TestimonialProps) => {
  return (
    <article className={styles.testimonial}>
      <div className={styles.testimonial__container}>
        <div className={styles.testimonial__content}>
          <Image
            src={image}
            alt={name}
            width={50}
            height={50}
            className={styles.testimonial__image}
          />
          <div className={styles.testimonial__user}>
            <Text
              align="left"
              children={name}
              color="dark-gray"
              weight="600"
              lineHeight="3rem"
              letterSpacing="0.015rem"
            />
            <Text
              align="left"
              children={location}
              color="light-blue"
              lineHeight="3rem"
              letterSpacing="0.05rem"
            />
          </div>
        </div>
        <p className={styles.testimonial__rate}>{rate}</p>
      </div>
      <Text
        align="left"
        children={feedback}
        color="dark-gray"
        lineHeight="3rem"
        letterSpacing="0.05rem"
      />
    </article>
  );
};
