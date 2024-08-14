import { ItemEntity, ItemsEntity } from '@product-search-web/shared'

export const itemEntityNullableFixture: ItemEntity = {
  categories: [],
  condition: null,
  description: null,
  free_shipping: null,
  id: null,
  picture_url: null,
  price: {
    amount: null,
    currency: null,
    decimals: null,
  },
  title: null,
  seller: null,
}

export const itemEntityFixture: ItemEntity = {
  categories: ['Celulares e Telefones', 'Celulares e Smartphones'],
  condition: 'new',
  description: null,
  free_shipping: true,
  id: 'MLB3333537967',
  picture_url: 'http://http2.mlstatic.com/D_896874-MLU74917793798_032024-I.jpg',
  price: {
    amount: 187,
    currency: 'BRL',
    decimals: 90,
  },
  title:
    'Modulo Taramps Ts400x4 400w 2 Ohms Rca Ts 400x4 4 Canais 100w Amplificador 400rms T400 4 Canais Potencia Taramps Som Para Carro Moto Caminhonete Automotivo',
  seller: 'JAQUIM SHOP',
}

export const itemsEntityEmptyFixture: ItemsEntity = {
  query: 'SOME_QUERY',
  categories: [],
  items: [],
}

export const itemsEntityFixture: ItemsEntity = {
  query: 'Moto',
  categories: ['Celulares e Telefones', 'Celulares e Smartphones'],
  items: [
    {
      categories: ['Celulares e Telefones', 'Celulares e Smartphones'],
      condition: 'new',
      description: null,
      free_shipping: true,
      id: 'MLB3333537967',
      picture_url:
        'http://http2.mlstatic.com/D_896874-MLU74917793798_032024-I.jpg',
      price: {
        amount: 187,
        currency: 'BRL',
        decimals: 90,
      },
      title:
        'Modulo Taramps Ts400x4 400w 2 Ohms Rca Ts 400x4 4 Canais 100w Amplificador 400rms T400 4 Canais Potencia Taramps Som Para Carro Moto Caminhonete Automotivo',
      seller: 'JAQUIM SHOP',
    },
    {
      categories: ['Celulares e Telefones', 'Celulares e Smartphones'],
      condition: 'new',
      description: null,
      free_shipping: null,
      id: 'MLB3370852551',
      picture_url:
        'http://http2.mlstatic.com/D_966289-MLB53287968748_012023-I.jpg',
      price: {
        amount: 29,
        currency: 'BRL',
        decimals: 25,
      },
      title: 'Bomba De Ar Pedal Alta Pressão Pneu Moto Bicicleta Colchão',
      seller: 'JAQUIM SHOP',
    },
  ],
}
