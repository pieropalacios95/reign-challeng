import { render } from '@testing-library/react'
import Articles from '../components/Articles'

test('Testing Articles render component', () => {
    const component = render(<Articles />)
    console.log(component)
})