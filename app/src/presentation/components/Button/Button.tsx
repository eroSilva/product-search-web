import { ButtonHTMLAttributes } from 'react'
import styles from './button.module.scss'

interface ButtonProps<T extends HTMLElement> extends ButtonHTMLAttributes<T> {
  hierarchy?: 'primary' | 'secondary'
}

export const Button = ({
  hierarchy = 'primary',
  className,
  ...props
}: ButtonProps<HTMLButtonElement>) => (
  <button
    className={`${styles.root} ${styles[hierarchy]} ${className}`}
    {...props}
  >
    {props.children}
  </button>
)
