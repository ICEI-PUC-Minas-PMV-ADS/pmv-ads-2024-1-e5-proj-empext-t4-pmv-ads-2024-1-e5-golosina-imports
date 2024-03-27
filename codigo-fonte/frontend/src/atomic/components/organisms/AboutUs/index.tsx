"use client";

import { Heading } from "@/atoms/Heading";
import { Text } from "@/atoms/Text";
import { AboutItem } from "@/molecules/AboutItem";
import styles from "./styles.module.scss";
import aboutUs from "@/data/aboutUs.json";

export const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.aboutUs__heading}>
        <Heading align="left" children="Sobre nós" color="wenge" level="3" />
        <Text
          align="left"
          children="Aqui, cada mordida é uma celebração da autenticidade e do cuidado artesanal que colocamos em cada doce momento."
          color="dark-gray"
          lineHeight="3rem"
        />
      </div>
      <div className={styles.aboutUs__items}>
        {aboutUs.map((item, index) => (
          <AboutItem key={index} title={item.title} text={item.text} />
        ))}
      </div>
    </section>
  );
};
