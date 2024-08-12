import Link from 'next/link'
import { Title } from '@/ui/components'
import { getItems } from '@/services/itemService'

interface ItemsProps {
  searchParams: {
    search: string
  }
}

export default async function Items({ searchParams }: ItemsProps) {
  const { items } = await getItems(searchParams?.search)

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
