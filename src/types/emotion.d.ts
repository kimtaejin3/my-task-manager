import "@emotion/react";

type ThemeType = {
  //Todo: dark | light
  changeTheme: (theme: "dark" | "light") => void;
  themeType: "dark" | "light";
  themeValue: {
    primary: string;
    secondary: string;
    text: string;
  };
};

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
