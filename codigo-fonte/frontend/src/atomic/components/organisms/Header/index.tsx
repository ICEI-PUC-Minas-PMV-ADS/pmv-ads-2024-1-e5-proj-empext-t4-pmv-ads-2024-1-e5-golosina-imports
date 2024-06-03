import { Hero } from "@/atomic/components/molecules/Hero";
import styles from "./styles.module.scss";
import { Navigation } from "@/molecules/Navigation";

export const Header = async () => {
  return (
    <header className={styles.header}>
      <Navigation/>
      <Hero />
    </header>
  );
};
