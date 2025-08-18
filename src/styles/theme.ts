import colors from "./color";

import type { ThemeValue } from "../types/theme-type";

export const lightTheme: ThemeValue = {
  primary: colors.white,
  secondary: colors.blueSurface,
  tertiary: colors.ivory300,
  text: colors.slate900,
};

export const darkTheme: ThemeValue = {
  primary: colors.slate900,
  secondary: colors.slate800,
  tertiary: colors.slate300,
  text: colors.ivory,
};
