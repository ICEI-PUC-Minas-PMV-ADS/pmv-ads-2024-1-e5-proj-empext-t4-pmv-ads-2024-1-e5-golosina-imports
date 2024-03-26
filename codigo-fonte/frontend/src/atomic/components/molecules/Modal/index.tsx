import { useState } from "react";
import { Button } from "@/atoms/Button";
import { Text } from "@/atoms/Text";
import { X } from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";

interface ModalProps {
  buttonLabel: string;
  title: string;
}

export const Modal = ({ buttonLabel, title }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleModalClick = (e: { target: any; currentTarget: any }) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* {isOpen && ( */}
      <div className={styles.modal} onClick={handleModalClick}>
        <X size={32} onClick={handleClose} className={styles.modal__closeIcon}/>
        <div className={styles.modal__content}>
          <Text align="center" children={title} color="dark-gray" />
        </div>
        <div className={styles.modal__buttons}>
          <Button level="primary" onClick={handleClose} label={buttonLabel} />
          <Button level="secondary" label="Fechar" onClick={handleClose} />
        </div>
      </div>
      {/* )} */}
    </>
  );
};
