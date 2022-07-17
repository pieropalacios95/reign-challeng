interface Props {
    currentPage: number,
    totalPages: number,
    handlePreviousPage: (page: number) => void,
    handleNextPage: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, handlePreviousPage, handleNextPage }: Props) {
    return (
        <div>
            <button onClick={() => handlePreviousPage(currentPage)} disabled={currentPage === 1}>
                BACK
            </button>
            <span>
                Page {currentPage} of {totalPages}
            </span>
            <button onClick={() => handleNextPage(currentPage)} disabled={currentPage === totalPages}>
                NEXT
            </button>
        </div>
    )
}