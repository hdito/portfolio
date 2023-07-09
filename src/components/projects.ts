import { nanoid } from "nanoid";
import { Project } from "@/types/projectType";

export const projects: Project[] = [
  {
    id: nanoid(),
    title: "Blog API",
    stack: "Express, Typescript, Mongoose, Swagger",
    description: "API для блога с комментариями.",
    codeSource: "https://github.com/hdito/blog-api",
    website: "https://blog-api-production-3e1e.up.railway.app",
  },
  {
    id: nanoid(),
    title: "Blog Client",
    stack: "Vue, Typescript, Tailwind CSS.",
    description: "Клиентское приложение для Blog API.",
    codeSource: "https://github.com/hdito/blog-client",
    website: "https://blog-api-client-zeta.vercel.app",
  },
  {
    id: nanoid(),
    title: "Minimarkdown",
    stack: "React, Typescript, Redux, Firebase, Tailwind CSS, i18next.",
    description: "Минималистичный текстовый редактор с поддержкой Markdown.",
    codeSource: "https://github.com/hdito/minimarkdown",
    website: "https://minimarkdown.web.app/",
  },
  {
    id: nanoid(),
    title: "Pomodoro",
    stack: "Next.js, Typescript, Redux, Sass.",
    description: "Таймер для работы по методу помодоро со списком дел.",
    codeSource: "https://github.com/hdito/pomodoro",
    website: "https://pomodoro.vercel.app",
  },
  {
    id: nanoid(),
    title: "Shopping list",
    stack: "React, TypeScript, Firebase, Tailwind CSS.",
    description:
      "Приложение, позволяющее создавать и совместно редактировать списки покупок.",
    codeSource: "https://github.com/hdito/shopping-list",
    website: "https://shopping-list-1e7b4.web.app",
  },
  {
    id: nanoid(),
    title: "Где Перепечко?",
    stack: "React, TypeScript, Firebase, Linaria.",
    description: "Игра из одноимённой группы в VK.",
    codeSource: "https://github.com/hdito/gdeperepechko",
    website: "https://gdeperepechko.web.app/",
  },
];
