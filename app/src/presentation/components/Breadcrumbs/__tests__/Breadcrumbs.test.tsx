import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Breadcrumbs } from '@/presentation/components'

describe('presentation/components/Breadcrumbs', () => {
  it('should renders without a11y violations', async () => {
    const { container } = render(<Breadcrumbs items={['item 1', 'item 2']} />)

    await waitFor(async () => {
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should renders a nav with aria-label Breadbrums', () => {
    render(<Breadcrumbs />)
    expect(screen.getByLabelText('Breadcrumbs')).toBeInTheDocument()
  })

  it('should renders a list of links', () => {
    render(<Breadcrumbs items={['item 1', 'item 2']} />)

    expect(screen.getByRole('link', { name: 'item 1' })).toHaveAttribute(
      'href',
      '/items?search=item 1',
    )
    expect(screen.getByRole('link', { name: 'item 2' })).toHaveAttribute(
      'href',
      '/items?search=item 2',
    )
  })
})
