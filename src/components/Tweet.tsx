import { FC } from 'react'
import { styled } from 'styled-components'

import { CustomButton } from 'kit/Button'
import { Text, TextH2 } from 'kit/Text'
import { useToggleFollowMutation } from 'store/users'
import { IUser } from 'types/users'
import { handleToggleFollow } from 'utils/index'

type tweetProps = {
  tweet: IUser
}

export const Tweet: FC<tweetProps> = ({ tweet }) => {
  const { avatar, followers, follow, emoji, id, lastTweet, user: userName } = tweet
  const [updateFollow] = useToggleFollowMutation()

  return (
    <TweetStyled>
      <InfoGroup>
        <UserWrapper>
          <Avatar src={avatar} alt={userName + ' avatar'} />
          <TextH2>
            {userName} {emoji}
          </TextH2>
        </UserWrapper>
        <CustomButton
          title={'Unfollow'}
          onClick={() => handleToggleFollow({ id, follow, followers }, updateFollow)}
        />
      </InfoGroup>
      <Text>{lastTweet}</Text>
    </TweetStyled>
  )
}

const TweetStyled = styled.div(({ theme }) => ({
  display: 'grid',
  gap: theme.px.x2,
  background: theme.color.cardBg,
  padding: theme.px.x2,
  borderRadius: theme.px.x2,
}))

const Avatar = styled.img(({ theme }) => ({
  width: '50px',
  borderRadius: theme.px.x2,
}))

const InfoGroup = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const UserWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.px.x2,
}))
