import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import typography from "../../styles/font";
import Icon from "../shared/icon";

export default function ThemeButtonsForDesktop() {
  const theme = useTheme();

  return (
    <>
      <S.ThemeButton
        onClick={() => theme.changeTheme("light")}
        isActive={theme.themeType === "light"}
      >
        <Icon type="sun" size={16} theme={theme} />
        <span>Light</span>
      </S.ThemeButton>
      <S.ThemeButton
        onClick={() => theme.changeTheme("dark")}
        isActive={theme.themeType === "dark"}
      >
        <Icon type="moon" size={16} theme={theme} />
        <span>Dark</span>
      </S.ThemeButton>
    </>
  );
}

const S = {
  ThemeButton: styled.button<{ isActive: boolean }>`
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
  `,
};
