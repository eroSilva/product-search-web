import { Title } from '@/ui/components'

interface ItemProps {
  params: {
    id: string
  }
}

async function getData(id: string) {
  const res = await fetch(`http://localhost:8000/api/item/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Item({ params }: ItemProps) {
  const data = await getData(params?.id)

  return (
    <>
      <Title>{data.title}</Title>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </>
  )
}
