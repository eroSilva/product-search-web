import { ButtonHTMLAttributes } from 'react'
import styles from './button.module.scss'

interface ButtonProps<T extends HTMLElement> extends ButtonHTMLAttributes<T> {
  hierarchy?: 'primary' | 'secondary'
}

export const Button = ({
  hierarchy = 'primary',
  ...props
}: ButtonProps<HTMLButtonElement>) => (
  <button className={`${styles.root} ${styles[hierarchy]} `} {...props}>
    {props.children}
  </button>
)
