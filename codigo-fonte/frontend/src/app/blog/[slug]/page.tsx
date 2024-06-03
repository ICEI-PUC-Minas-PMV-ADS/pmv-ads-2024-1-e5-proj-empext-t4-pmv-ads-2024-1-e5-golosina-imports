import { Comment } from "@/atomic/components/molecules/Comment";
import { NewComment } from "@/atomic/components/molecules/NewComment";
import { ArticleExpanded } from "@/organisms/ArticleExpanded";
import { getEntry } from "@/api/contentful";
import { User } from "next-auth";
import styles from "./styles.module.scss";
import { useSession } from "next-auth/react";
import { auth } from "@/auth";

interface ArticleProps {
  params: { slug: string };
}

export default async function Article({ params }: ArticleProps) {
  const article = await getEntry("blogPost", params.slug);
  const session = await auth();

  const user = session?.user;

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
        {
          user ?
            <NewComment
              user={user}
            />
            :
            <div className={styles.comment}>
              <span className={styles.comment__label}>
                Faça login para postar um novo comentário
              </span>
            </div>
        }
      </section>
    </main>
  );
}
