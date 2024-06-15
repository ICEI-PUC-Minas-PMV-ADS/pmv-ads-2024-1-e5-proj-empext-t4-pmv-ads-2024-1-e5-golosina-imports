import { Heading } from "@/atoms/Heading";
import { Text } from "@/atoms/Text";
import { Testimonial } from "@/molecules/Testimonial";
import styles from "./styles.module.scss";

export const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <Heading align="center" children="Depoimentos" color="white" level="2" />
      <Text
        align="center"
        children="Explore os testemunhos de nossos clientes e descubra suas experiências com nossos produtos"
        color="white"
      />
      <div className={styles.testimonials__cards}>
        {/* <Testimonial
          name={""}
          location={""}
          rate={0}
          feedback={""}
          image={""}
        /> */}
      </div>
    </section>
  );
};
