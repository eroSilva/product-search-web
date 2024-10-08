import styles from './table.module.scss'

interface CellProps {
  name?: string | null
  value?: string | null
}

interface TableProps {
  heading: string[]
  data: CellProps[]
}

export const Table = ({ heading, data }: TableProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {heading?.map((value, index) => <th key={`th-${index}`}>{value}</th>)}
        </tr>
      </thead>
      <tbody>
        {data?.map(({ name, value }, index) => (
          <tr key={`tr-td-${index}`}>
            <td>{name ?? '-'}</td>
            <td>{value ?? '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
