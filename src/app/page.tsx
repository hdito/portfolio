import { ProjectCard } from "@/components/projectCard";
import { ThemeSwitcher } from "@/components/themeSwitcher";
import { projects } from "@/projects";
import { ComponentWithProps } from "@/types/componentWithProps";
import { FaTelegramPlane } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Portfolio: ComponentWithProps = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-white font-noto text-black dark:bg-slate-900 dark:text-gray-200">
      <div className="flex flex-col justify-center gap-4 px-4 py-4 pb-12 sm:max-w-columns-8-1280 sm:px-0 2xl:max-w-columns-6-1920">
        <div className="relative flex justify-between">
          <h1 className="text-3xl font-bold dark:text-gray-50">
            Егор <br />
            Ермолаев
          </h1>
          <ThemeSwitcher />
        </div>
        <p>
          Привет! Я веб-разработчик, и я делаю сайты на React с Angular. За пару
          лет я успел поработать как с многолетними legacy кодовыми базами, так
          и сделать несколько MVP с нуля.
        </p>
        <p>
          Если хотите посотрудничать, вы можете связаться со мной через Telegram
          или по почте.
        </p>
        <div className="space-y-2">
          <a
            className="flex max-w-fit items-center gap-2 text-lg underline decoration-blue-600 decoration-2 underline-offset-[6px] hover:no-underline dark:decoration-blue-400"
            href="https://t.me/hditow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane />
            <span className="text-blue-600 dark:text-blue-400">@hditow</span>
          </a>
          <a
            className="flex max-w-fit items-center gap-2 text-lg underline decoration-blue-600 decoration-2 underline-offset-[6px] hover:no-underline dark:decoration-blue-400"
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
      <div className="m-auto w-full px-4 sm:max-w-columns-8-1280 sm:px-0 2xl:max-w-columns-6-1920">
        <h2 className="text-2xl font-bold dark:text-gray-50">Мои проекты</h2>
      </div>
      <div className="w-full flex-1 p-4 sm:max-w-columns-12-1280 sm:pb-8 lg:px-0 2xl:max-w-columns-12-1920">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4 sm:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
