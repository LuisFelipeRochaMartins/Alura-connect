import Card from "@/components/Card";
import logger from "@/logger";
import { PostProps } from "@/shared/interfaces";

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
    return postResponse[0]
  } catch (error) {
    logger.error('Error fetching posts:', error);
    return null;
  }
}

const PagePost = async ({ params } : any) => {
  const post = await getPostBySlug(params?.slug)
  return (
    post &&
    <Card {...post}/>
  )
}

export default PagePost