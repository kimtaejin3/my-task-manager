import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import Icon from "../shared/icon";

export default function ThemeButtonForMobile() {
  const theme = useTheme();

  return (
    <Container
      onClick={() =>
        theme.changeTheme(theme.themeType === "light" ? "dark" : "light")
      }
    >
      {(() => {
        switch (theme.themeType) {
          case "light":
            return <Icon svgName="sun" size={16} theme={theme} />;
          case "dark":
            return <Icon svgName="moon" size={16} theme={theme} />;
          default:
            theme.themeType satisfies never;
        }
      })()}
    </Container>
  );
}

const Container = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 39px;
`;
