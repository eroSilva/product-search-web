import styles from './table.module.scss'

interface CellProps {
  name?: string | null
  value?: string | null
}

interface TableProps {
  heading: CellProps[]
  data: CellProps[]
}

export const Table = ({ heading, data }: TableProps) => {
  return (
    <table className={styles.table}>
      <thead>
        {heading?.map(({ name, value }) => (
          <tr>
            <th>{name ?? '-'}</th>
            <th>{value ?? '-'}</th>
          </tr>
        ))}
      </thead>
      <tbody>
        {data?.map(({ name, value }) => (
          <tr>
            <td>{name ?? '-'}</td>
            <td>{value ?? '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
