import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import { ProductList } from '@/presentation/templates'

const productListData = {
  query: 'sapato',
  categories: ['Calçados, Roupas e Bolsas', 'Calçados', 'Tênis'],
  items: [
    {
      id: 'MLB2678327656',
      title: 'Tênis Masculino Leve Esportivo Sapato Confortável Promoção',
      categories: ['Calçados, Roupas e Bolsas', 'Calçados', 'Tênis'],
      price: {
        currency: 'BRL',
        amount: 69,
        decimals: 99,
      },
      picture_url: '/test-file-stub',
      free_shipping: false,
      seller: 'SOME SELLER 1',
      permalink: '/some-link',
    },
    {
      id: 'MLB2641887751',
      title: 'Kit Sapato Social Masculino Com Carteira Cinto E Relógio',
      categories: ['Calçados, Roupas e Bolsas', 'Calçados', 'Tênis'],
      price: {
        currency: 'BRL',
        amount: 99,
        decimals: 90,
      },
      picture_url: '/test-file-stub',
      free_shipping: true,
      seller: 'SOME SELLER 2',
      permalink: '/some-link',
    },
  ],
}

describe('presentation/templates/ProductList', () => {
  it('should renders without a11y violations', async () => {
    const { container } = render(<ProductList {...productListData} />)

    await waitFor(async () => {
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should renders correctly breadcrumbs', () => {
    const { categories } = productListData
    render(<ProductList {...productListData} />)

    expect(screen.getByLabelText('Breadcrumbs')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: categories[0] })).toHaveAttribute(
      'href',
      `/items?search=${categories[0]}`,
    )
    expect(screen.getByRole('link', { name: categories[1] })).toHaveAttribute(
      'href',
      `/items?search=${categories[1]}`,
    )
  })

  it('should renders correctly images', () => {
    const { items } = productListData
    render(<ProductList {...productListData} />)

    items.forEach(({ title, picture_url }) => {
      expect(screen.getByAltText(title)).toHaveAttribute(
        'src',
        expect.stringContaining(picture_url.replace('/', '')),
      )
    })
  })

  it('should renders correctly texts', () => {
    const { items } = productListData
    render(<ProductList {...productListData} />)

    items.forEach(({ id, title, price, seller }) => {
      expect(screen.getByText(`R$ ${price.amount}`)).toBeInTheDocument()
      expect(
        screen.getByRole('heading', { name: title, level: 2 }),
      ).toBeInTheDocument()
      expect(screen.getByRole('link', { name: title })).toHaveAttribute(
        'href',
        `/item/${id}`,
      )
      expect(screen.getByText(seller)).toBeInTheDocument()
    })
  })

  it('should message when no products are provided', () => {
    const { query } = productListData
    render(<ProductList {...productListData} items={[]} />)

    expect(
      screen.getByText(`Nenhum resultado encontrado para o termo: ${query}`),
    ).toBeInTheDocument()
  })
})
