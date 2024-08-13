import { AnchorHTMLAttributes } from 'react'
import styles from './button.module.scss'
import { CommonButtonProps } from './types'

type NativeAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>
type ButtonAnchorProps = NativeAnchorProps & CommonButtonProps

export const ButtonAnchor = ({
  hierarchy = 'primary',
  size = 'medium',
  isFull = false,
  className,
  ...props
}: ButtonAnchorProps) => (
  <a
    className={`${styles.root} ${styles[hierarchy]} ${styles[size]} ${styles[isFull ? 'is-full' : '']} ${className}`}
    {...props}
  >
    {props.children}
  </a>
)
