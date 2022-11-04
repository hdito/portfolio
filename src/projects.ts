import { nanoid } from "nanoid";
import { project } from "./projectType";

export const projects: project[] = [
  {
    id: nanoid(),
    title: "Где Перепечко?",
    stack: "React, TypeScript, Firebase, Linaria.",
    description: "Игра из одноимённой группы в VK.",
    codeSource: "https://github.com/hdito/gdeperepechko",
    website: "https://gdeperepechko.web.app/",
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
    title: "Minimarkdown",
    stack: "React, Typescript, Redux, Firebase, Tailwind CSS, i18next.",
    description: "Минималистичный текстовый редактор с поддержкой Markdown.",
    codeSource: "https://github.com/hdito/minimarkdown",
    website: "https://minimarkdown.web.app/",
  },
];
