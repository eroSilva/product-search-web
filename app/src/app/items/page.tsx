import { Title } from '@/ui/components'

interface ItemsProps {
  searchParams: {
    search: string
  }
}

export default function Items({ searchParams }: ItemsProps) {
  return (
    <>
      <Title>Página de listagem de Produtos</Title>
      <p>{searchParams['search']}</p>
    </>
  )
}
