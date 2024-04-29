import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 1000);

  return (
    <form className={styles.search}>
      <MagnifyingGlass size={32} color="#584B53" />
      <input
        placeholder="Alfajor"
        className={styles.search__input}
        aria-label="Buscar alfajor"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </form>
  );
};
