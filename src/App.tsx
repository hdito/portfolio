import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { nanoid } from "nanoid";
import { useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const globals = css`
  :global() {
    @font-face {
      font-family: Rubik;
      src: url(./src/Rubik-VariableFont_wght.ttf);
    }
    html,
    body,
    #root {
      height: 100%;
    }
    body,
    p,
    h1,
    h2 {
      margin: 0;
    }
    :root {
      --dark-gray: hsl(0, 0%, 20%);
      --black: hsl(0, 0%, 0%);
      --light-gray: hsl(0, 0%, 80%);
      --white: hsl(0, 0%, 100%);
      --blue: hsl(208, 100%, 38%);
      --light-blue: hsl(208, 100%, 70%);
      --dark-green: hsl(165, 100%, 20%);
      --light-green: hsl(150, 100%, 60%);
      font-family: Rubik, Arial, sans-serif;
    }
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 80ch;
  margin-bottom: 1rem;
`;
const ProjectButton = styled.button`
  border: none;
  text-decoration: none;
  color: ${(props) =>
    props.isDarkTheme
      ? "var(--dark-gray)"
      : props.isActive
      ? "var(--white)"
      : "var(--dark-gray)"};
  font-size: 1rem;
  padding: 0.5rem 1em;
  background: ${(props) =>
    !props.isActive
      ? "hsl(0, 0%, 90%)"
      : props.isDarkTheme
      ? "var(--light-green)"
      : "var(--dark-green)"};
  border-radius: 0.5rem;
  text-align: center;
  cursor: default;
  &:hover {
    outline: 0.15rem solid
      ${(props) =>
        props.isDarkTheme ? "var(--light-green)" : "var(--dark-green)"};
    outline-offset: 0.15rem;
  }
`;
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  height: 100%;
  padding: 1rem;
  color: ${(props) =>
    props.isDarkTheme ? "var(--light-gray)" : "var(--dark-gray)"};
  background: ${(props) =>
    props.isDarkTheme ? "var(--dark-gray)" : "var(--white)"};
  transition: all 0.2s;

  & h1,
  h2 {
    color: ${(props) => (props.isDarkTheme ? "var(--white)" : "var(--black)")};
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 50ch;
`;
const LinkBox = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  color: ${(props) =>
    props.isDarkTheme ? "var(--light-blue)" : "var(--blue)"};
`;
const CLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 1.25rem;
  &:hover {
    text-decoration: underline;
  }
`;
const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 80ch;
`;
interface IProjects {
  [key: string]: {
    title: string;
    stack: string;
    description: string;
    codeSource?: string;
    website?: string;
  };
}
const projects: IProjects = {
  [nanoid()]: {
    title: "Awesome project #1",
    stack: "React, TypeScript, Linaria",
    description:
      "Fdhjsgafgsajhdfg fhgjdsaf djghfsag gjsahdfg gjdhsgf gdh ghdsfgjhd ghdsafg",
    codeSource: "something.com",
  },
  [nanoid()]: {
    title: "Awesome project #2",
    stack: "React, TypeScript, Linaria",
    description:
      "Fdhjsgafgsajhdfg fhgjdsaf djghfsag gjsahdfg gjdhsgf gdh ghdsfgjhd ghdsafg",
    codeSource: "something.com",
  },
  [nanoid()]: {
    title: "The most memorable project",
    stack: "TypeScript",
    description:
      "Fdhjsgafgsajhdfg fhgjdsaf djghfsag gjsahdfg gjdhsgf gdh ghdsfgjhd ghdsafg",
    codeSource: "something.com",
  },
  [nanoid()]: {
    title: "Project 4",
    stack: "React, Linaria",
    description:
      "Fdhjsgafgsajhdfg fhgjdsaf djghfsag gjsahdfg gjdhsgf gdh ghdsfgjhd ghdsafg",
    codeSource: "something.com",
    website: "website.com",
  },
  [nanoid()]: {
    title: "Project 5",
    stack: "React, TypeScript",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione at possimus deserunt quae saepe libero, accusantium ut aliquam est ullam! Cupiditate, doloremque debitis iusto odit rerum nostrum commodi quae!",
    codeSource: "something.com",
  },
};
const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(
    window.matchMedia("prefers-color-scheme: dark").matches
  );
  const [selectedProject, setSelectedProject] = useState("");
  return (
    <AppContainer isDarkTheme={isDarkTheme}>
      <FlexWrapper>
        <HeaderContainer>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>Name Surname</h1>
            <ThemeSwitcher
              isDarkTheme={isDarkTheme}
              onThemeChange={(theme) => setIsDarkTheme(theme)}
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi et
            sequi soluta voluptates, iste dolor suscipit voluptas. Nihil nisi
            quisquam ullam eum, ea a, repellendus, quos eveniet adipisci quidem
            eius!
          </p>
          <LinkBox isDarkTheme={isDarkTheme}>
            <CLink href="">@oh</CLink>
            <CLink href="">email@gmail.com</CLink>
          </LinkBox>
          <h1>My projects</h1>
        </HeaderContainer>
      </FlexWrapper>
      <FlexWrapper></FlexWrapper>
      <FlexWrapper>
        <div>
          <ButtonContainer>
            {Object.keys(projects).map((key) => (
              <ProjectButton
                isDarkTheme={isDarkTheme}
                isActive={key === selectedProject}
                key={key}
                onClick={() => setSelectedProject(key)}
                href=""
              >
                {projects[key].title}
              </ProjectButton>
            ))}
          </ButtonContainer>
          {selectedProject !== "" && (
            <ProjectInfo>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.3rem",
                }}
              >
                <h2>Stack: </h2>
                <p>{projects[selectedProject].stack}</p>
              </div>
              <p>{projects[selectedProject].description}</p>
              {(projects[selectedProject].codeSource ||
                projects[selectedProject].website) && (
                <LinkBox isDarkTheme={isDarkTheme}>
                  {projects[selectedProject].website && (
                    <CLink href={projects[selectedProject].website}>
                      Website
                    </CLink>
                  )}
                  {projects[selectedProject].codeSource && (
                    <CLink href={projects[selectedProject].codeSource}>
                      Source code
                    </CLink>
                  )}
                </LinkBox>
              )}
            </ProjectInfo>
          )}
        </div>
      </FlexWrapper>
    </AppContainer>
  );
}

export default App;
