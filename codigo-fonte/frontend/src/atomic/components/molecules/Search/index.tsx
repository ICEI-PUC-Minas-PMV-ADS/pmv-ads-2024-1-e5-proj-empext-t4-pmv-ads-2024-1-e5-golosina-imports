import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";

export const Search = () => {
  return (
    <div className={styles.search}>
      <MagnifyingGlass size={32} color="#584B53" />
      <input placeholder="Alfajor" className={styles.search__input} />
    </div>
  );
};
