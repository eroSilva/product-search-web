import { notFound } from 'next/navigation'
import { ProductList } from '@/presentation/templates'
import { getItems } from '@/application/services/itemService'

interface ItemsProps {
  searchParams: {
    search: string
  }
}

export default async function ProductListPage({ searchParams }: ItemsProps) {
  if (!searchParams?.search) {
    notFound()
  }

  const data = await getItems(searchParams?.search)

  return <ProductList {...data} />
}
