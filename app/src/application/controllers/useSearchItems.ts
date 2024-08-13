import { useRouter, useSearchParams } from 'next/navigation'

export const useSearchItems = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    const search = formData.get('search') as string

    router.push(`/items?search=${search}`)
  }

  return { handleSearchSubmit, search }
}
