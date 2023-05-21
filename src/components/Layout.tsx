import { FC, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'

import { AnimateWrapper, Navigation } from '.'
import { TextH2 } from 'kit/Text'

export const Layout: FC = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation />
        </Container>
      </Header>
      <main>
        <AnimateWrapper>
          <MainContainer>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </MainContainer>
        </AnimateWrapper>
      </main>
      <footer>
        <FooterContainer>
          <TextH2>
            My name is Max, nice to meet you,
            <Link href="https://www.linkedin.com/in/maxim-sidorenko/" target="_blank">
              click
            </Link>
          </TextH2>
        </FooterContainer>
      </footer>
    </>
  )
}

const Container = styled.div`
  margin: auto;
  @media screen and (max-width: 767px) {
    width: 320px;
    padding: 0px 20px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0px 16px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`

const MainContainer = styled(Container)(({ theme }) => ({
  display: 'grid',
  gap: theme.px.x4,
}))

const FooterContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.px.x3,
}))

const Header = styled.header(({ theme }) => ({
  padding: theme.px.x2,
  marginBottom: theme.px.x1,
}))

const Link = styled.a(({ theme }) => ({
  color: theme.color.accent,

  '&:hover': {
    color: theme.color.mainText,
  },
}))
