import { renderHook, act } from '@testing-library/react'
import { useFallbackImage } from '@/application/controllers/useFallbackImage'

describe('application/controllers/useFallbackImage', () => {
  it('should returns imgSrc and handleImageFallback resource', () => {
    const { result } = renderHook(() => useFallbackImage())

    expect(result.current).toStrictEqual({
      imgSrc: '/no-image-180.jpg',
      handleImageFallback: expect.any(Function),
    })
  })

  it('should returns provided imgSrc', () => {
    const { result } = renderHook(() =>
      useFallbackImage('/some-other-image.jpg'),
    )

    expect(result.current).toStrictEqual(
      expect.objectContaining({
        imgSrc: '/some-other-image.jpg',
      }),
    )
  })

  it('should update imgSrc when handleImageFallback is called', () => {
    const { result } = renderHook(() =>
      useFallbackImage('/some-other-image.jpg'),
    )

    expect(result.current).toStrictEqual(
      expect.objectContaining({ imgSrc: '/some-other-image.jpg' }),
    )

    act(() => result.current.handleImageFallback())

    expect(result.current).toStrictEqual(
      expect.objectContaining({ imgSrc: '/no-image-180.jpg' }),
    )
  })
})
