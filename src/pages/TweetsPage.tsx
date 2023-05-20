import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReactPaginate from 'react-paginate'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { selectFilteredUsersData } from 'store/users'
import { changeFilterField, selectFilterValue } from 'store/filterSlice'

import { CustomButton } from 'kit/Button'
import { TweetCard } from 'components'
import { filterValues, filterValuesType } from 'types/filter'
import { Dropdown } from 'kit/Dropdown'
import { ROUTES } from 'routes'

export const TweetsPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const users = useSelector(selectFilteredUsersData)
  const currentFilterValue = useSelector(selectFilterValue)
  const [currentPage, setCurrentPage] = useState(0)
  const [pageCount, setPageCount] = useState(0)
  const itemsPerPage = 3

  useEffect(() => {
    if (users) {
      const pageCount = Math.ceil(users.length / itemsPerPage)
      setPageCount(pageCount)
    }
  }, [users])

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected)
  }

  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const displayedUsers = users?.slice(startIndex, endIndex)

  const handleGoBack = () => {
    navigate(ROUTES.MAIN)
  }

  const handleSetFilter = (value: filterValuesType) => {
    dispatch(changeFilterField(value))
  }

  return (
    <>
      <Instruments>
        <CustomButton onClick={handleGoBack} title="Go home" />
        <Dropdown
          title={currentFilterValue}
          options={Object.values(filterValues)}
          currentValue={currentFilterValue}
          submitOption={handleSetFilter}
        />
      </Instruments>
      <ContentWrapper>
        {displayedUsers?.map((user) => (
          <TweetCard key={user.id} user={user} />
        ))}
      </ContentWrapper>
      <Pagination
        pageCount={pageCount}
        onPageChange={handlePageClick}
        previousLabel="< previous"
        nextLabel="next >"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </>
  )
}

const ContentWrapper = styled.div({
  display: 'grid',
  gridAutoFlow: 'column',
})

const Instruments = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
})

const Pagination = styled(ReactPaginate)({
  display: 'flex',
  justifyContent: 'center',
})
