import Link from 'next/link'
import { ButtonAnchor } from '@/presentation/components'
import styles from './error.module.scss'

interface ErrorProps {
  title: string
  emoji: string
}

export const Error = ({ title, emoji }: ErrorProps) => {
  return (
    <section className={styles.section}>
      <span className={styles.emoji}>{emoji}</span>
      <h1 className={styles.title}>{title} </h1>
      <p className={styles.description}>
        <Link href="/" passHref legacyBehavior>
          <ButtonAnchor size="large">Voltar para a página inicial</ButtonAnchor>
        </Link>
      </p>
    </section>
  )
}
