import styled from "@emotion/styled";

import { useSidebar } from "../../contexts/SidebarContext";

interface SidebarButtonProps {
  onClick?: () => void;
  left?: React.ReactNode;
  content?: React.ReactNode;
  right?: React.ReactNode;
}

export default function SidebarButton({
  onClick,
  left,
  content,
  right,
}: SidebarButtonProps) {
  const { isSidebarOpen } = useSidebar();

  return (
    <SidebarButtonContainer onClick={onClick} isSidebarOpen={isSidebarOpen}>
      <SidebarButtonContent>
        {left}
        <FadeInText isVisible={isSidebarOpen}>{content}</FadeInText>
      </SidebarButtonContent>
      <FadeInText isVisible={isSidebarOpen}>{right}</FadeInText>
    </SidebarButtonContainer>
  );
}

const SidebarButtonContainer = styled.button<{ isSidebarOpen: boolean }>`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.isSidebarOpen ? "space-between" : "center"};
  padding: 8px;
  border-radius: 46px;
`;

const SidebarButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const FadeInText = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  overflow: hidden;
  white-space: nowrap;
  transition: display 0.5s ease-in-out;
`;
