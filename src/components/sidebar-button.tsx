import styled from "@emotion/styled";

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
  return (
    <SidebarButtonContainer onClick={onClick}>
      <SidebarButtonContent>
        {left}
        {content}
      </SidebarButtonContent>
      {right}
    </SidebarButtonContainer>
  );
}

const SidebarButtonContainer = styled.button`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-radius: 46px;
`;

const SidebarButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
