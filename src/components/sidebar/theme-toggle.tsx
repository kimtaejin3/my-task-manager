import styled from "@emotion/styled";

import { useSidebar } from "../../context/SidebarContext";

import ThemeButtonForMobile from "./theme-button-for-mobile";
import ThemeButtonsForDesktop from "./theme-buttons-for-desktop";

export default function ThemeToggle() {
  const { isSidebarOpen } = useSidebar();

  return (
    <ThemeToggleContainer>
      {(() => {
        if (!isSidebarOpen) {
          return <ThemeButtonForMobile />;
        }

        return <ThemeButtonsForDesktop />;
      })()}
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
