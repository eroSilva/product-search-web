import { getItem, getItems } from '@/application/services'

const globalResources = () => {
  const originalFetch = globalThis.fetch

  const mock = () => (global.fetch = jest.fn() as jest.Mock)
  const restore = () => (globalThis.fetch = originalFetch)

  return { mock, restore }
}

describe('application/services/itemService', () => {
  afterAll(() => globalResources().restore())

  it('should call getItem and return some data when res.ok is truthy', async () => {
    globalResources()
      .mock()
      .mockResolvedValueOnce({ ok: true, json: async () => ({}) })

    const response = await getItem('SOME_ITEM_ID')

    expect(response).toStrictEqual({})
    expect(globalThis.fetch).toHaveBeenCalledWith(
      `${process.env.API_ENDPOINT}/item/SOME_ITEM_ID`,
      { next: { revalidate: 1800 } },
    )
  })

  it('should call getItem and return some payload data with res.ok when res.ok is falsy', async () => {
    globalResources().mock().mockResolvedValueOnce({ ok: false, payload: {} })

    const response = await getItem('SOME_ITEM_ID')

    expect(response).toStrictEqual({ ok: false, payload: {} })
    expect(globalThis.fetch).toHaveBeenCalledWith(
      `${process.env.API_ENDPOINT}/item/SOME_ITEM_ID`,
      { next: { revalidate: 1800 } },
    )
  })

  it('should call getItems and return some data when res.ok is truthy', async () => {
    globalResources()
      .mock()
      .mockResolvedValueOnce({ ok: true, json: async () => [] })

    const response = await getItems('SOME_TERM')

    expect(response).toStrictEqual([])
    expect(globalThis.fetch).toHaveBeenCalledWith(
      `${process.env.API_ENDPOINT}/items?search=SOME_TERM`,
      { next: { revalidate: 1800 } },
    )
  })

  it('should call getItems and return some payload data with res.ok when res.ok is falsy', async () => {
    globalResources().mock().mockResolvedValueOnce({ ok: false, payload: {} })

    const response = await getItems('SOME_TERM')

    expect(response).toStrictEqual({ ok: false, payload: {} })
    expect(globalThis.fetch).toHaveBeenCalledWith(
      `${process.env.API_ENDPOINT}/items?search=SOME_TERM`,
      { next: { revalidate: 1800 } },
    )
  })
})
