import { render } from '@testing-library/react'
import Card from '../components/Card'

test('Testing Card render component', () => {
    const card ={
        author:'Piero Palacios',
        story_title:'Test',
        story_url:'https://www.prueba.com'
    }

    const component = render(<Card author={card.author} story_title={card.story_title} story_url={card.story_url} />)
    console.log(component)
})