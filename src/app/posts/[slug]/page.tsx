import Card from "@/components/Card";
import logger from "@/logger";
import { PostProps } from "@/shared/interfaces";
import { remark } from 'remark'
import html from 'remark-html'
import styles from './Slug.module.css'

async function getPostBySlug(slug: string): Promise<PostProps | null> {
  try {
    const response = await fetch(`http://localhost:3042/posts?slug=${slug}`);
    if (!response.ok) {
      logger.error(`HTTP error! Status: ${response.status}`);
      return null;
    }
    const postResponse = await response.json();
    if (postResponse.length === 0) {
      return null
    }
    logger.info("Posts Obtidos com Sucesso!");

    const post = postResponse[0]
    post.markdown = await processMarkdown(post)

    return post
  } catch (error) {
    logger.error('Error fetching posts:', error);
    return null;
  }
}

async function processMarkdown(post: PostProps) {
  const processedContent = await remark()
    .use(html)
    .process(post.markdown)
  const contentHtml = processedContent.toString()

  return contentHtml
}

const PagePost = async ({ params } : any) => {
  const post = await getPostBySlug(params?.slug)
  return (
    post ? (
      <main className={styles.main}>
        <Card {...post} main/>
        <h2>Código: </h2>
        <section dangerouslySetInnerHTML={{ __html: post.markdown}} className={styles.code}>
        </section>
      </main>
    ) : (
      <main className={styles.main}>
        <h2>Página Não encontrada!</h2>
      </main>
    )
  )
}

export default PagePost