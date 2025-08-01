import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import moon from "../../assets/svgs/moon-fill.svg";
import sun from "../../assets/svgs/sun-fill.svg";
import typography from "../../styles/font";

export default function ThemeToggle() {
  const theme = useTheme();

  return (
    <Container>
      <ThemeButton
        onClick={() => theme.changeTheme("light")}
        isActive={theme.themeType === "light"}
      >
        <img width={16} height={16} src={sun} alt="sun" />
        <span>Light</span>
      </ThemeButton>
      <ThemeButton
        onClick={() => theme.changeTheme("dark")}
        isActive={theme.themeType === "dark"}
      >
        <img width={16} height={16} src={moon} alt="moon" />
        <span>Dark</span>
      </ThemeButton>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 4px;
  border-radius: 12px;
  display: flex;
  background-color: ${(props) => props.theme.themeValue.secondary};
`;

const ThemeButton = styled.button<{ isActive: boolean }>`
  flex: 1;
  height: 39px;
  border-radius: 12px;
  ${typography.bold14};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isActive ? props.theme.themeValue.primary : "inherit"};
`;
