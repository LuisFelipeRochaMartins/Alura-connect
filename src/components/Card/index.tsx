import Image from 'next/image'
import styles from './Card.module.css'
import Avatar from '../Avatar'
import { PostProps } from '@/shared/interfaces'
import Link from 'next/link'

const Card = ({id, cover, title, slug, body, markdown, author} : PostProps ) => {
  return (
    <Link href={`/posts/${slug}`} className={styles.link}>
      <article className={styles.card}>
        <header className={styles.header}>
          <figure>
            <Image 
              src={cover} 
              alt={`Capa do Post de título ${title}`} 
              width={433} 
              height={133}
            /> 
          </figure>
        </header>
        <section className={styles.body}>
          <h2>{ title }</h2>
          <p>{ body }</p>
        </section>
        <footer>
          <Avatar {...author}/>
        </footer>
      </article>
    </Link>
  )
}

export default Card