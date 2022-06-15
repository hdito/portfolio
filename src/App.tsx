import { styled } from "@linaria/react";
import { css } from "@linaria/core";

const globals = css`
  :global() {
    @font-face {
      font-family: Rubik;
      src: url(./src/Rubik-VariableFont_wght.ttf);
    }
    html,
    body {
      height: 100%;
    }
    body,
    p,
    h1 {
      margin: 0;
    }
    h1 {
      color: hsl(0, 0%, 0%);
    }
    :root {
      font-family: Rubik, Arial, sans-serif;
      color: hsl(0, 0%, 20%);
    }
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  grid-column: 2/5;
`;
const ProjectCard = styled.div`
  padding: 3rem 2rem;
  background: hsl(0, 0%, 90%);
  border-radius: 1rem;
  text-align: center;
  transition: all 0.2s;
  cursor: default;
  &:hover {
    background: hsl(166, 100%, 12%);
    color: white;
  }
`;
const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto 1fr 1fr;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
  align-items: center;
  gap: 1rem;
`;
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 50ch;
  grid-column: 3/4;
  margin-bottom: 2rem;
`;
const MainContainer = styled.main`
  margin-bottom: auto;
  max-width: 80ch;
  grid-column:3/4
  display: flex;
  flex-direction: column;
`;
const Contacts = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
const CLink = styled.a`
  text-decoration: none;
  color: hsl(166, 100%, 12%);
  font-size: 1.125rem;
  &:hover {
    text-decoration: underline;
  }
`;
function App() {
  return (
    <AppContainer>
      <HeaderContainer>
        <h1>Name Surname</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi et sequi
          soluta voluptates, iste dolor suscipit voluptas. Nihil nisi quisquam
          ullam eum, ea a, repellendus, quos eveniet adipisci quidem eius!
        </p>
        <Contacts>
          <CLink href="">@oh</CLink>
          <CLink href="">email@gmail.com</CLink>
        </Contacts>
      </HeaderContainer>
      <MainContainer>
        <h1>My projects</h1>
      </MainContainer>
      <Grid>
        <ProjectCard>Project 1</ProjectCard>
        <ProjectCard>Project 2</ProjectCard>
        <ProjectCard>Project 3</ProjectCard>
        <ProjectCard>Project 4</ProjectCard>
        <ProjectCard>Project 5</ProjectCard>
      </Grid>
    </AppContainer>
  );
}

export default App;
