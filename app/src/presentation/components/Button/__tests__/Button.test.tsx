import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Button } from '@/presentation/components'

describe('presentation/components/Button', () => {
  it('should renders without a11y violations', async () => {
    const { container } = render(<Button>label</Button>)

    await waitFor(async () => {
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should renders a native button', () => {
    render(<Button>label</Button>)

    expect(screen.getByRole('button', { name: 'label' })).toBeInTheDocument()
  })
})
