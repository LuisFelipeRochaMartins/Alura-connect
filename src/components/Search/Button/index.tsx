import { ComponentProps } from "react"
import styles from './Button.module.css'

interface ButtonProps extends ComponentProps<'button'> {
  label: string
}

const Button = ({ label, ...props}: ButtonProps) => {
  return (
    <button {...props} className={styles.button}>
      {label}
    </button>
  )
}

export default Button