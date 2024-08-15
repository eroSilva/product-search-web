import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Home } from '@/presentation/templates'

describe('presentation/templates/Home', () => {
  it('should renders without a11y violations', async () => {
    const { container } = render(
      <Home title="some title" description="some description" />,
    )

    await waitFor(async () => {
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should renders some elements', () => {
    render(<Home title="some title" description="some description" />)

    expect(
      screen.getByRole('heading', { name: 'some title', level: 1 }),
    ).toBeInTheDocument()
    expect(screen.getByText('some description')).toBeInTheDocument()
    expect(screen.getByText('🥸')).toBeInTheDocument()
  })
})
