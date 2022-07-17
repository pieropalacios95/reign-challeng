import '../styles/Pagination.css'

interface Props {
    currentPage: number,
    totalPages: number,
    handlePreviousPage: (page: number) => void,
    handleNextPage: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, handlePreviousPage, handleNextPage }: Props) {
    return (
        <div className='pagination'>
            <button className='back-button' onClick={() => handlePreviousPage(currentPage)} disabled={currentPage === 1}>
                BACK
            </button>
            <span className='text-pagination'>
                Page {currentPage} of {totalPages}
            </span>
            <button className='next-button' onClick={() => handleNextPage(currentPage)} disabled={currentPage === totalPages}>
                NEXT
            </button>
        </div>
    )
}