import styled from "@emotion/styled";

import closeRound from "../../assets/svgs/close-round.svg";
import menu from "../../assets/svgs/menu.svg";
import { useSidebar } from "../../context/SidebarContext";
import colors from "../../styles/color";

export default function ToggleButton() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <Container onClick={toggleSidebar} isSidebarOpen={isSidebarOpen}>
      <img src={isSidebarOpen ? closeRound : menu} alt="toggle" />
    </Container>
  );
}

const Container = styled.button<{ isSidebarOpen: boolean }>`
  width: 40px;
  height: 40px;
  background-color: ${colors.darkTertiary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => (props.isSidebarOpen ? "" : "0 auto")};
`;
