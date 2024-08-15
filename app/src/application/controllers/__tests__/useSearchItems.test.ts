import { renderHook, act } from '@testing-library/react'
import { useSearchItems } from '@/application/controllers/useSearchItems'

const globalResources = () => {
  const originalLocation = globalThis.location
  const originalFormData = globalThis.FormData

  const mock = (term: string) => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: {
        search: `?search=${term}`,
      },
    })

    globalThis.FormData = jest.fn(() => ({
      get: jest.fn(() => term),
    })) as unknown as typeof FormData
  }

  const restore = () => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: originalLocation,
    })

    globalThis.FormData = originalFormData
  }

  return { mock, restore }
}

describe('application/controllers/useSearchItems', () => {
  afterAll(() => globalResources().restore())

  it('should return default resources', () => {
    const { result } = renderHook(() => useSearchItems())

    expect(result.current).toStrictEqual({
      handleSearchSubmit: expect.any(Function),
      isSearching: false,
      search: '',
    })
  })

  it('should push a new route with search form data when handleSearchSubmit is called', () => {
    globalResources().mock('SOME_SEARCH')

    const { result } = renderHook(() => useSearchItems())

    act(() =>
      result.current.handleSearchSubmit({
        preventDefault: jest.fn(),
      } as unknown as React.FormEvent<HTMLFormElement>),
    )

    expect(globalThis.__mocks__.useRouter.push).toHaveBeenCalledWith(
      '/items?search=SOME_SEARCH',
    )
  })
})
