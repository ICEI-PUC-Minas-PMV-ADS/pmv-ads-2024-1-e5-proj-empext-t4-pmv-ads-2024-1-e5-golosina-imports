import { Text } from "@/atomic/components/atoms/Text";
import { Heading } from "@/atomic/components/atoms/Heading";
import { Button } from "@/atomic/components/atoms/Button";
import styles from "./styles.module.scss";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <Text align="center" children="Sabor argentino à sua porta!" />
      <Heading
        align="center"
        children="Golosinas Imports"
        color="dark-gray"
        level="1"
      />
      <div className={styles.hero__heading}>
        <Text
          align="center"
          children="Mergulhe na experiência única dos autênticos alfajores argentinos, onde cada mordida é uma viagem ao sabor e à tradição."
          lineHeight="4.4rem"
        />
      </div>
      <div className={styles.hero__buttons}>
        <Button
          level="primary"
          label="Comprar"
          isButton={false}
          href="/produtos"
        />
        <Button
          level="quaternary"
          label="Fale conosco"
          isButton={false}
          href="/contato"
        />
      </div>
    </div>
  );
};
