import { useState } from "react";
import { Button } from "@/atoms/Button";
import { Text } from "@/atoms/Text";
import styles from "./styles.module.scss";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export const Filter = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleFilter = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 1000);

  const setActiveButtonAndFilter = (label: string, value: number) => {
    handleFilter(value);
    setActiveButton(label);
  };

  const handleClearFilter = () => {
    setActiveButton(null);
    replace(pathname);
  };

  const getButtonClassName = (label: string) =>
    activeButton === label ? `${styles.filter__buttonClicked}` : "";

  return (
    <div className={styles.filter}>
      <Text
        align="left"
        children="Filtre por preço"
        color="wenge"
        lineHeight="3rem"
      />
      <div className={styles.filter__buttons}>
        <Button
          isButton={true}
          label="Até 9,99"
          level="secondary"
          size="small"
          onClick={() => setActiveButtonAndFilter("Até 9,99", 9.99)}
          className={getButtonClassName("Até 9,99")}
        />
        <Button
          isButton={true}
          label="Até 19,99"
          level="secondary"
          size="small"
          onClick={() => setActiveButtonAndFilter("Até 19,99", 19.99)}
          className={getButtonClassName("Até 19,99")}
        />
        <Button
          isButton={true}
          label="Todos"
          level="quaternary"
          size="small"
          onClick={handleClearFilter}
        />
      </div>
    </div>
  );
};
