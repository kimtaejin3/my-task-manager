import styled from "@emotion/styled";

import { useSidebar } from "../../contexts/SidebarContext";

interface SidebarButtonProps {
  onClick?: () => void;
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
}

export default function SidebarButton({
  onClick,
  left,
  center,
  right,
}: SidebarButtonProps) {
  const { isSidebarOpen } = useSidebar();

  return (
    <S.Container onClick={onClick} isSidebarOpen={isSidebarOpen}>
      <S.Content>
        {left}
        <S.FadeInText isVisible={isSidebarOpen}>{center}</S.FadeInText>
      </S.Content>
      <S.FadeInText isVisible={isSidebarOpen}>{right}</S.FadeInText>
    </S.Container>
  );
}

const S = {
  Container: styled.button<{ isSidebarOpen: boolean }>`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: ${(props) =>
      props.isSidebarOpen ? "space-between" : "center"};
    padding: 8px;
    border-radius: 46px;
  `,

  Content: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `,

  FadeInText: styled.div<{ isVisible: boolean }>`
    display: ${(props) => (props.isVisible ? "block" : "none")};
    overflow: hidden;
    white-space: nowrap;
    transition: display 0.5s ease-in-out;
  `,
};
