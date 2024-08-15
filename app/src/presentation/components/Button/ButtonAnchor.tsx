import { AnchorHTMLAttributes, forwardRef } from 'react'
import styles from './button.module.scss'
import { CommonButtonProps } from './types'

type NativeAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>
type ButtonAnchorProps = NativeAnchorProps & CommonButtonProps

export const ButtonAnchor = forwardRef<HTMLAnchorElement, ButtonAnchorProps>(
  (
    {
      hierarchy = 'primary',
      size = 'medium',
      isFull = false,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <a
        ref={ref}
        className={`${styles.root} ${styles[hierarchy]} ${styles[size]} ${styles[isFull ? 'is-full' : '']} ${className}`}
        {...props}
      >
        {props.children}
      </a>
    )
  },
)
