import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Error } from '@/presentation/templates'

describe('presentation/templates/Error', () => {
  it('should renders without a11y violations', async () => {
    const { container } = render(<Error title="some title" emoji="🧪" />)

    await waitFor(async () => {
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should renders some elements', () => {
    render(<Error title="some title" emoji="🧪" />)

    expect(screen.getByText('🧪')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'some title', level: 1 }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'Voltar para a página inicial' }),
    ).toHaveAttribute('href', '/')
  })
})
