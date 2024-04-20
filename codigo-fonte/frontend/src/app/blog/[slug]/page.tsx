import { Comment } from "@/atomic/components/molecules/Comment";
import { NewComment } from "@/atomic/components/molecules/NewComment";
import {
  ArticleExpanded,
  ArticleExpandedProps,
} from "@/organisms/ArticleExpanded";
import { getAllEntries } from "@/api/api";
import styles from "./styles.module.scss";

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const articles = await getAllEntries("blogPost");

  return (
    <main className={styles.article}>
      {articles.map((article: ArticleExpandedProps) => (
        <ArticleExpanded
          title={article.title}
          author={article.author}
          dateOfPublication={article.dateOfPublication}
          image={article.image ? article.image.url : ""}
          content={article.content}
        />
      ))}

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
