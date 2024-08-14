import { notFound } from 'next/navigation'
import { ProductList } from '@/presentation/templates'
import { getItems } from '@/application/services/itemService'

interface ItemsProps {
  searchParams: {
    search: string
  }
}

export default async function ProductListPage({ searchParams }: ItemsProps) {
  const itemsResponse = await getItems(searchParams?.search)
  const isResponseInstance = itemsResponse instanceof Response

  if (!isResponseInstance) {
    return <ProductList {...itemsResponse} />
  }

  if (itemsResponse.status === 404) {
    return notFound()
  }

  throw new Error('Internal server error')
}
