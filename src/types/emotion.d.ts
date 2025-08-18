import "@emotion/react";
import type { ThemeType, ThemeValue } from "./theme-type";

type ExtendedTheme = {
  changeTheme: (theme: ThemeType) => void;
  themeType: ThemeType;
  themeValue: ThemeValue;
};

declare module "@emotion/react" {
  export interface Theme extends ExtendedTheme {}
}
