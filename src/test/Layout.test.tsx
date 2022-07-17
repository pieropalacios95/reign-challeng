import { render } from '@testing-library/react'
import Layout from '../components/Layout'

test('Testing Layout render component', () => {
    const component = render(<Layout />)
    console.log(component)
})