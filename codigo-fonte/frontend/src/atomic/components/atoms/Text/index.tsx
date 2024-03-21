import styles from "./styles.module.scss";

interface TextProps {
  align?: string;
  children?: string;
  color?: string;
  weight?: string;
  lineHeight?: "3rem" | "4.4rem";
  letterSpacing?: "0.05rem" | "0.015rem";
}
export const Text = ({
  align,
  children,
  color,
  weight,
  lineHeight,
  letterSpacing,
}: TextProps) => {
  const textStyle = [
    styles[`text`],
    styles[`text--${align}`],
    styles[`text--${color}`],
    styles[`text--${weight}`],
  ].join(" ");

  const textConfig = {
    lineHeight: lineHeight,
    letterSpacing: letterSpacing,
  };

  return (
    <p className={textStyle} style={textConfig}>
      {children}
    </p>
  );
};
