import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AnimateWrapper, Navigation } from ".";
import { styled } from "styled-components";

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
        <Container></Container>
      </footer>
    </>
  );
};

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
`;

const MainContainer = styled(Container)(({ theme }) => ({
  display: "grid",
  gap: theme.px.x4,
}));

const Header = styled.header(({ theme }) => ({
  marginBottom: theme.px.x2 + "px",
}));
