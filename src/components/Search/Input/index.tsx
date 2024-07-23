import { ComponentProps } from "react"
import styles from './Input.module.css'

const Input = ({...props}: ComponentProps<'input'>) => {
  return (  
    <input name='query' {...props} className={styles.input}/>
  )
}

export default Input