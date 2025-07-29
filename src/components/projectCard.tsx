import { ComponentWithProps } from "@/types/componentWithProps";
import { Project } from "@/types/projectType";
import { FiExternalLink } from "react-icons/fi";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard: ComponentWithProps<ProjectCardProps> = ({
  project,
}) => {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-slate-200 p-4 pb-5 leading-tight shadow-md shadow-gray-400 dark:border-none dark:bg-slate-800 dark:shadow-none sm:shadow-lg sm:shadow-gray-400">
      <h3 className="text-xl font-bold dark:text-gray-50">{project.title}</h3>
      <p className="mb-4">
        <span className="mr-1 inline-block font-bold">Стек:</span>
        <span>{project.stack}</span>
      </p>
      <p className="mb-4 flex-1 whitespace-pre-wrap">{project.description}</p>
      <div className="wrap flex gap-4">
        <a
          className="flex items-center gap-1 underline decoration-blue-600 decoration-2 underline-offset-[6px] hover:no-underline dark:decoration-blue-400"
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-blue-600 dark:text-blue-400">Сайт</span>
          <FiExternalLink />
        </a>
        <a
          className="flex items-center gap-1 underline decoration-blue-600 decoration-2 underline-offset-[6px] hover:no-underline dark:decoration-blue-400"
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
