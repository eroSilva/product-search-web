import { Items } from '@/presentation/templates'
import { getItems } from '@/application/services/itemService'

interface ItemsProps {
  searchParams: {
    search: string
  }
}

export default async function ItemsPage({ searchParams }: ItemsProps) {
  const { items } = await getItems(searchParams?.search)

  return <Items items={items} />
}
