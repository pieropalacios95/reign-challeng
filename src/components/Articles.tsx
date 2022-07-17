import React from 'react'
import Card from './Card'
import Pagination from './Pagination'
import '../styles/Articles.css'
import { getAllEntries } from '../services/data'

export default function Articles() {

    const getInitialState = () => {
        const value = 'reactjs'
        return value;
    }

    const [data, setData] = React.useState([{
        author: '',
        story_title: '',
        story_url: ''
    }])
    const [value, setValue] = React.useState(getInitialState)
    const [page, setPage] = React.useState(1)
    const [totalPages, setTotalPages] = React.useState(10)

    const handleChange = (e: { target: { value: string } }) => {
        setValue(e.target.value)
        setPage(1)
    }

    const handlePreviousPage = (prevPage: number) => {
        setPage((prevPage) => prevPage - 1)
    }

    const handleNextPage = (nextPage: number) => {
        setPage((nextPage) => nextPage + 1)
    }

    React.useEffect(() => {
        getAllEntries(value, page).then((res) => {
            setData(res.data.hits)
            setTotalPages(res.data.nbPages)
        })
    }, [value, page])

    return (
        <div className='container-article'>
            <div className='first-body'>
                <button className='button-all'>All</button>
                <button className='button-fav'>My faves</button>
            </div>
            <div className='second-body'>
                <select className='select-query' value={value} onChange={handleChange} placeholder='Select your news'>
                    <option value="angular">Angular</option>
                    <option value="reactjs">React.js</option>
                    <option value="vuejs">Vue.js</option>
                </select>
            </div>
            <div className='third-body'>
                {data.map((res, index) => (
                    res.story_url !== null ? <Card key={index} author={res.author} story_title={res.story_title} story_url={res.story_url} /> : ''
                ))}
            </div>
            <div className="footer">
                <Pagination totalPages={totalPages} currentPage={page} handlePreviousPage={handlePreviousPage} handleNextPage={handleNextPage} />
            </div>
        </div>
    )
}