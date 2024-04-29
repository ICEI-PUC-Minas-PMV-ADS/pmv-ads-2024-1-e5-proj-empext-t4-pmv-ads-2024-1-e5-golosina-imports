"use client";
import { usePathname } from "next/navigation";
import { Heading } from "@/atoms/Heading";
import { Text } from "@/atoms/Text";
import { Search } from "@/molecules/Search";
import styles from "./styles.module.scss";
import { Filter } from "@/molecules/Filter";

export const HeadingSearch = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isBlog = pathname === "/produtos";

  return (
    <div className={styles.headingSearch}>
      <div className={styles.headingSearch__container}>
        <Heading align="left" children="Golosinas" color="wenge" level="2" />
        {isHome && (
          <Text
            align="left"
            children="Explore uma variedade deliciosa de alfajores artesanais e irresistíveis. Sabores únicos e textura macia em cada mordida."
            color="wenge"
            lineHeight="3.8rem"
          />
        )}
        <Search />
        {isBlog && <Filter />}
      </div>
    </div>
  );
};
