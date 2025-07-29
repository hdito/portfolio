import { Project } from "@/types/projectType";

export const projects: Project[] = [
  {
    id: crypto.randomUUID(),
    title: "Type",
    stack: "Next.js, TypeScript, Tailwind CSS.",
    description: "Тренажёр для слепой печати.",
    website: "https://type-hdito.vercel.app/",
    codeSource: "https://github.com/hdito/type",
  },
  {
    id: crypto.randomUUID(),
    title: "Где Перепечко?",
    stack: "React, TypeScript, Firebase, Tailwind CSS.",
    description: "Игра из одноимённой группы в\xa0VK.",
    codeSource: "https://github.com/hdito/gdeperepechko",
    website: "https://gdeperepechko.web.app/",
  },
];
