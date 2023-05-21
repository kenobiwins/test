import { styled } from 'styled-components'

import { Tweet } from 'components/Tweet'
import { useGetUsersQuery } from 'store/users'
import { TextH2 } from 'kit/Text'
import { Link } from 'react-router-dom'
import { ROUTES } from 'routes'

export const HomePage = () => {
  const { data: usersData } = useGetUsersQuery()
  const filteredData = usersData?.filter((user) => user.follow)

  return (
    filteredData && (
      <div>
        <Title as={'h1'}>The feed</Title>
        <ContentWrapper>
          {filteredData?.length > 0 ? (
            filteredData?.map((tweet) => {
              return <Tweet key={tweet.id} tweet={tweet} />
            })
          ) : (
            <LinkText to={ROUTES.TWEETS}>start following someone</LinkText>
          )}
        </ContentWrapper>
      </div>
    )
  )
}

const ContentWrapper = styled.div(({ theme }) => ({
  display: 'grid',
  gap: theme.px.x2,
  height: '75vh',
  overflow: 'auto',
}))

const Title = styled(TextH2)(({ theme }) => ({
  marginBottom: theme.px.x2,
  textAlign: 'center',
  fontSize: '2rem',
}))

const LinkText = styled(Link)(({ theme }) => ({
  height: theme.px.x8,
  textAlign: 'center',
  color: theme.color.mainColor,
  transition: 'color 200ms linear',

  '&:hover': {
    color: theme.color.accent,
  },
}))
