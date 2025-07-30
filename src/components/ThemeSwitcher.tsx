"use client";
import { ComponentWithProps } from "@/types/componentWithProps";
import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

const THEME_STORAGE_KEY = "theme";
const DARK_THEME_CLASS = "dark";
const TOGGLER_TITLE = "Change theme";
enum THEME {
  LIGHT = "light",
  DARK = "dark",
}

export const ThemeSwitcher: ComponentWithProps = () => {
  const [darkTheme, setDarkTheme] = useState<boolean | null>(null);

  useEffect(() => {
    // Hack to access browser API while still prerendering component
    if (
      localStorage?.theme === THEME.DARK ||
      (!(THEME_STORAGE_KEY in localStorage) &&
        window.matchMedia("prefers-color-scheme: dark").matches)
    ) {
      setDarkTheme(true);
      return;
    }
    setDarkTheme(false);
  }, []);

  useEffect(() => {
    if (darkTheme === null) return;
    if (darkTheme) {
      localStorage.theme = THEME.DARK;
      document.documentElement.classList.add(DARK_THEME_CLASS);
      return;
    }
    localStorage.theme = THEME.LIGHT;
    document.documentElement.classList.remove(DARK_THEME_CLASS);
  }, [darkTheme]);

  const toggleTheme = () => setDarkTheme((prev) => !prev);

  return (
    <>
      {darkTheme !== null && (
        <button
          className="absolute -top-4 right-0 flex h-12 items-end justify-center rounded-b-full bg-black p-1 text-2xl text-white dark:bg-gray-50 dark:text-gray-800"
          onClick={toggleTheme}
        >
          {darkTheme ? (
            <IoMoon title={TOGGLER_TITLE} />
          ) : (
            <IoSunny title={TOGGLER_TITLE} />
          )}
        </button>
      )}
    </>
  );
};
