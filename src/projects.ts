import { nanoid } from "nanoid";
import { Project } from "@/types/projectType";

export const projects: Project[] = [
  {
    id: nanoid(),
    title: "Type",
    stack: "Next.js, TypeScript, Tailwind CSS.",
    description: "Тренажёр для слепой печати.",
    website: "https://type-hdito.vercel.app/",
    codeSource: "https://github.com/hdito/type",
  },
  {
    id: nanoid(),
    title: "Minimarkdown",
    stack: "React, TypeScript, Redux, Firebase, Tailwind CSS, i18next.",
    description: "Минималистичный текстовый редактор с поддержкой Markdown.",
    codeSource: "https://github.com/hdito/minimarkdown",
    website: "https://minimarkdown.web.app/",
  },
  {
    id: nanoid(),
    title: "Pomodoro",
    stack: "Next.js, TypeScript, Redux, Sass.",
    description: "Таймер для работы по методу помодоро со списком дел.",
    codeSource: "https://github.com/hdito/pomodoro",
    website: "https://pomodoro.vercel.app",
  },
  {
    id: nanoid(),
    title: "Где Перепечко?",
    stack: "React, TypeScript, Firebase, Tailwind CSS.",
    description: "Игра из одноимённой группы в\xa0VK.",
    codeSource: "https://github.com/hdito/gdeperepechko",
    website: "https://gdeperepechko.web.app/",
  },
];
