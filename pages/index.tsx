import { FaTelegramPlane } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { ProjectCard } from "../components/projectCard";
import { projects } from "../components/projects";
import { ThemeSwitcher } from "../components/themeSwitcher";

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center font-jost min-h-screen text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900">
      <div className="px-4 sm:px-0 flex flex-col gap-4 justify-center sm:max-w-columns-8-1280 2xl:max-w-columns-6-1920 py-4 pb-12">
        <div className="flex justify-between relative">
          <h1 className="text-black dark:text-gray-50 text-3xl font-bold">
            Егор <br />
            Ермолаев
          </h1>
          <ThemeSwitcher />
        </div>
        <p>
          Привет! Я фронтэндер, специализирующийся на Typescript, React, Vite и
          Tailwind&nbsp;CSS. Также у меня есть опыт работы с Linaria и Redux в
          связке с Redux&#8209;Saga.
        </p>
        <p>
          Если хотите посотрудничать, вы можете связаться со мной через Telegram
          или Gmail.
        </p>
        <div className="flex gap-4 flex-wrap text-white">
          <a
            className="no-underline text-lg"
            href="https://t.me/hditow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex gap-2 items-center bg-tg-blue rounded-full px-4 py-1 hover:opacity-80 transition-opacity duration-200">
              <FaTelegramPlane />
              <div>@hditow</div>
            </button>
          </a>
          <a
            className="no-underline text-lg"
            href="mailto:hditow@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex gap-2 items-center bg-blue-700 rounded-full px-4 py-1 hover:opacity-80 transition-opacity duration-200">
              <GrMail />
              <div>hditow@gmail.com</div>
            </button>
          </a>
        </div>
      </div>
      <div className="px-4 sm:px-0 relative border-2 border-black dark:border-gray-50 w-full">
        <div className="sm:max-w-columns-8-1280 2xl:max-w-columns-6-1920 w-full m-auto">
          <h2 className="absolute -translate-y-1/2 bg-white dark:bg-gray-900 text-black border-4 border-black dark:border-gray-50 px-2 dark:text-gray-50 text-2xl font-bold">
            Мои проекты
          </h2>
        </div>
      </div>
      <div className="sm:max-w-columns-12-1280 2xl:max-w-columns-12-1920 w-full grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] px-4 gap-4 pt-12 pb-4 lg:px-0">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
