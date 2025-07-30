import { notoSans } from "@/fonts";
import "@/styles/globals.css";
import { ComponentWithProps } from "@/types/componentWithProps";
import { Metadata } from "next";
import { JSX } from "react";

export const metadata: Metadata = {
  title: "Портфолио",
  description: "Персональное портфолио",
};

const App: ComponentWithProps<{ children: JSX.Element }> = ({ children }) => {
  return (
    <html lang="ru">
      <body>
        <main className={notoSans.variable}>{children}</main>
      </body>
    </html>
  );
};

export default App;
