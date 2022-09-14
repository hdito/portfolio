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
const projects: IProject[] = [
  {
    id: nanoid(),
    title: "Где Перепечко?",
    stack: "React, TypeScript, Vite, Firebase, Linaria",
    description:
      "Летом 2022-го я разработал интерактивную версию игры из группы в VK «Где перепечко?». В приложении на различных карточках необходимо найти спрятанного курсанта Перепечко. Первоначально изображения для игры были жёстко закодированы, но потом я перенёс их в облачное хранилище Cloud Storage от Firebase. Таким образом, для добавления новых карточек больше не нужно изменять код приложения — достаточно загрузить картинки в облако и прописать в базе данных координаты Перепечко. Проект сделан для онлайн-курса The Odin Project.",
    codeSource: "https://github.com/hdito/gdeperepechko",
    website: "https://gdeperepechko.web.app/",
  },
  {
    id: nanoid(),
    title: "Shopping list",
    stack: "React, TypeScript, Vite, Firebase, Tailwind",
    description:
      "Приложение, позволяющее создавать и совместно редактировать списки покупок.",
    codeSource: "https://github.com/hdito/shopping-list",
    website: "https://shopping-list-1e7b4.web.app",
  },
];

export const App = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  return (
    <div className="font-jost min-w-min min-h-screen h-full flex flex-col items-center gap-3 p-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-all duration-200">
      <div className="flex max-w-sm flex-col gap-2 justify-center">
        <div className="flex justify-between relative">
          <h1 className="text-gray-900 dark:text-gray-50 text-3xl font-bold">
            Егор <br />
            Ермолаев
          </h1>
          <ThemeSwitcher />
        </div>
        <p>
          Front-end разработчик, специализирующийся на Typescript, React, Vite и
          Tailwind CSS
        </p>
        <div className="flex gap-4 flex-wrap mb-8 text-blue-800 dark:text-blue-200">
          <a
            className="no-underline text-lg hover:underline"
            href="https://t.me/hditow"
            target="_blank"
            rel="noopener noreferrer"
          >
            @hditow
          </a>
          <a
            className="no-underline text-lg hover:underline"
            href="mailto:hditow@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            hditow@gmail.com
          </a>
        </div>
        <h1 className="text-gray-900 dark:text-gray-50 text-2xl font-bold">
          Мои проекты
        </h1>
      </div>
      <div className="max-w-lg w-full flex flex-col gap-2">
        <div className="self-start flex flex-wrap gap-4">
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
                Стэк:
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
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Сайт
                  </a>
                )}
                {projects[selectedProject].codeSource && (
                  <a
                    className="no-underline text-lg hover:underline"
                    href={projects[selectedProject].codeSource}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Код
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
