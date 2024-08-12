import { Title } from '@/ui/components'

export default function Home() {
  return (
    <>
      <Title>Página principal</Title>

      <form action="/items">
        <label htmlFor="input-search">Buscar produto</label>
        <input id="input-search" type="search" name="search" />
        <button type="submit">Procurar</button>
      </form>
    </>
  )
}
