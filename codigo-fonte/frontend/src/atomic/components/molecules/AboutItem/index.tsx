import { Cookie } from "@phosphor-icons/react/dist/ssr";
import { Text } from "@/atoms/Text";
import styles from "./styles.module.scss";

interface AboutItemProps {
  title: string;
  text: string;
}

export const AboutItem = ({ title, text }: AboutItemProps) => {
  return (
    <div className={styles.aboutItem}>
      <div className={styles.aboutItem__title}>
        <Cookie size={32} color="#9D5C63"/>
        <Text align="left" children={title} color="dark-gray" weight="600" />
      </div>
      <Text align="left" children={text} color="dark-gray" />
    </div>
  );
};
