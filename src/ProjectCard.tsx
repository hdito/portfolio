import { IoGlobeOutline, IoLogoGithub } from "react-icons/io5";
import { project } from "./projectType";

export const ProjectCard = ({ project }: { project: project }) => {
  return (
    <div
      key={project.id}
      className="flex flex-col gap-2 leading-snug border-4 border-black dark:border-gray-50 px-2 py-2 hover:-translate-y-1 transition-transform duration-200 self-start"
    >
      <h3 className="font-bold text-xl text-black dark:text-gray-50">
        {project.title}
      </h3>
      <p className="mb-4">
        <span className="inline-block mr-1 text-black dark:text-gray-50 font-bold">
          Стэк:
        </span>
        <span>{project.stack}</span>
      </p>
      <p>{project.description}</p>
      <div className="flex wrap gap-2">
        <a href={project.website} target="_blank" rel="noopener noreferrer">
          <button className="flex gap-1 items-center rounded-full p-1 pr-3 bg-gray-700 dark:bg-gray-300 dark:text-gray-800 text-white hover:opacity-80 transition-opacity duration-200">
            <IoGlobeOutline className="text-2xl" />
            Сайт
          </button>
        </a>
        <a href={project.codeSource} target="_blank" rel="noopener noreferrer">
          <button className="flex gap-1 items-center rounded-full p-1 pr-3 bg-gray-700 text-white dark:bg-gray-300 dark:text-gray-800 hover:opacity-80 transition-opacity duration-200">
            <IoLogoGithub className="text-2xl" />
            Код
          </button>
        </a>
      </div>
    </div>
  );
};
