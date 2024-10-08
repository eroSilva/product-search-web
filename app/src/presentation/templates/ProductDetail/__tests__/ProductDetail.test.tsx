import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import { ProductDetail } from '@/presentation/templates'

const productDetailData = {
  title: 'Tênis Vans Ultrarange Exo Color Preto - Adulto 39 Br',
  categories: ['Calçados, Roupas e Bolsas', 'Calçados', 'Tênis'],
  price: { currency: 'BRL', amount: 400, decimals: null },
  picture_url: '/test-file-stub',
  condition: 'new',
  available_quantity: 100,
  seller: null,
  attributes: [
    { name: 'Tipos de ajuste', value: 'Cadarços' },
    { name: 'Idade', value: 'Adultos' },
  ],
  permalink: '/some-link',
}

describe('presentation/templates/ProductDetail', () => {
  it('should renders without a11y violations', async () => {
    const { container } = render(<ProductDetail {...productDetailData} />)

    await waitFor(async () => {
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should renders correctly breadcrumbs', () => {
    const { categories } = productDetailData
    render(<ProductDetail {...productDetailData} />)

    expect(screen.getByLabelText('Breadcrumbs')).toBeInTheDocument()
    categories.forEach(category => {
      expect(screen.getByRole('link', { name: category })).toHaveAttribute(
        'href',
        `/items?search=${category}`,
      )
    })
  })

  it('should renders correctly image', () => {
    const { title, picture_url } = productDetailData
    render(<ProductDetail {...productDetailData} />)

    expect(screen.getByAltText(title)).toHaveAttribute(
      'src',
      expect.stringContaining(picture_url.replace('/', '')),
    )
  })

  it('should renders correctly texts', () => {
    const { title, price, available_quantity } = productDetailData
    render(<ProductDetail {...productDetailData} />)

    expect(
      screen.getByText(`Novo - ${available_quantity} disponíveis`),
    ).toBeInTheDocument()
    expect(screen.getByText(`R$ ${price.amount}`)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: title, level: 1 }),
    ).toBeInTheDocument()
  })

  it('should renders correctly buy call to action', () => {
    const { permalink } = productDetailData
    render(<ProductDetail {...productDetailData} />)

    expect(screen.getByRole('link', { name: 'Comprar' })).toHaveAttribute(
      'href',
      permalink,
    )
  })

  it('should renders correctly attribute table', () => {
    const { attributes } = productDetailData
    render(<ProductDetail {...productDetailData} />)

    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(
      screen.getByRole('columnheader', { name: 'Atributo' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('columnheader', { name: 'Valor' }),
    ).toBeInTheDocument()
    attributes.forEach(({ name, value }) => {
      expect(screen.getByRole('cell', { name })).toBeInTheDocument()
      expect(screen.getByRole('cell', { name: value })).toBeInTheDocument()
    })
  })
})
