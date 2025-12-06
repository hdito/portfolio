import { notoSans } from "@/fonts";
import "@/styles/globals.css";
import { Metadata } from "next";
import type { JSX } from "react";

export const metadata: Metadata = {
  title: "Портфолио",
  description: "Персональное портфолио",
};

const App: (props: LayoutProps<"/">) => JSX.Element = ({ children }) => {
  return (
    <html lang="ru">
      <body>
        <main className={notoSans.variable}>{children}</main>
      </body>
    </html>
  );
};

export default App;
