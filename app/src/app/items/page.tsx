import { Item } from '@/presentation/templates'
import { getItems } from '@/application/services/itemService'

interface ItemsProps {
  searchParams: {
    search: string
  }
}

export default async function ItemsPage({ searchParams }: ItemsProps) {
  const { items } = await getItems(searchParams?.search)

  return (
    <Item>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
      similique cumque maiores quaerat consectetur voluptas illum nesciunt
      adipisci quo nemo, hic nam unde autem eius consequatur aut. Quaerat, quae
      esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
      similique cumque maiores quaerat consectetur voluptas illum nesciunt
      adipisci quo nemo, hic nam unde autem eius consequatur aut. Quaerat, quae
      esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
      similique cumque maiores quaerat consectetur voluptas illum nesciunt
      adipisci quo nemo, hic nam unde autem eius consequatur aut. Quaerat, quae
      esse.
      {/* <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link href={`/item/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul> */}
    </Item>
  )
}
