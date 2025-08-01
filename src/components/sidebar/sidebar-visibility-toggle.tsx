import styled from "@emotion/styled";

import closeRound from "../../assets/svgs/close-round.svg";
import menu from "../../assets/svgs/menu.svg";
import { useSidebar } from "../../context/SidebarContext";

export default function SidebarVisibilityToggle() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <SidebarVisibilityToggleContainer
      onClick={toggleSidebar}
      isSidebarOpen={isSidebarOpen}
    >
      <img src={isSidebarOpen ? closeRound : menu} alt="toggle" />
    </SidebarVisibilityToggleContainer>
  );
}

const SidebarVisibilityToggleContainer = styled.button<{
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
`;
