import { ComponentProps } from "react"
import styles from './Input.module.css'
import { Search } from "lucide-react"

const Input = ({...props}: ComponentProps<'input'>) => {
  return (  
    <input {...props} className={styles.input}/>
  )
}

export default Input