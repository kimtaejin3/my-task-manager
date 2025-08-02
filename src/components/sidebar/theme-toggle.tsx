import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import Icon from "../shared/icon";

import ThemeButton from "./theme-button";

export default function ThemeToggle() {
  const theme = useTheme();

  return (
    <ThemeToggleContainer>
      <ThemeButton
        onClick={() => theme.changeTheme("light")}
        isActive={theme.themeType === "light"}
        icon={<Icon type="sun" size={16} />}
        text="Light"
      />
      <ThemeButton
        onClick={() => theme.changeTheme("dark")}
        isActive={theme.themeType === "dark"}
        icon={<Icon type="moon" size={16} />}
        text="Dark"
      />
    </ThemeToggleContainer>
  );
}

const ThemeToggleContainer = styled.div`
  width: 100%;
  padding: 4px;
  border-radius: 12px;
  display: flex;
  background-color: ${(props) => props.theme.themeValue.secondary};
`;
