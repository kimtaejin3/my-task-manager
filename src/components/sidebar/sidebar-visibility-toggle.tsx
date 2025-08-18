import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import { useSidebar } from "../../contexts/SidebarContext";
import Icon from "../shared/icon";

export default function SidebarVisibilityToggle() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const theme = useTheme();

  return (
    <S.Container onClick={toggleSidebar} isSidebarOpen={isSidebarOpen}>
      <Icon type={isSidebarOpen ? "close" : "menu"} theme={theme} size={24} />
    </S.Container>
  );
}

const S = {
  Container: styled.button<{
    isSidebarOpen: boolean;
  }>`
    width: 40px;
    height: 40px;
    background-color: ${(props) => props.theme.themeValue.secondary};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${(props) => (props.isSidebarOpen ? "" : "0 auto")};
  `,
};
