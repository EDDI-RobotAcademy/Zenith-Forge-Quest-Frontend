import { render, screen } from '@testing-library/react'
import Page from '../app/page'

describe('<Page />', () => {
  it('test', () => {
    const { container } = render(<Page />)

    const home = screen.getByText('테스트')

    expect(home).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
