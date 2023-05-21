import { FC, createElement } from 'react'

import sprite from 'assets/sprite.svg'

export enum ICON_NAMES {
  'logo' = 'logo',
  'frame' = 'frame',
}

export type IconName = `${ICON_NAMES}`

export interface IconProps {
  name: IconName
  width: string
  height: string
}

export const Icon: FC<IconProps> = ({ name, width, height }) => {
  return (
    <svg height={height} width={width}>
      {createElement('use', {
        href: `${sprite}#${name}`,
        xlinkHref: `${sprite}#${name}`,
      })}
    </svg>
  )
}
