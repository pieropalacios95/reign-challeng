import { render } from '@testing-library/react'
import Pagination from '../components/Pagination'

test('Testing Pagination render component', () => {
    const pagination = {
        currentPage: 0,
        totalPages: 10,
        handlePreviousPage: (param: number) => (param),
        handleNextPage: (param: number) => (param)
    }

    const component = render(<Pagination totalPages={pagination.totalPages} currentPage={pagination.currentPage} handlePreviousPage={pagination.handlePreviousPage} handleNextPage={pagination.handleNextPage} />)
    console.log(component)
})