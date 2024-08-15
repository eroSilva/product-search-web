import styles from './home.module.scss'

interface HomeProps {
  title: string
  description: string
}

export const Home = ({ title, description }: HomeProps) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <p className={styles.emoji}>🥸</p>
    </section>
  )
}
