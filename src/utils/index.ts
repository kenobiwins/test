import { IUser } from 'types/users'

export const recognizeInfoField = (fieldName: string): string => {
  const recognizingObject: { [key: string]: string } = {
    followers: 'followers',
    tweets: 'tweets',
  }

  return recognizingObject[fieldName]
}

export const formatField = <T>(value: T, fieldName: string): string => {
  const regExp = /\s/g

  const formattedValue =
    typeof value === 'number' ? value.toLocaleString().replace(regExp, ',') : String(value)

  const recognizedField = recognizeInfoField(fieldName)

  return formattedValue + ' ' + (recognizedField ? recognizedField.toUpperCase() : '')
}

type handleToggleFollowType = Pick<IUser, 'id' | 'follow' | 'followers'>

export const handleToggleFollow = (
  { id, follow, followers }: handleToggleFollowType,
  callback: ({ follow, followers, id }: handleToggleFollowType) => void,
) => {
  const handleFollowers = follow ? followers - 1 : followers + 1

  callback({
    id,
    follow: !follow,
    followers: handleFollowers,
  })
}
