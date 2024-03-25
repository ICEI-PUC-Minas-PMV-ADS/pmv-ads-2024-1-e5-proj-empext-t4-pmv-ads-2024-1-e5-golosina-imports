"use client";

import { useWindowSize } from "react-use";
import { Heading } from "@/atoms/Heading";
import { AccordionItem } from "@/molecules/AccordionItem";
import styles from "./styles.module.scss";
import faq from "@/data/faq.json";

export const Accordion = () => {
  const { width } = useWindowSize();
  const align = width < 768 ? "left" : "center";

  return (
    <section className={styles.accordion}>
      <Heading
        align={align}
        children="Perguntas frequentes"
        color="wenge"
        level="2"
      />
      <div className={styles.accordion__items}>
        {faq.map((item, index) => (
          <AccordionItem key={index} title={item.title} text={item.text} />
        ))}
      </div>
    </section>
  );
};
