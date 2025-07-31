import { css } from "@emotion/react";

import colors from "./color";

const init = () => {
  return css`
    body {
      background-color: ${colors.darkPrimary};
      color: ${colors.light};
    }
  `;
};

export default init;
