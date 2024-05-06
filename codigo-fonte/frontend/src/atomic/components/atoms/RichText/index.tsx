import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from "./styles.module.scss";

interface RichTextProps {
  content: any;
}
export const RichText = ({ content }: RichTextProps) => {
  return (
    <div className={styles.richtext}>
      {documentToReactComponents(content.json)}
    </div>
  );
};
