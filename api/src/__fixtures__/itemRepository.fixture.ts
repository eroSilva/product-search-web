import { ItemRepository, ItemsRepository } from '../domain'

export const itemRepositoryFixture: ItemRepository = {
  id: 'MLB3333537967',
  title:
    'Modulo Taramps Ts400x4 400w 2 Ohms Rca Ts 400x4 4 Canais 100w Amplificador 400rms T400 4 Canais Potencia Taramps Som Para Carro Moto Caminhonete Automotivo',
  condition: 'new',
  thumbnail_id: '896874-MLU74917793798_032024',
  catalog_product_id: 'MLB21941637',
  listing_type_id: 'gold_special',
  sanitized_title:
    'modulo-taramps-ts400x4-400w-2-ohms-rca-ts-400x4-4-canais-100w-amplificador-400rms-t400-4-canais-potencia-taramps-som-para-carro-moto-caminhonete-automotivo',
  permalink:
    'https://www.mercadolivre.com.br/modulo-taramps-ts400x4-400w-2-ohms-rca-ts-400x4-4-canais-100w-amplificador-400rms-t400-4-canais-potencia-taramps-som-para-carro-moto-caminhonete-automotivo/p/MLB21941637',
  buying_mode: 'buy_it_now',
  site_id: 'MLB',
  category_id: 'SOME_CATEGORY_ID',
  domain_id: 'MLB-VEHICLE_AMPLIFIERS',
  thumbnail: 'http://http2.mlstatic.com/D_896874-MLU74917793798_032024-I.jpg',
  currency_id: 'BRL',
  order_backend: 1,
  price: 187.9,
  original_price: 221.06,
  sale_price: {
    price_id: '',
    amount: 187.9,
    conditions: {
      eligible: true,
      context_restrictions: ['channel_marketplace'],
      start_time: '2024-07-17T03:00:00Z',
      end_time: '2024-08-17T02:59:59Z',
    },
    currency_id: 'BRL',
    exchange_rate: null,
    payment_method_prices: [],
    payment_method_type: 'TMP',
    regular_amount: 221.06,
    type: 'promotion',
    metadata: {
      promotion_id: 'OFFER-MLB3333537967-10801931604',
      promotion_type: 'custom',
    },
  },
  available_quantity: 5000,
  official_store_id: 1329,
  official_store_name: 'Taramps',
  use_thumbnail_id: true,
  accepts_mercadopago: true,
  shipping: {
    store_pick_up: false,
    free_shipping: true,
    logistic_type: 'fulfillment',
    mode: 'me2',
    tags: [
      'fulfillment',
      'self_service_out',
      'mandatory_free_shipping',
      'self_service_available',
    ],
    benefits: null,
    promise: null,
    shipping_score: -1,
  },
  stop_time: '2043-05-25T04:00:00.000Z',
  seller: {
    id: 130090710,
    nickname: 'JAQUIM SHOP',
  },
  attributes: [
    {
      id: 'BRAND',
      name: 'Marca',
      value_id: '345469',
      value_name: 'Taramps',
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Outros',
      value_struct: null,
      values: [
        {
          id: '345469',
          name: 'Taramps',
          struct: null,
          source: 1,
        },
      ],
      source: 1,
      value_type: 'string',
    },
    {
      id: 'COLOR',
      name: 'Cor',
      value_id: '34882144',
      value_name: 'Branco',
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Outros',
      value_struct: null,
      values: [
        {
          id: '34882144',
          name: 'Branco',
          struct: null,
          source: 4709228965570453,
        },
      ],
      source: 4709228965570453,
      value_type: 'string',
    },
    {
      id: 'GTIN',
      name: 'Código universal de produto',
      value_id: null,
      value_name: '7898556840682',
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Outros',
      value_struct: null,
      values: [
        {
          id: null,
          name: '7898556840682',
          struct: null,
          source: 385122562515662,
        },
      ],
      source: 385122562515662,
      value_type: 'string',
    },
    {
      id: 'ITEM_CONDITION',
      name: 'Condição do item',
      value_id: '2230284',
      value_name: 'Novo',
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Outros',
      value_struct: null,
      values: [
        {
          id: '2230284',
          name: 'Novo',
          struct: null,
          source: 4333789534002961,
        },
      ],
      source: 4333789534002961,
      value_type: 'list',
    },
    {
      id: 'LINE',
      name: 'Linha',
      value_id: '768412',
      value_name: 'TS',
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Outros',
      value_struct: null,
      values: [
        {
          id: '768412',
          name: 'TS',
          struct: null,
          source: 1,
        },
      ],
      source: 1,
      value_type: 'string',
    },
    {
      id: 'MODEL',
      name: 'Modelo',
      value_id: '83431',
      value_name: 'TS400',
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Outros',
      value_struct: null,
      values: [
        {
          id: '83431',
          name: 'TS400',
          struct: null,
          source: 1,
        },
      ],
      source: 1,
      value_type: 'string',
    },
    {
      id: 'PACKAGE_LENGTH',
      name: 'Comprimento da embalagem',
      value_id: null,
      value_name: '14.5 cm',
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Outros',
      value_struct: {
        number: 14.5,
        unit: 'cm',
      },
      values: [
        {
          id: null,
          name: '14.5 cm',
          struct: {
            number: 14.5,
            unit: 'cm',
          },
          source: 4333789534002961,
        },
      ],
      source: 4333789534002961,
      value_type: 'number_unit',
    },
    {
      id: 'PACKAGE_WEIGHT',
      name: 'Peso da embalagem',
      value_id: null,
      value_name: '640 g',
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Outros',
      value_struct: {
        number: 640,
        unit: 'g',
      },
      values: [
        {
          id: null,
          name: '640 g',
          struct: {
            number: 640,
            unit: 'g',
          },
          source: 4333789534002961,
        },
      ],
      source: 4333789534002961,
      value_type: 'number_unit',
    },
    {
      id: 'VEHICLE_AMPLIFIER_LENGTH',
      name: 'Comprimento do amplificador',
      value_id: '34671636',
      value_name: '12.1 cm',
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Outros',
      value_struct: {
        number: 12.1,
        unit: 'cm',
      },
      values: [
        {
          id: '34671636',
          name: '12.1 cm',
          struct: {
            number: 12.1,
            unit: 'cm',
          },
          source: 4709228965570453,
        },
      ],
      source: 4709228965570453,
      value_type: 'number_unit',
    },
    {
      id: 'VEHICLE_AMPLIFIER_WEIGHT',
      name: 'Peso do amplificador',
      value_id: '21261380',
      value_name: '600 g',
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Outros',
      value_struct: {
        number: 600,
        unit: 'g',
      },
      values: [
        {
          id: '21261380',
          name: '600 g',
          struct: {
            number: 600,
            unit: 'g',
          },
          source: 4709228965570453,
        },
      ],
      source: 4709228965570453,
      value_type: 'number_unit',
    },
  ],
  installments: {
    quantity: 12,
    amount: 18.26,
    rate: 16.64,
    currency_id: 'BRL',
  },
  winner_item_id: null,
  catalog_listing: true,
  discounts: null,
  promotions: [],
  inventory_id: 'LBTB00935',
}

export const itemsRepositoryFixture: ItemsRepository = {
  site_id: 'MLB',
  country_default_time_zone: 'GMT-03:00',
  query: 'Moto',
  paging: {
    total: 8694013,
    primary_results: 1000,
    offset: 0,
    limit: 50,
  },
  results: [
    {
      id: 'MLB3333537967',
      title:
        'Modulo Taramps Ts400x4 400w 2 Ohms Rca Ts 400x4 4 Canais 100w Amplificador 400rms T400 4 Canais Potencia Taramps Som Para Carro Moto Caminhonete Automotivo',
      condition: 'new',
      thumbnail_id: '896874-MLU74917793798_032024',
      catalog_product_id: 'MLB21941637',
      listing_type_id: 'gold_special',
      sanitized_title:
        'modulo-taramps-ts400x4-400w-2-ohms-rca-ts-400x4-4-canais-100w-amplificador-400rms-t400-4-canais-potencia-taramps-som-para-carro-moto-caminhonete-automotivo',
      permalink:
        'https://www.mercadolivre.com.br/modulo-taramps-ts400x4-400w-2-ohms-rca-ts-400x4-4-canais-100w-amplificador-400rms-t400-4-canais-potencia-taramps-som-para-carro-moto-caminhonete-automotivo/p/MLB21941637',
      buying_mode: 'buy_it_now',
      site_id: 'MLB',
      category_id: 'SOME_CATEGORY_ID',
      domain_id: 'MLB-VEHICLE_AMPLIFIERS',
      thumbnail:
        'http://http2.mlstatic.com/D_896874-MLU74917793798_032024-I.jpg',
      currency_id: 'BRL',
      order_backend: 1,
      price: 187.9,
      original_price: 221.06,
      sale_price: {
        price_id: '',
        amount: 187.9,
        conditions: {
          eligible: true,
          context_restrictions: ['channel_marketplace'],
          start_time: '2024-07-17T03:00:00Z',
          end_time: '2024-08-17T02:59:59Z',
        },
        currency_id: 'BRL',
        exchange_rate: null,
        payment_method_prices: [],
        payment_method_type: 'TMP',
        regular_amount: 221.06,
        type: 'promotion',
        metadata: {
          promotion_id: 'OFFER-MLB3333537967-10801931604',
          promotion_type: 'custom',
        },
      },
      available_quantity: 5000,
      official_store_id: 1329,
      official_store_name: 'Taramps',
      use_thumbnail_id: true,
      accepts_mercadopago: true,
      shipping: {
        store_pick_up: false,
        free_shipping: true,
        logistic_type: 'fulfillment',
        mode: 'me2',
        tags: [
          'fulfillment',
          'self_service_out',
          'mandatory_free_shipping',
          'self_service_available',
        ],
        benefits: null,
        promise: null,
        shipping_score: -1,
      },
      stop_time: '2043-05-25T04:00:00.000Z',
      seller: {
        id: 130090710,
        nickname: 'JAQUIM SHOP',
      },
      attributes: [
        {
          id: 'BRAND',
          name: 'Marca',
          value_id: '345469',
          value_name: 'Taramps',
          attribute_group_id: 'OTHERS',
          attribute_group_name: 'Outros',
          value_struct: null,
          values: [
            {
              id: '345469',
              name: 'Taramps',
              struct: null,
              source: 1,
            },
          ],
          source: 1,
          value_type: 'string',
        },
        {
          id: 'COLOR',
          name: 'Cor',
          value_id: '34882144',
          value_name: 'Branco',
          attribute_group_id: 'OTHERS',
          attribute_group_name: 'Outros',
          value_struct: null,
          values: [
            {
              id: '34882144',
              name: 'Branco',
              struct: null,
              source: 4709228965570453,
            },
          ],
          source: 4709228965570453,
          value_type: 'string',
        },
      ],
      installments: {
        quantity: 12,
        amount: 18.26,
        rate: 16.64,
        currency_id: 'BRL',
      },
      winner_item_id: null,
      catalog_listing: true,
      discounts: null,
      promotions: [],
      inventory_id: 'LBTB00935',
    },
    {
      id: 'MLB3370852551',
      title: 'Bomba De Ar Pedal Alta Pressão Pneu Moto Bicicleta Colchão',
      condition: 'new',
      thumbnail_id: '966289-MLB53287968748_012023',
      catalog_product_id: 'MLB22330024',
      listing_type_id: 'gold_pro',
      sanitized_title:
        'bomba-de-ar-pedal-alta-presso-pneu-moto-bicicleta-colcho',
      permalink:
        'https://www.mercadolivre.com.br/bomba-de-ar-pedal-alta-presso-pneu-moto-bicicleta-colcho/p/MLB22330024',
      buying_mode: 'buy_it_now',
      site_id: 'MLB',
      category_id: 'SOME_CATEGORY_ID',
      domain_id: 'MLB-MANUAL_AND_FOOT_AIR_PUMPS',
      thumbnail:
        'http://http2.mlstatic.com/D_966289-MLB53287968748_012023-I.jpg',
      currency_id: 'BRL',
      order_backend: 2,
      price: 29.25,
      original_price: 41.79,
      sale_price: {
        price_id: '',
        amount: 29.25,
        conditions: {
          eligible: true,
          context_restrictions: ['channel_marketplace'],
          start_time: '2024-08-07T03:00:00Z',
          end_time: '2024-09-01T02:59:59Z',
        },
        currency_id: 'BRL',
        exchange_rate: null,
        payment_method_prices: [],
        payment_method_type: 'TMP',
        regular_amount: 41.79,
        type: 'promotion',
        metadata: {
          promotion_id: 'OFFER-MLB3370852551-10797790559',
          promotion_type: 'custom',
        },
      },
      available_quantity: 500,
      official_store_id: null,
      use_thumbnail_id: true,
      accepts_mercadopago: true,
      shipping: {
        store_pick_up: false,
        free_shipping: false,
        logistic_type: 'fulfillment',
        mode: 'me2',
        tags: ['fulfillment', 'self_service_in'],
        benefits: null,
        promise: null,
        shipping_score: -1,
      },
      stop_time: '2044-08-02T12:50:58.000Z',
      seller: {
        id: 1352848633,
        nickname: 'JAQUIM SHOP',
      },
      attributes: [
        {
          id: 'BRAND',
          name: 'Marca',
          value_id: '2554654',
          value_name: 'B-Max',
          attribute_group_id: 'OTHERS',
          attribute_group_name: 'Outros',
          value_struct: null,
          values: [
            {
              id: '2554654',
              name: 'B-Max',
              struct: null,
              source: 1,
            },
          ],
          source: 1,
          value_type: 'string',
        },
        {
          id: 'COLOR',
          name: 'Cor',
          value_id: '52028',
          value_name: 'Azul',
          attribute_group_id: 'OTHERS',
          attribute_group_name: 'Outros',
          value_struct: null,
          values: [
            {
              id: '52028',
              name: 'Azul',
              struct: null,
              source: 1,
            },
          ],
          source: 1,
          value_type: 'string',
        },
      ],
      installments: {
        quantity: 2,
        amount: 14.62,
        rate: 0,
        currency_id: 'BRL',
      },
      winner_item_id: null,
      catalog_listing: true,
      discounts: null,
      promotions: [],
      differential_pricing: {
        id: 35713359,
      },
      inventory_id: 'FXAI82820',
    },
  ],
  sort: {
    id: 'relevance',
    name: 'Mais relevantes',
  },
  available_sorts: [
    {
      id: 'price_asc',
      name: 'Menor preço',
    },
    {
      id: 'price_desc',
      name: 'Maior preço',
    },
  ],
  filters: [],
  available_filters: [
    {
      id: 'discount',
      name: 'Descontos',
      type: 'number',
      values: [
        {
          id: '5-100',
          name: 'Mais de 5% OFF',
          results: 1724135,
        },
        {
          id: '10-100',
          name: 'Mais de 10% OFF',
          results: 1153064,
        },
      ],
    },
    {
      id: 'category',
      name: 'Categorias',
      type: 'text',
      values: [
        {
          id: 'MLB1276',
          name: 'Esportes e Fitness',
          results: 925260,
        },
        {
          id: 'MLB1051',
          name: 'Celulares e Telefones',
          results: 1238881,
        },
      ],
    },
  ],
  pdp_tracking: {
    group: false,
    product_info: [
      {
        id: 'MLB21941637',
        score: 1,
        status: 'shown',
      },
      {
        id: 'MLB22330024',
        score: 1,
        status: 'shown',
      },
    ],
  },
  user_context: null,
}
