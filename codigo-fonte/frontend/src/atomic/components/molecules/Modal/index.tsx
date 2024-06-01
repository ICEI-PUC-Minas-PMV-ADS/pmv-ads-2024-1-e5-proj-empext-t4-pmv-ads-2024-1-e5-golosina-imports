import { Button } from "@/atoms/Button";
import { Text } from "@/atoms/Text";
import { X } from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";

interface ModalProps {
  content: string;
  onClick: () => void;
}

export const Modal = ({ content, onClick }: ModalProps) => {
  return (
    <div className={styles.modal}>
      <X size={32} onClick={onClick} className={styles.modal__closeIcon} />
      <div className={styles.modal__content}>
        <Text align="center" children={content} color="dark-gray" />
      </div>
      <div className={styles.modal__buttons}>
        <Button level="secondary" label="Fechar" onClick={onClick} />
      </div>
    </div>
  );
};
