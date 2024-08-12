import { ButtonHTMLAttributes } from 'react'

type ButtonProps<T extends HTMLElement> = ButtonHTMLAttributes<T>

export const FancyButton = (props: ButtonProps<HTMLButtonElement>) => {
  return (
    <button className="MyClassName" {...props}>
      {props.children}
    </button>
  )
}
