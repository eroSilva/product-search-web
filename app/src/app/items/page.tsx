import { Title } from '@/ui/components'
import Link from 'next/link'

interface ItemsProps {
  searchParams: {
    search: string
  }
}

async function getData(term: string) {
  const res = await fetch(`http://localhost:8000/api/items?search=${term}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Items({ searchParams }: ItemsProps) {
  const { items } = await getData(searchParams?.search)

  console.log(items)

  return (
    <>
      <Title>Página de listagem de Produtos</Title>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link href={`/item/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
