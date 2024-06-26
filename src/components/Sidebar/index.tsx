import Image from 'next/image'
import styles from './Sidebar.module.css'
import logo from './logo.png'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Image src={logo} alt="Logo do Code Connect" width={128} height={40} />
    </aside>
  )
}

export default Sidebar