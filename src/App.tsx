import { css } from "@emotion/react";
import styled from "@emotion/styled";

import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import colors from "./styles/color";

function App() {
  return (
    <>
      <div
        css={css`
          color: red;
        `}
      >
        sdf
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Title>Vite + React</Title>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

const Title = styled.h1`
  color: ${colors.greenPrimary};
`;

export default App;
