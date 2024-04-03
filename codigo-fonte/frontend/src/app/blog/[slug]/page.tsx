import { Comment } from "@/atomic/components/molecules/Comment";
import { NewComment } from "@/atomic/components/molecules/NewComment";
import { ArticleExpanded } from "@/organisms/ArticleExpanded";
import styles from "./styles.module.scss";

export default function Article({ params }: { params: { slug: string } }) {
  return (
    <main className={styles.article}>
      <ArticleExpanded
        articleTitle="O sabor do Alfajor Argentino"
        author="Golosinas Imports"
        date="02 de abril de 2024"
        image="/images/alfajor.jpg"
      />
      <section className={styles.article__comments}>
        <Comment
          name="Daisy Jones"
          comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Comment
          name="Camila Dunne"
          comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <NewComment
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          placeholder=""
        />
      </section>
    </main>
  );
}
