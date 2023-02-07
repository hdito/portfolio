import { FaTelegramPlane } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { ProjectCard } from "@/components/projectCard";
import { projects } from "@/components/projects";
import { ThemeSwitcher } from "@/components/themeSwitcher";

export default function Portfolio() {
  return (
    <div className="font-noto flex flex-col items-center min-h-screen text-black dark:text-gray-200 bg-white dark:bg-slate-900">
      <div className="px-4 sm:px-0 flex flex-col gap-4 justify-center sm:max-w-columns-8-1280 2xl:max-w-columns-6-1920 py-4 pb-12">
        <div className="flex justify-between relative">
          <h1 className="dark:text-gray-50 text-3xl font-bold">
            Егор <br />
            Ермолаев
          </h1>
          <ThemeSwitcher />
        </div>
        <p>
          Привет! Я фронтэндер, специализирующийся на стеке из Typescript,
          React, Vite и Tailwind&nbsp;CSS. Также у меня есть опыт работы с
          Next.js, Sass, PostCSS, Linaria и Redux в связке с Redux&#8209;Saga.
        </p>
        <p>
          Если хотите посотрудничать, вы можете связаться со мной через Telegram
          или по почте.
        </p>
        <div className="space-y-2">
          <a
            className="text-lg flex gap-2 items-center max-w-fit underline underline-offset-[6px] decoration-2 decoration-blue-600 dark:decoration-blue-400 hover:no-underline"
            href="https://t.me/hditow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane />
            <span className="text-blue-600 dark:text-blue-400">@hditow</span>
          </a>
          <a
            className="text-lg flex gap-2 items-center max-w-fit underline underline-offset-[6px] decoration-2 decoration-blue-600 dark:decoration-blue-400 hover:no-underline"
            href="mailto:hditow@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrMail />
            <span className="text-blue-600 dark:text-blue-400">
              hditow@gmail.com
            </span>
          </a>
        </div>
      </div>
      <div className="sm:max-w-columns-8-1280 2xl:max-w-columns-6-1920 w-full m-auto px-4 sm:px-0">
        <h2 className="text-2xl font-bold dark:text-gray-50">Мои проекты</h2>
      </div>
      <div className="flex-1 sm:max-w-columns-12-1280 2xl:max-w-columns-12-1920 w-full p-4 lg:px-0 sm:pb-8">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4 sm:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
