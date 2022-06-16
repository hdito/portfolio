import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { nanoid } from "nanoid";
import { useState } from "react";

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
    h1,
    h2 {
      margin: 0;
    }
    h1,
    h2 {
      color: hsl(0, 0%, 0%);
    }
    h2 {
      font-size: 1.25em;
    }
    :root {
      --main-color: hsl(208, 100%, 38%);
      --second-color: hsl(165, 100%, 20%);
      font-family: Rubik, Arial, sans-serif;
      color: hsl(0, 0%, 20%);
    }
  }
`;
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  grid-column: 2/5;
  max-width: 80ch;
`;
const ProjectCard = styled.button`
  border: none;
  text-decoration: none;
  color: inherit;
  font-size: 1rem;
  padding: 0.5rem 1em;
  background: hsl(0, 0%, 90%);
  border-radius: 0.5rem;
  text-align: center;
  transition: all 0.2s;
  cursor: default;
  &:hover {
    outline: 0.15rem solid var(--second-color);
    outline-offset: 0.15rem;
  }
`;
const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto auto 1fr;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
  align-items: center;
  gap: 1rem;
`;
const HeaderContainer = styled.div`
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
  max-width: 80ch;

`;
const LinkBox = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
const CLink = styled.a`
  text-decoration: none;
  color: var(--main-color);
  font-size: 1.25rem;
  &:hover {
    text-decoration: underline;
  }
`;
const ProjectInfo = styled.div`
  grid-column: 2/5;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 80ch;
`;
const active = css`
  color: white;
  background: var(--second-color);
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

function App() {
  const [selectedProject, setSelectedProject] = useState("");
  return (
    <AppContainer>
      <HeaderContainer>
        <h1>Name Surname</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi et sequi
          soluta voluptates, iste dolor suscipit voluptas. Nihil nisi quisquam
          ullam eum, ea a, repellendus, quos eveniet adipisci quidem eius!
        </p>
        <LinkBox>
          <CLink href="">@oh</CLink>
          <CLink href="">email@gmail.com</CLink>
        </LinkBox>
      </HeaderContainer>
      <MainContainer>
        <h1>My projects</h1>
      </MainContainer>
      <CardContainer>
        {Object.keys(projects).map((key) => (
          <ProjectCard
            className={key === selectedProject ? active : ""}
            onClick={() => setSelectedProject(key)}
            href=""
          >
            {projects[key].title}
          </ProjectCard>
        ))}
      </CardContainer>
      {selectedProject !== "" && (
        <ProjectInfo>
          <div
            style={{ display: "flex", alignItems: "baseline", gap: "0.3rem" }}
          >
            <h2>Stack: </h2>
            <p>{projects[selectedProject].stack}</p>
          </div>
          <p>{projects[selectedProject].description}</p>
          {(projects[selectedProject].codeSource ||
            projects[selectedProject].website) && (
            <LinkBox>
              {projects[selectedProject].website && (
                <CLink href={projects[selectedProject].website}>Website</CLink>
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
    </AppContainer>
  );
}

export default App;
