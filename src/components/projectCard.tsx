import { Project } from "@/types/projectType";
import { FiExternalLink } from "react-icons/fi";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col gap-2 leading-tight border rounded-lg shadow-md sm:shadow-lg sm:shadow-gray-400 shadow-gray-400 border-slate-200 dark:shadow-none dark:bg-slate-800 dark:border-none p-4 pb-5">
      <h3 className="font-bold text-xl dark:text-gray-50">{project.title}</h3>
      <p className="mb-4">
        <span className="inline-block mr-1 font-bold">Стек:</span>
        <span>{project.stack}</span>
      </p>
      <p className="flex-1 mb-4 whitespace-pre-wrap">{project.description}</p>
      <div className="flex wrap gap-4">
        <a
          className="flex gap-1 items-center underline underline-offset-[6px] decoration-2 decoration-blue-600 dark:decoration-blue-400 hover:no-underline"
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-blue-600 dark:text-blue-400">Сайт</span>
          <FiExternalLink />
        </a>
        <a
          className="flex gap-1 items-center underline underline-offset-[6px] decoration-2 decoration-blue-600 dark:decoration-blue-400 hover:no-underline"
          href={project.codeSource}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-blue-600 dark:text-blue-400">Код</span>
          <FiExternalLink />
        </a>
      </div>
    </div>
  );
};
