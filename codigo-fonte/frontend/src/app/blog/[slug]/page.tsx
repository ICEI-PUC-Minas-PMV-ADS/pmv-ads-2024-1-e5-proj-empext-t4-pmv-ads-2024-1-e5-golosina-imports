import { Comment } from "@/atomic/components/molecules/Comment";
import { NewComment } from "@/atomic/components/molecules/NewComment";
import { ArticleExpanded } from "@/organisms/ArticleExpanded";
import { getEntry } from "@/api/contentful";
import styles from "./styles.module.scss";
import { auth } from "@/auth";
import { getPostComments } from "@/api/backend/controllers/comment";
import { Text } from "@/atoms/Text";

interface ArticleProps {
  params: { slug: string };
}

export default async function Article({ params }: ArticleProps) {
  const article = await getEntry("blogPost", params.slug);
  const session = await auth();
  const user = session?.user;
  const postId = article.sys.id;

  const comments = await getPostComments(postId);

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
        {
          comments.length > 0 ?
            comments.map((comment) => {
              return (<Comment
                key={comment.id}
                name={comment.author}
                comment={comment.content}
                user={user}
              />)
            })
            : (<Text
              align="center"
              children="Ainda não há comentários. Seja o primeiro a comentar!"
              weight="400"
              lineHeight="3.8rem"
              letterSpacing="0.015rem"
            />)
        }
        {user ? (
          <NewComment user={user} postId={postId} />
        ) : (
          <Text
            align="left"
            children="Faça login para postar um novo comentário"
            weight="400"
            lineHeight="3.8rem"
            letterSpacing="0.015rem"
          />
        )}
      </section>
    </main>
  );
}
