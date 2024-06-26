import { AuthorProps } from "@/shared/interfaces"
import Image from "next/image"
import styles from './Avatar.module.css'


const Avatar = ({username, avatar, ...props }: AuthorProps) => {
  return (
    <div className={styles.avatar}>
      <ul>
        <li><Image src={avatar} alt={`Foto de Avatar do(a) ${username}`} width={32} height={32}/></li>
        <li>{username}</li>
      </ul>
    </div>
  )
}

export default Avatar