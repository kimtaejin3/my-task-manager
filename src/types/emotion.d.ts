import "@emotion/react";
import type { ThemeType } from "./theme-type";

type ExtendedTheme = {
  changeTheme: (theme: ThemeType) => void;
  themeType: ThemeType;
  themeValue: {
    primary: string;
    secondary: string;
    text: string;
  };
};

declare module "@emotion/react" {
  export interface Theme extends ExtendedTheme {}
}
