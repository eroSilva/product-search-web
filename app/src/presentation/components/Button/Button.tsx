import { ButtonHTMLAttributes } from 'react'
import styles from './button.module.scss'
import { CommonButtonProps } from './types'

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
type ButtonProps = NativeButtonProps & CommonButtonProps

export const Button = ({
  hierarchy = 'primary',
  size = 'medium',
  isFull = false,
  className,
  ...props
}: ButtonProps) => (
  <button
    className={`${styles.root} ${styles[hierarchy]} ${styles[size]} ${styles[isFull ? 'is-full' : '']} ${className}`}
    {...props}
  >
    {props.children}
  </button>
)
