import Link from "next/link";
import styles from "./styles.module.scss";

interface ButtonProps {
  className?: string;
  href?: string;
  isButton?: boolean;
  label?: string;
  level?: string;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>
  ) => void;
  target?: string;
  type?: string;
  size?: string;
  aria?: string;
  role?: string;
  children?: React.ReactNode;
  tabIndex?: number;
  disabled?: boolean;
}

export const Button = ({
  className = "",
  href,
  isButton = true,
  label,
  level,
  onClick,
  target,
  size,
  aria,
  role,
  tabIndex,
  disabled,
}: ButtonProps) => {
  return (
    <>
      {isButton ? (
        <button
          onClick={onClick}
          className={className}
          aria-label={aria}
          role={role}
          tabIndex={tabIndex}
        >
          {label}
        </button>
      ) : (
        <Link
          href={href || ""}
          target={target}
          className={className}
          role={role}
          onClick={onClick}
        >
          {label}
        </Link>
      )}
    </>
  );
};
