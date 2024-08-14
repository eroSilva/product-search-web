import { notFound } from 'next/navigation'
import { Items } from '@/presentation/templates'
import { getItems } from '@/application/services/itemService'

interface ItemsProps {
  searchParams: {
    search: string
  }
}

export default async function ItemsPage({ searchParams }: ItemsProps) {
  if (!searchParams?.search) {
    notFound()
  }

  const { query, items } = await getItems(searchParams?.search)

  return <Items items={items} query={query} />
}
