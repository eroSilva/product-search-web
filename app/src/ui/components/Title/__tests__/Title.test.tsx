import { render, screen } from '@testing-library/react'
import { Title } from '@/ui/components/Title'

describe('Title', () => {
  it('should render the title', () => {
    render(<Title>Hello World</Title>)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
})
