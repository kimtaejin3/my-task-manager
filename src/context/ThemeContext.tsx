import { useCallback, useLayoutEffect, useState } from "react";

import { ThemeProvider, type Theme } from "@emotion/react";

import { darkTheme, lightTheme } from "../styles/theme";

import type { ThemeType } from "../types/theme-type";

const prefersDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

export default function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedTheme, setSelectedTheme] = useState<ThemeType>("dark");

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
    setSelectedTheme((prevTheme) => {
      if (prevTheme === theme) return prevTheme;
      localStorage.setItem("theme", theme);
      return theme;
    });
  }, []);

  return (
    <ThemeProvider
      theme={{
        themeType: selectedTheme,
        changeTheme,
        themeValue: getThemeValue(selectedTheme),
      }}
    >
      {children}
    </ThemeProvider>
  );
}

const getThemeValue = (theme: ThemeType): Theme["themeValue"] => {
  return theme === "dark" ? darkTheme : lightTheme;
};
