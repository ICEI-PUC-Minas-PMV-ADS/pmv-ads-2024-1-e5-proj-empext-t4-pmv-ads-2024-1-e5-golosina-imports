import { useState } from "react";
import { Text } from "@/atoms/Text";
import { Plus, Minus } from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";

interface AccordionItemProps {
  title: string;
  text: string;
}

export const AccordionItem = ({ title, text }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSummary = () => {
    setIsOpen(!isOpen);
  };

  return (
    <details className={styles.accordionItem}>
      <summary className={styles.accordionItem__title} onClick={toggleSummary}>
        {title}
        {isOpen ? (
          <Minus size={24} color="#584B53" />
        ) : (
          <Plus size={24} color="#9D5C63" />
        )}
      </summary>
      <Text
        align="left"
        children={text}
        color="wenge"
        lineHeight="3rem"
        letterSpacing="0.05rem"
      />
    </details>
  );
};
