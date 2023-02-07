import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

export const ThemeSwitcher = () => {
  const [darkTheme, setDarkTheme] = useState<boolean | null>(null);

  useEffect(() => {
    if (
      localStorage?.theme === "dark" ||
      (!("theme" in localStorage) &&
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
      setDarkTheme(true);
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      return;
    }
    setDarkTheme(false);
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
  }, [darkTheme]);

  return (
    <>
      {darkTheme !== null && (
        <button
          className="h-12 absolute -top-4 right-0 flex justify-center items-end p-1 text-2xl text-white dark:text-gray-800 rounded-b-full bg-black dark:bg-gray-50 "
          onClick={() => setDarkTheme((prev) => !prev)}
        >
          {darkTheme ? (
            <IoMoon title="Change theme" />
          ) : (
            <IoSunny title="Change theme" />
          )}
        </button>
      )}
    </>
  );
};
