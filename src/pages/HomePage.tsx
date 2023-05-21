import { styled } from 'styled-components'

import { Tweet } from 'components/Tweet'
import { useGetUsersQuery } from 'store/users'

export const HomePage = () => {
  const { data: usersData } = useGetUsersQuery()
  const filteredData = usersData?.filter((user) => user.follow)

  return (
    <div>
      <ContentWrapper>
        {filteredData?.map((tweet) => {
          return <Tweet key={tweet.id} tweet={tweet} />
        })}
      </ContentWrapper>
    </div>
  )
}

const ContentWrapper = styled.div(({ theme }) => ({
  display: 'grid',
  gap: theme.px.x2,
  height: '80vh',
  overflow: 'auto',
}))
