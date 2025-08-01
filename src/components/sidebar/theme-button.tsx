import styled from "@emotion/styled";

import typography from "../../styles/font";

export default function ThemeButton({
  onClick,
  isActive,
  icon,
  text,
}: {
  onClick: () => void;
  isActive: boolean;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <ThemeButtonContainer onClick={onClick} isActive={isActive}>
      {icon}
      <span>{text}</span>
    </ThemeButtonContainer>
  );
}

const ThemeButtonContainer = styled.button<{ isActive: boolean }>`
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
`;
