import Card from "@/components/Card";
import styles from './page.module.css'
import logger from "@/logger";
import Link from "next/link";
import { Post } from "@prisma/client";
import db from "../../prisma/db";

async function getAllPost(page : number, search?: string): Promise<Post[]> {
  try {
    const posts = await db.post.findMany({
      include: {
        author: true
      },
      take: 6,
      orderBy: {
        createdAt: 'desc'
      },
      skip: (page -1) * 6,
      where: {
        title: {
          contains: search,
          mode: 'insensitive'
        }
      }
    })

    return posts
  } catch (error) {
    logger.error('Error fetching posts:', { error });
    return [];
  }
}

async function Home({ searchParams }: any) {
  const currentPage = searchParams?.page ?? 1
  const search = searchParams?.query
  const posts = await getAllPost(currentPage, search)
  return (
    <main>
      <section className={styles.grid}>
        {posts.map(post => 
          <Card key={post.title} { ...post }/> 
        )}
        {currentPage > 1 && 
          <Link className={styles.link} href={{ pathname: '/', query: {page: (Number(currentPage) -1), q: search } }} passHref>
            Página Anterior
          </Link>
        }
        {currentPage && 
          <Link className={styles.link} href={{ pathname: '/', query: {page: (Number(currentPage) +1), q: search } }} passHref>
            Próxima Página
          </Link>
        }
      </section>
    </main>
  );
}

export default Home