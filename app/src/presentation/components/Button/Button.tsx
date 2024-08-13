import { ButtonHTMLAttributes } from 'react'
import styles from './button.module.scss'

interface ButtonProps<T extends HTMLElement> extends ButtonHTMLAttributes<T> {
  hierarchy?: 'primary' | 'secondary'
  size?: 'medium' | 'large'
  isFull?: boolean
}

export const Button = ({
  hierarchy = 'primary',
  size = 'medium',
  isFull = false,
  className,
  ...props
}: ButtonProps<HTMLButtonElement>) => (
  <button
    className={`${styles.root} ${styles[hierarchy]} ${styles[size]} ${styles[isFull ? 'is-full' : '']} ${className}`}
    {...props}
  >
    {props.children}
  </button>
)
