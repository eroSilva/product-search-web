import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import { ButtonAnchor } from '@/presentation/components'

describe('presentation/components/ButtonAnchor', () => {
  it('should renders without a11y violations', async () => {
    const { container } = render(
      <ButtonAnchor href="/home">label</ButtonAnchor>,
    )

    await waitFor(async () => {
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should renders a native anchor', () => {
    render(<ButtonAnchor href="/home">label</ButtonAnchor>)

    expect(screen.getByRole('link', { name: 'label' })).toHaveAttribute(
      'href',
      '/home',
    )
  })
})
