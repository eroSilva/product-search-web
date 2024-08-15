import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Image } from '@/presentation/components'

describe('presentation/components/Image', () => {
  it('should renders without a11y violations', async () => {
    const { container } = render(
      <Image src="/test-file-stub" alt="image alt" width={100} height={100} />,
    )

    await waitFor(async () => {
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should use fallback image when provided image has some error', () => {
    render(
      <Image src="/test-file-stub" alt="image alt" width={100} height={100} />,
    )
    const imgElement = screen.getByRole('img')

    fireEvent.error(imgElement)

    expect(imgElement).toHaveAttribute(
      'src',
      expect.stringContaining('no-image-180.jpg'),
    )
  })
})
