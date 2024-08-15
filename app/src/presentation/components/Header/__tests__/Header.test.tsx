import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Header } from '@/presentation/components'

describe('presentation/components/Header', () => {
  it('should renders without a11y violations', async () => {
    const { container } = render(<Header />)

    await waitFor(async () => {
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should renders some elements in Header', () => {
    render(<Header />)

    expect(screen.getByRole('link')).toHaveAttribute('href', '/')
    expect(screen.getByAltText('Logo Mercado Livre')).toBeInTheDocument()
    expect(screen.getByRole('searchbox')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
