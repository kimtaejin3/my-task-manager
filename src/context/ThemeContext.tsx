import { useCallback, useLayoutEffect, useState } from "react";

import { ThemeProvider, type Theme } from "@emotion/react";

import { darkTheme, lightTheme } from "../styles/theme";

type ThemeType = "dark" | "light";

const prefersDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

const getTheme = (theme: ThemeType): Theme["themeValue"] => {
  return theme === "dark" ? darkTheme : lightTheme;
};

export default function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedTheme, setSelectedTheme] = useState<"dark" | "light">("dark");

  useLayoutEffect(() => {
    const theme = localStorage.getItem("theme");

    if (!theme) {
      const systemTheme = prefersDarkMode ? "dark" : "light";
      setSelectedTheme(systemTheme);
      localStorage.setItem("theme", systemTheme);
      return;
    }

    setSelectedTheme(theme as ThemeType);
  }, []);

  const changeTheme = useCallback((theme: ThemeType) => {
    setSelectedTheme(theme);
    localStorage.setItem("theme", theme);
  }, []);

  return (
    <ThemeProvider
      theme={{
        themeType: selectedTheme,
        changeTheme,
        themeValue: getTheme(selectedTheme),
      }}
    >
      {children}
    </ThemeProvider>
  );
}
