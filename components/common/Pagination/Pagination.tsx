import { StyledPagination, StyledPaginationItem } from './Pagination.style'
import FirstPageIcon from '@mui/icons-material/FirstPage'
import LastPageIcon from '@mui/icons-material/LastPage'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'

type T_PaginationProps = {
  total?: number
  itemsPerPage?: number
  currentPage?: number
  onChange?: (page: number) => void
}

function Pagination({ total = 100, itemsPerPage = 10, currentPage = 1, onChange = () => {} }: T_PaginationProps) {
  const totalPages = Math.ceil(total / itemsPerPage)

  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      onChange(page)
    }
  }

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <StyledPagination className="common-pagination">
      <StyledPaginationItem>
        <button onClick={() => handlePageChange(1)} className="page-btn first" type="button">
          <FirstPageIcon fontSize="small" />
        </button>
      </StyledPaginationItem>

      <StyledPaginationItem>
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          className="page-btn before"
          type="button"
        >
          <NavigateBeforeIcon fontSize="small" />
        </button>
      </StyledPaginationItem>

      {pageNumbers.map((number) => (
        <StyledPaginationItem key={number} className={currentPage === number ? 'active' : ''}>
          <button className="page-btn current-page-btn" type="button">
            {number}
          </button>
        </StyledPaginationItem>
      ))}

      <StyledPaginationItem>
        <button
          onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
          className="page-btn next"
          type="button"
        >
          <NavigateNextIcon fontSize="small" />
        </button>
      </StyledPaginationItem>

      <StyledPaginationItem>
        <button onClick={() => handlePageChange(totalPages)} className="page-btn last" type="button">
          <LastPageIcon fontSize="small" />
        </button>
      </StyledPaginationItem>
    </StyledPagination>
  )
}

export default Pagination
