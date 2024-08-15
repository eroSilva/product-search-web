import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { SearchBar } from '@/presentation/components'
import * as useSearchItemsModule from '@/application/controllers/useSearchItems'

jest.mock('@/application/controllers/useSearchItems', () => ({
  __esModule: true,
  ...jest.requireActual('@/application/controllers/useSearchItems'),
}))

describe('presentation/components/SearchBar', () => {
  afterEach(() => jest.restoreAllMocks())

  it('should renders without a11y violations', async () => {
    const { container } = render(<SearchBar />)

    await waitFor(async () => {
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  it('should render a searchbox and submit button', () => {
    render(<SearchBar />)

    expect(
      screen.getByRole('searchbox', { name: 'Campo de busca' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Procurar' })).toBeInTheDocument()
  })

  it('should have focus on searchbox when mounted', async () => {
    render(<SearchBar />)

    expect(
      screen.getByRole('searchbox', { name: 'Campo de busca' }),
    ).toHaveFocus()
  })

  it('should push a route when user type something in searchbox and click in the submit button', async () => {
    render(<SearchBar />)

    const user = userEvent.setup()
    const searchbox = screen.getByRole('searchbox', { name: 'Campo de busca' })
    const button = screen.getByRole('button', { name: 'Procurar' })

    await user.keyboard('something')
    expect(searchbox).toHaveValue('something')
    expect(searchbox).toHaveAttribute('aria-busy', 'false')
    expect(button).toHaveAttribute('aria-busy', 'false')

    await user.click(button)
    expect(globalThis.__mocks__.useRouter.push).toHaveBeenCalledWith(
      '/items?search=something',
    )
  })

  it('should block searchbox and button when isSearching is true', async () => {
    jest.spyOn(useSearchItemsModule, 'useSearchItems').mockReturnValue({
      search: '',
      handleSearchSubmit: jest.fn(),
      isSearching: true,
    })

    render(<SearchBar />)

    const searchbox = screen.getByRole('searchbox', { name: 'Campo de busca' })
    const button = screen.getByRole('button', { name: 'Procurar' })

    expect(searchbox).not.toHaveFocus()
    expect(searchbox).toBeDisabled()
    expect(button).toBeDisabled()
    expect(searchbox).toHaveAttribute('aria-busy', 'true')
    expect(button).toHaveAttribute('aria-busy', 'true')
  })
})
