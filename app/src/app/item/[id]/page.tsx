import { Title } from '@/presentation/components'
import { getItem } from '@/application/services/itemService'

interface ItemProps {
  params: {
    id: string
  }
}

export default async function Item({ params }: ItemProps) {
  const data = await getItem(params?.id)

  return (
    <>
      <Title>{data.title}</Title>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </>
  )
}
