import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Table } from '@/presentation/components'

describe('presentation/components/Table', () => {
  it('should renders without a11y violations', async () => {
    const { container } = render(
      <Table
        heading={['heading 1', 'heading 2']}
        data={[{ name: 'name', value: 'value' }]}
      />,
    )

    await waitFor(async () => {
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should renders a native table', () => {
    render(
      <Table
        heading={['heading 1', 'heading 2']}
        data={[{ name: 'data 1', value: 'data 2' }]}
      />,
    )

    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(
      screen.getByRole('columnheader', { name: 'heading 1' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('columnheader', { name: 'heading 2' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('cell', { name: 'data 1' })).toBeInTheDocument()
    expect(screen.getByRole('cell', { name: 'data 2' })).toBeInTheDocument()
  })
})
