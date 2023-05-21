import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

import { ROUTES } from 'routes'

const NavItems = [
  {
    name: 'Home',
    path: ROUTES.MAIN,
  },
  { name: 'Tweets', path: ROUTES.TWEETS },
]

export const Navigation = () => {
  return (
    <Nav>
      {NavItems.map(({ name, path }) => {
        return (
          <NavItem key={name} to={path}>
            {name}
          </NavItem>
        )
      })}
    </Nav>
  )
}

export const Header = styled.header(({ theme }) => ({
  borderBottom: `1px solid ${theme.color.accent}`,
  boxShadow: `0px 7px 12px 0px ${theme.color.accent}`,
}))

export const Nav = styled.nav(({ theme }) => ({
  display: 'flex',
  gap: theme.px.x3 + 'px',
}))

export const NavItem = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.color.mainText,
  padding: theme.px.x3 + 'px',
  fontSize: '1rem',
  border: `1px solid ${theme.color.mainText}`,
  borderRadius: theme.px.x3,
  transition: 'color 200ms linear , border-color 200ms linear',

  '&.active': {
    color: theme.color.accent,
    textDecoration: 'underline',
    borderColor: theme.color.accent,
  },

  '&:not(.active):hover, &:not(.active):focus': {
    color: theme.color.accent,
    borderColor: theme.color.accent,
  },
}))
