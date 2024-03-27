"use client";

import { usePathname } from "next/navigation";
import { ListItem } from "@/atoms/ListItem";
import { Text } from "@/atoms/Text";
import styles from "./styles.module.scss";
import navigation from "@/data/navigation.json";

export const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <Text
        align="center"
        children="Conectando você ao melhor em sabor e qualidade, uma mordida de cada vez"
      />
      <nav>
        <ul className={styles.footer__list}>
          {navigation.map((item, index) => (
            <ListItem
              key={index}
              children={item.children}
              href={item.href}
              isLink={true}
              align="center"
              weight={pathname === item.href ? "600" : "400"}
            />
          ))}
        </ul>
      </nav>
    </footer>
  );
};
