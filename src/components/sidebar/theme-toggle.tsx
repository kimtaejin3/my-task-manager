import styled from "@emotion/styled";

import { useSidebar } from "../../contexts/SidebarContext";

import ThemeButtonForMobile from "./theme-button-for-mobile";
import ThemeButtonsForDesktop from "./theme-buttons-for-desktop";

export default function ThemeToggle() {
  const { isSidebarOpen } = useSidebar();

  return (
    <S.Container>
      {(() => {
        if (!isSidebarOpen) {
          return <ThemeButtonForMobile />;
        }

        return <ThemeButtonsForDesktop />;
      })()}
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;
    padding: 4px;
    border-radius: 12px;
    display: flex;
    background-color: ${(props) => props.theme.themeValue.secondary};
  `,
};
