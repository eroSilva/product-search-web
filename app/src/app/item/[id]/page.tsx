import { notFound } from 'next/navigation'
import { ProductDetail } from '@/presentation/templates'
import { getItem } from '@/application/services'

interface ItemProps {
  params: {
    id: string
  }
}

export default async function ItemPage({ params }: ItemProps) {
  const itemResponse = await getItem(params?.id)
  const isResponseInstance = itemResponse instanceof Response

  if (!isResponseInstance) {
    return <ProductDetail {...itemResponse} />
  }

  if (itemResponse.status === 404) {
    return notFound()
  }

  throw new Error('Internal server error')
}
