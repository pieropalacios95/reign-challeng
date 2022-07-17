import { render } from '@testing-library/react'
import Header from '../components/Header'

test('Testing Header render component', () => {
    const component = render(<Header />)
    console.log(component)
})

test('Testing Header text component',()=>{
    const component = render(<Header />)
    component.getByText('HACKER NEWS')
})