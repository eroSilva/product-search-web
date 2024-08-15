const useRouter = {
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
}

jest.mock('next/navigation', () => {
  return {
    __esModule: true,
    useRouter: () => useRouter,
    useSearchParams: jest.fn().mockImplementation(() => {
      return new URLSearchParams(window.location.search)
    }),
  }
})

globalThis.__mocks__ = {
  ...globalThis.__mocks__,
  useRouter,
}
