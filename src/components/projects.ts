import { nanoid } from "nanoid";
import { Project } from "@/types/projectType";

export const projects: Project[] = [
  {
    id: nanoid(),
    title: "Type",
    stack: "Next.js, Tailwind CSS",
    description:
      "Тренажёр для оттачивания слепой печати.\n\n(Пока поддерживает только клавиатуру)",
    website: "https://type-hdito.vercel.app/",
    codeSource: "https://github.com/hdito/type",
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
    description: "Игра из одноимённой группы в\xa0VK.",
    codeSource: "https://github.com/hdito/gdeperepechko",
    website: "https://gdeperepechko.web.app/",
  },
];
