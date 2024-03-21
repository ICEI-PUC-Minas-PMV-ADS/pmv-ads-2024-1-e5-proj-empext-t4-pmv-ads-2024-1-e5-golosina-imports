import Link from "next/link";
import styles from "./styles.module.scss";

interface ListItemProps {
  children?: string;
  href: string;
  isLink?: boolean;
  color?: string;
  align?: string;
  weight?: string;
}
export const ListItem = ({
  children,
  href,
  isLink,
  color,
  align,
  weight,
}: ListItemProps) => {
  const linkStyle = [
    styles.list,
    styles[`list--${align}`],
    styles[`list--${color}`],
    styles[`list--${weight}`],
  ].join(" ");

  return (
    <li className={linkStyle}>
      {isLink ? <Link href={href}>{children}</Link> : children}
    </li>
  );
};
