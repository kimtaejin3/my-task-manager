import { type Theme } from "@emotion/react";
import styled from "@emotion/styled";

import typography from "../../styles/font";

export default function DropdownItem({
  theme,
  onClick,
  children,
}: {
  theme: Theme;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <S.DropdownItem onClick={onClick} theme={theme}>
      {children}
    </S.DropdownItem>
  );
}

const S = {
  DropdownItem: styled.li<{ theme: Theme }>`
    display: flex;
    align-items: center;
    padding: 10px 12px;
    cursor: pointer;
    ${typography.bold14}

    &:hover {
      background-color: ${(props) => props.theme.themeValue.secondary};
    }
  `,
};
