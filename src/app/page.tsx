import Card from "@/components/Card";
import { PostProps } from "@/shared/interfaces";
import styles from './page.module.css'
import logger from "@/logger";
import Link from "next/link";
import Input from "@/components/Input";
import Button from "@/components/Button";

async function getAllPost(page : number): Promise<PostProps[]> {
  try {
    const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`);
    if (!response.ok) {
      logger.error(`HTTP error! Status: ${response.status}`);
      return [];
    }
    const postsResponse = await response.json();
    const postsData: PostProps[] = postsResponse.data;
    logger.info("Posts Obtidos com Sucesso!");
    return postsData;
  } catch (error) {
    logger.error('Error fetching posts:', error);
    return [];
  }
}

async function Home({ searchParams }: any) {
  const currentPage = searchParams?.page ?? 1
  const posts = await getAllPost(currentPage)
  return (
    <main>
      <div className={styles.search}>
        <Input placeholder="Digite o que você procura"/>
        <Button 
          label="Enviar"
        />
      </div>
      <section className={styles.grid}>
        {posts.map(post => 
          <Card key={post.body} { ...post }/> 
        )}
        {currentPage > 1 && 
          <Link className={styles.link} href={`/?page=${Number(currentPage) -1}`} passHref>
            Página Anterior
          </Link>
        }
        {currentPage && 
          <Link className={styles.link} href={`/?page=${Number(currentPage) +1}`} passHref>
            Próxima Página
          </Link>
        }
      </section>
    </main>
  );
}

export default Home