'use client'
import { ArrowRight, ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import styles from './styles.module.scss'

interface PaginationProps {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}

export const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage)
    }
  }

  const isPreviousDisabled = currentPage === 1
  const isNextDisabled = currentPage === totalPages

  const previousIconFill = isPreviousDisabled ? '#FEF5EF' : '#9D5C63'
  const nextIconFill = isNextDisabled ? '#FEF5EF' : '#9D5C63'

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        aria-label='previous'
        className={`${styles.pagination__button} ${
          isPreviousDisabled ? styles.disabled : ''
        }`}
        disabled={isPreviousDisabled}
      >
        <ArrowLeft size={32} fill={previousIconFill} />
      </button>

      <div
        aria-label={`${currentPage} of ${totalPages}`}
        className={styles.pagination__current}
      >
        {currentPage}
      </div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        aria-label='next'
        className={`${styles.pagination__button} ${
          isNextDisabled ? styles.disabled : ''
        }`}
        disabled={isNextDisabled}
      >
        <ArrowRight size={32} fill={nextIconFill} />
      </button>
    </div>
  )
}