import Card from "@/components/Card";
import logger from "@/logger";
import { remark } from 'remark'
import html from 'remark-html'
import styles from './Slug.module.css'
import db from "../../../../prisma/db";
import { Post } from "@prisma/client";
import { redirect } from "next/navigation";
import NotFound from "@/app/not-found";

async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const post = await db.post.findUnique({
      where: {
        slug
      },
      include: {
        author: true
      }
    })
    if (!post) {
      throw new Error(`Post não encontrado com o slug de ${slug}`)
    } 
    post.markdown = await processMarkdown(post)

    return post
  } catch (error) {
    logger.error('Error fetching posts:', error);
    return null;
  }
}

async function processMarkdown(post: Post) {
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
      <NotFound />
    )
  )
}

export default PagePost