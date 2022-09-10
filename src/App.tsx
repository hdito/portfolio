import { nanoid } from "nanoid";
import { useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

interface IProject {
  id: string;
  title: string;
  stack: string;
  description: string;
  codeSource?: string;
  website?: string;
}

export const App = () => {
  const projects: IProject[] = [
    {
      id: nanoid(),
      title: "Awesome project #1",
      stack: "React, TypeScript, Linaria",
      description:
        "Fdhjsgafgsajhdfg fhgjdsaf djghfsag gjsahdfg gjdhsgf gdh ghdsfgjhd ghdsafg",
      codeSource: "something.com",
    },
    {
      id: nanoid(),
      title: "Awesome project #2",
      stack: "React, TypeScript, Linaria",
      description:
        "Fdhjsgafgsajhdfg fhgjdsaf djghfsag gjsahdfg gjdhsgf gdh ghdsfgjhd ghdsafg",
      codeSource: "something.com",
    },
    {
      id: nanoid(),
      title: "The most memorable project",
      stack: "TypeScript",
      description:
        "Fdhjsgafgsajhdfg fhgjdsaf djghfsag gjsahdfg gjdhsgf gdh ghdsfgjhd ghdsafg",
      codeSource: "something.com",
    },
    {
      id: nanoid(),
      title: "Project 4",
      stack: "React, Linaria",
      description:
        "Fdhjsgafgsajhdfg fhgjdsaf djghfsag gjsahdfg gjdhsgf gdh ghdsfgjhd ghdsafg",
      codeSource: "something.com",
      website: "website.com",
    },
    {
      id: nanoid(),
      title: "Project 5",
      stack: "React, TypeScript",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione at possimus deserunt quae saepe libero, accusantium ut aliquam est ullam! Cupiditate, doloremque debitis iusto odit rerum nostrum commodi quae!",
      codeSource: "something.com",
    },
  ];
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  return (
    <div className="font-josefin min-h-screen h-full flex flex-col items-center gap-4 p-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-all duration-200">
      <div className="flex max-w-sm flex-col gap-2 justify-center">
        <div className="flex justify-between relative">
          <h1 className="text-gray-900 dark:text-gray-50 text-2xl font-bold">
            Имя Фамилия
          </h1>
          <ThemeSwitcher />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi et sequi
          soluta voluptates, iste dolor suscipit voluptas. Nihil nisi quisquam
          ullam eum, ea a, repellendus, quos eveniet adipisci quidem eius!
        </p>
        <div className="flex gap-4 flex-wrap mb-8 text-blue-800 dark:text-blue-200">
          <a className="no-underline text-lg hover:underline" href="">
            @oh
          </a>
          <a className="no-underline text-lg hover:underline" href="">
            email@gmail.com
          </a>
        </div>
        <h1 className="text-gray-900 dark:text-gray-50 text-2xl font-bold">
          Мои проекты
        </h1>
      </div>
      <div className="flex flex-col gap-2 justify-between">
        <div className="flex flex-wrap gap-4 max-w-prose">
          {projects.map((project, index) => (
            <button
              className={`py-2 px-4 border-2 border-gray-700 dark:border-gray-100 text-center hover:shadow-[4px_4px_0_0_#374151] dark:hover:shadow-[4px_4px_0_0_#f9fafb] transition-all duration-200 ease-in-out ${
                index === selectedProject
                  ? "bg-orange-600 text-gray-50"
                  : "bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-50"
              }`}
              key={project.id}
              onClick={() => setSelectedProject(index)}
            >
              {project.title}
            </button>
          ))}
        </div>
        {selectedProject !== null && (
          <div className="flex flex-col gap-2 max-w-prose">
            <div className="flex items-baseline gap-1">
              <h2 className="text-gray-900 dark:text-gray-50 text-lg font-bold">
                Стэк:{" "}
              </h2>
              <p>{projects[selectedProject].stack}</p>
            </div>
            <p>{projects[selectedProject].description}</p>
            {(projects[selectedProject].codeSource ||
              projects[selectedProject].website) && (
              <div className="flex gap-4 flex-wrap text-blue-800 dark:text-blue-200">
                {projects[selectedProject].website && (
                  <a
                    className="no-underline text-lg hover:underline"
                    href={projects[selectedProject].website}
                  >
                    Website
                  </a>
                )}
                {projects[selectedProject].codeSource && (
                  <a
                    className="no-underline text-lg hover:underline"
                    href={projects[selectedProject].codeSource}
                  >
                    Source code
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
