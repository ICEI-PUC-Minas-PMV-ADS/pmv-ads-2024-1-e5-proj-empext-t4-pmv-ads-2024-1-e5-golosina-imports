import { Hero } from "@/atomic/components/molecules/Hero";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Hero />
    </header>
  );
};
