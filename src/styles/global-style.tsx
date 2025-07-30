import { Global } from "@emotion/react";
import reset from "./reset";

export default function GlobalStyle() {
  return <Global styles={reset} />;
}
