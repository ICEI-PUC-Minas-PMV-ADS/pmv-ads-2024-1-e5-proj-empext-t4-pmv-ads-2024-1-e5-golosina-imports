import { Button } from "@/atoms/Button";
import { Text } from "@/atoms/Text";
import { X } from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";

interface ModalProps {
  content: string;
  buttonLabel: string;
  secondButtonLabel?: string;
  hasTwoButtons?: boolean;
  onClose: () => void;
  onButtonClick: () => void;
}

export const Modal = ({
  content,
  buttonLabel,
  secondButtonLabel,
  hasTwoButtons = false,
  onClose,
  onButtonClick,
}: ModalProps) => {
  return (
    <div className={styles.modal}>
      <X size={32} onClick={onClose} className={styles.modal__closeIcon} />
      <div className={styles.modal__content}>
        <Text align="center" children={content} color="dark-gray" />
      </div>
      <div className={styles.modal__buttons}>
        {hasTwoButtons && (
          <Button level="primary" label={secondButtonLabel} onClick={onClose} />
        )}
        <Button level="secondary" label={buttonLabel} onClick={onButtonClick} />
      </div>
    </div>
  );
};
