import { Global } from "@emotion/react";

import init from "./init";
import reset from "./reset";

export default function GlobalStyle() {
  return <Global styles={[reset, init]} />;
}
