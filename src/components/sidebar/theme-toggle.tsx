import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import moon from "../../assets/svgs/moon-fill.svg";
import sun from "../../assets/svgs/sun-fill.svg";

import ThemeButton from "./theme-button";

export default function ThemeToggle() {
  const theme = useTheme();

  return (
    <ThemeToggleContainer>
      <ThemeButton
        onClick={() => theme.changeTheme("light")}
        isActive={theme.themeType === "light"}
        icon={<img width={16} height={16} src={sun} alt="sun" />}
        text="Light"
      />
      <ThemeButton
        onClick={() => theme.changeTheme("dark")}
        isActive={theme.themeType === "dark"}
        icon={<img width={16} height={16} src={moon} alt="moon" />}
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
