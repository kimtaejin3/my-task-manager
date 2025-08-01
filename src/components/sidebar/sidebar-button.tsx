import styled from "@emotion/styled";

import { useSidebar } from "../../context/SidebarContext";

interface Props {
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
}: Props) {
  const { isSidebarOpen } = useSidebar();

  return (
    <SidebarButtonContainer onClick={onClick} isSidebarOpen={isSidebarOpen}>
      <SidebarButtonContent>
        {left}
        {isSidebarOpen && (
          <FadeInText isVisible={isSidebarOpen}>{content}</FadeInText>
        )}
      </SidebarButtonContent>
      {isSidebarOpen && (
        <FadeInText isVisible={isSidebarOpen}>{right}</FadeInText>
      )}
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
  gap: 10px;
`;

const FadeInText = styled.div<{ isVisible: boolean }>`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.5s ease-in-out;
`;
