import { css, Global, useTheme } from "@emotion/react";

import { fontImport } from "./font";
import reset from "./reset";

export default function GlobalStyle() {
  const theme = useTheme();

  const initStyle = css`
    body {
      background-color: ${theme.themeValue.primary};
      color: ${theme.themeValue.text};
    }
  `;

  return <Global styles={[reset, initStyle, fontImport]} />;
}
