import { Title } from '@/ui/components'

interface ItemProps {
  params: {
    id: string
  }
}

export default function Item({ params }: ItemProps) {
  return (
    <>
      <Title>Página de detalhes do Produto</Title>
      <p>{params.id}</p>
    </>
  )
}
