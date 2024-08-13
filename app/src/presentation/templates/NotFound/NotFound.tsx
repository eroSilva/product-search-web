import Link from 'next/link'
import { ButtonAnchor } from '@/presentation/components'
import styles from './not-found.module.scss'

export const NotFound = () => {
  return (
    <section className={styles.section}>
      <span className={styles.emoji}>😶‍🌫️</span>
      <h1 className={styles.title}>Ops! Página não encontrada </h1>
      <p className={styles.description}>
        <Link href="/" passHref legacyBehavior>
          <ButtonAnchor size="large">Voltar para a página inicial</ButtonAnchor>
        </Link>
      </p>
    </section>
  )
}
