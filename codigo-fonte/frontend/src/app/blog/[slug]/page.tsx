import { Comment } from "@/atomic/components/molecules/Comment";
import { NewComment } from "@/atomic/components/molecules/NewComment";
import { ArticleExpanded } from "@/organisms/ArticleExpanded";
import { getEntry } from "@/api/contentful";
import { User } from "next-auth";
import styles from "./styles.module.scss";

interface ArticleProps {
  user: User | undefined;
  params: { slug: string };
}

export default async function Article({ params, user }: ArticleProps) {
  const article = await getEntry("blogPost", params.slug);
  console.log(article.sys.id);
  return (
    <main className={styles.article}>
      <ArticleExpanded
        title={article.title}
        author={article.author}
        dateOfPublication={article.dateOfPublication}
        image={article.image ? article.image.url : ""}
        content={article.content}
        slug={article.slug}
        alternativeText={article.alternativeText}
      />

      <section className={styles.article__comments}>
        <Comment
          name="Daisy Jones"
          comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          user={user}
        />
        <Comment
          name="Camila Dunne"
          comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          user={user}
        />
        <NewComment
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          placeholder=""
          user={user}
        />
      </section>
    </main>
  );
}
