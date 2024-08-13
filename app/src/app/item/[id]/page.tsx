import { Item } from '@/presentation/templates'
import { getItem } from '@/application/services/itemService'

interface ItemProps {
  params: {
    id: string
  }
}

export default async function ItemPage({ params }: ItemProps) {
  const data = await getItem(params?.id)

  return <Item {...data} />
}
